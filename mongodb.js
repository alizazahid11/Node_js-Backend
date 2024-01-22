const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/e-comm';

async function dbconnect() {
    const client = new MongoClient(url);

    try {
        await client.connect(); // Connect to MongoDB
        console.log('Connected to MongoDB');

        const db = client.db('e-comm');
       return db.collection('products');
        
        // const response = await collection.find({name:"xyz"}).toArray();//to find any single result
        // console.log(response); // Display the result

    } finally {
        // await client.close(); // Close the connection after use
        // console.log('Connection closed');
    }
}
module.exports=dbconnect;