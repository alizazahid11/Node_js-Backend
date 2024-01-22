//INSERT DATA FROM MONGODB TO NODEJS
const dbconnect = require('./mongodb');

const insert = async () => {
    const db = await dbconnect();

    const dataToInsert = [
        { name: "hh", brand: "oppo", price: 120, category: "xyz" },
        { name: "hph", brand: "oo", price: 1200, category: "z" },
    ];

    const res = await db.insertMany(dataToInsert);

    if (res.acknowledged) {
        console.log(res);
    }
};

insert();
