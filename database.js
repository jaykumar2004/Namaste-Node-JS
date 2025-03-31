const { MongoClient, CURSOR_FLAGS } = require("mongodb");


const url = "mongodb+srv://jaykumar_2004:QU6AgFgJLkhnm2uI@namastenode.f1wdwtr.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');


    const data = {
        firstname :"Deepika",
        lastname: "Padukone",
        city: "Mumbai",
        phonenumber : "9876532424"
    };

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // //read
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // const countResult = await collection.countDocuments({});
    // console.log("Counts of documents in user collection ==>",countResult )



    //find all the documnet with the filter of firstname : Deepika

    const result = await collection.find({firstname:"Deepika"}).toArray();
    console.log("result ==>", result);
    

    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());