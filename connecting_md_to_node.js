// CONNECTING NODE WITH MONGODB

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/e-comm';

async function getdata() {
    const client = new MongoClient(url);

    try {
        await client.connect(); // Connect to MongoDB
        console.log('Connected to MongoDB');

        const db = client.db('e-comm');
        const collection = db.collection('products');
        
        const response = await collection.find({}).toArray();
        console.log(response); // Display the result

    } finally {
        await client.close(); // Close the connection after use
        console.log('Connection closed');
    }
}

getdata();


