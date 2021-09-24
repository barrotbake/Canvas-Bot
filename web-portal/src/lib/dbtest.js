
const { MongoClient } = require('mongodb');

//just replace with the MongoDB deployment's connection string
const uri = "mmongodb+srv://nguyenjacob:IkoYhhSqMjCEUu96@cluster0.mttwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect();

    //db name and collection replace here
    const database = client.db("test");
    const docs = database.collection("users");

    const findResult = await docs.findOne({
      username: "password",
    });
    console.log(findResult.password);
    // since this method returns the matched document, not a cursor, print it directl
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
