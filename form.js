/*
 * File Name is  : form.js
 * inserts or updates a mongo collection
 */
'use strict';

const mongo = require('mongodb');
const dbname = "world";
const constr = `mongodb://localhost:27017`;

let data = process.argv[2];
let obj = JSON.parse(data);
let que = {name: obj.name};

mongo.connect(
    constr, { useNewUrlParser: true, useUnifiedTopology: true},
                                                function (error, con) {
    if (error) {
        throw error;
    }
    console.log(`Connected to server`);
    const db = con.db(dbname);                  // make dbname the current db
    /* Update,
     * updates/inserts city in the database
     */

    db.collection("city").updateOne(
        que, {"$set": obj}, {upsert: true}, function (err, collection) {
        if (err) {
            throw err;
        }
        console.log("City inserted/updated");
        con.close();
    });
});
