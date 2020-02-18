/*
 * File Name is  : form.js to use with views/testpost.html
 * inserts or updates a mongo collection
 */
'use strict';

const mongo = require('mongodb');
const dbname = "world";
const constr = `mongodb://localhost:27017`;

mongo.connect(
    constr, { useNewUrlParser: true, useUnifiedTopology: true},
                                                function (error, con) {
    if (error) {
        throw error;
    }
    console.log(`Connected to server`);
    const db = con.db(dbname);                  // make dbname the current db
    /* Create,
     * inserts cities into the database
     */
     let newCountry = {"name": name.POST.value, "continent": continent.POST.value, "area": area.POST.value, "population": population.POST.value, "governmentForm": governmenform.POST.value }

     db.collection("country").insertOne(obj, function (err, collection) {
         if (err) {
             throw err;
         }
         console.log("Country inserted");
         con.close();
     });
 });
