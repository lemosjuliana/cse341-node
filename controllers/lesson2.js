// // Lesson 2

// // Instance of MongoClient to connect to a cluster, access the database 
// // in that cluster, and close the connection to that cluster.

// const {MongoClient} = require('mongodb');

// // Asynchronous function named main() where we will connect to our MongoDB 
// // cluster, call functions that query our database, and disconnect from our 
// // cluster.

// async function main() {
// 	/**
//  * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//  * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//  */
//     const uri = "mongodb+srv://lemos-cse-341:Lemos-cse-341@cluster0.l7dwwid.mongodb.net/?retryWrites=true&w=majority";

//     // Instance of MongoClient.

//     const client = new MongoClient(uri);
    
//     try{

//         // Use the await keyword when we call client.connect() to indicate 
//         // that we should block further execution until that operation has 
//         // completed.

//         await client.connect();
        
//         // Function that prints the names of the databases in this cluster.

//         await listDatabases(client); 
//     } catch (e) {
//         console.error(e);
//     } finally {

//         //Close the connection to our cluster

//         await client.close();
//     }
    
// }

// // Call the main() function:

// main().catch(console.error);

// // This function will retrieve a list of databases in our cluster and print 
// // the results in the console.

// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
 