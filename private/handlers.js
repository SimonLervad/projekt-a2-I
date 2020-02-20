'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the routing mechanism
 */
const fs = require("fs");                           // file system access
const httpStatus = require("http-status-codes");
const lib = require("../private/libWebUtil");           // home grown utilities
const experimental = require("../private/myTemplater"); // highly experimental template
const notThere = require("../private/myTemplater2"); // highly experimental template
const experimental1 = require("../private/myCountry"); // highly experimental template
const experimental2 = require("../private/myCities"); // highly experimental template
const experimental3 = require("../private/myLang"); // highly experimental template
const countryList = require("../private/continents"); // highly experimental template


const goError = function(res) {
    res.writeHead(httpStatus.NOT_FOUND, {   // http page not found, 404
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write("<h1>404 Not Found</h1>");
    res.end();
};

module.exports = {
    getAndRespond(path, contentType, res) {
        if (fs.existsSync(path)) {              // does file exist, sync
            fs.readFile(path, function(err, data) { // read
                if (err) {                      // if read error
                    console.log("nml: " + err);           // inform server
                    goError(res);               // inform user
                    return;                     // back to caller
                }
                res.writeHead(httpStatus.OK, contentType); // prep header
                res.write(data);                // prep body with read data
                res.end();                      // send response
            });
        } else {
            goError(res);                       // doesnt exist error
        }
    },

    receiveDataCountry(req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(experimental.receipt(obj));

        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;
        let newCountry = { name: obj.POST.country, 
                           continent: obj.POST.continent, 
                           area: obj.POST.area, 
                           population: obj.POST.population, 
                           governmentForm: obj.POST.governmenform 
                        };
        let query = { name: newCountry.name };

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            console.log(`Connected to server`);
            const db = con.db(dbname);                  // make dbname the current db
            /* Update,
             * updates/inserts city in the database
             */

            db.collection("country").updateOne(query, {"$set": newCountry}, {upsert: true}, function (err, collection) {
                if (err) {
                    throw err;
                }
                console.log("Country inserted/updated");
                con.close();
            });
        });
        res.end();
    },
    receiveDataCity(req, res, data, asset) {
        asset = asset.substring(1);
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(experimental.receipt(obj));           // home made templating for native node

        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;

        let newCity = { country: obj.POST.country, 
            name: obj.POST.city,  
            population: obj.POST.population, 
            isCapital: obj.POST.capital 
         };
        let findCountry = { country: obj.POST.country };
        let findCity = { city: obj.POST.city };
        
        console.log("asset " + asset)
        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname);                  // make dbname the current db
            if (asset === "myCities") {
                
                /* Update,
                * updates/inserts city in the database
                */
                db.collection("city").findOne(findCountry).then(doc => {
                    console.log(doc);
                    if(doc === null){
                        console.log("Landet er der ikke");
                    }else{
                        console.log("Landet er der");
                        db.collection("city").findOne(findCity).then(doc => {
                            db.collection("city").updateOne(findCity, {"$set": newCity}, {upsert: true}, function (err, collection) {
                                if (err) {
                                    throw err;
                                }
                                console.log("City updated");
                                con.close();
                            });
                        });
                    } 
                });     
            }
            if (asset === "myLang") {
                let newLang = { country: obj.POST.country, 
                    speakers: obj.POST.speakers,
                    language: obj.POST.language, 
                    isOfficial: obj.POST.isOfficial 
                };
                let findLang = { country: obj.POST.country };
                    /* Update,
                    * updates/inserts lang in the database
                    */
                db.collection("language").findOne(findLang).then(doc => {
                    console.log(doc);
                    if(doc === null){
                        console.log("Den er der ikke");
                    } else{
                        db.collection("language").updateOne(findLang, {"$set": newLang}, {upsert: true}, function (err, collection) {
                            if (err) {
                                throw err;
                            }
                            console.log("Lang inserted/updated");
                            con.close();
                        });
                    } 
                });  
            }
        });
        res.end();
    },

    dbRead(req, res, asset) {
        asset = asset.substring(1);
        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true},function (error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname);                  // make dbname the current db
            /* Retrieve,
             * reads everything from the database
             */
            db.collection(asset).find().sort({continent : 1, country : 1, }).toArray(function (err, city) {

                if (err) {
                    throw err;
                }
                res.writeHead(httpStatus.OK, {                  // yes, write relevant header
                    "Content-Type": "text/html; charset=utf-8"
                });
                if (asset === "country") {
                    res.write(experimental1.cities(city));           // home made templating for native node
                }
                if (asset === "city") {
                    res.write(experimental2.cities(city));           // home made templating for native node
                }
                if (asset === "language") {
                    res.write(experimental3.cities(city));           // home made templating for native node
                }
                con.close();
                res.end();
            });
        });
    },

    continents(req, res, asset) {
        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;
        asset = asset.substring(1);

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true},function (error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname);                  // make dbname the current db
            /* Retrieve,
             * reads cities from the database
             */
            let obj;
            let objTwo;
            let objThree;
            db.collection("country").find().toArray(function (err, data) {
                if (err) {
                    throw err;
                }
                res.writeHead(httpStatus.OK, {                  // yes, write relevant header
                    "Content-Type": "text/html; charset=utf-8"
                });
                obj = data;
                db.collection("city").find().toArray(function (err, data) {
                    if (err) {
                        throw err;
                    }
                    res.writeHead(httpStatus.OK, {                  // yes, write relevant header
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    objTwo = data;
                    db.collection("language").find().toArray(function (err, data) {
                        if (err) {
                            throw err;
                        }
                        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
                            "Content-Type": "text/html; charset=utf-8"
                        });
                        objThree = data;
                        console.log(obj);
                        console.log(objTwo);
                        console.log(objThree);
                        res.write(countryList.cities(obj, objTwo, objThree, asset));
                        con.close();
                        res.end();
                    });
                });
            });
        });
    }
}
