const  {MongoClient} = require ('mongodb');
const config = require('../Config.json');


const client = new MongoClient(process.env.uri);



 async function updateChannelID(guildids, channelids) {
  
  try{
    await client.connect();

    // db name and collection
    const database = client.db("Users");
    const docs = database.collection("user_info");

    

    var query = {guild_id: `${guildids}`};
    var insert = {$set: {channel_id: `${channelids}`}};

    // find the first record matching the given query
    
      docs.updateOne(query,insert);

  }
  catch(error){
    console.log(error);
  }
}
  

  async function getRecord(queryObject, callback) {
  try {
    await client.connect();

    // db name and collection
    const database = client.db("Users");
    const docs = database.collection("user_info");

    // find the first record matching the given query
    const findResult = await docs.findOne(queryObject);

    // return the record to the callback function
    
    callback(findResult);

    
    
  } catch(error) {
    console.log(error);
  }
}
module.exports = {getRecord,updateChannelID};