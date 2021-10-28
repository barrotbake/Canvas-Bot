import { MongoClient } from 'mongodb';
//import { accessKey } from './demoConfig.json';

// MongoDB deployment's connection string
const uri = 'mongodb+srv://user1:12345@cluster0.ab9yi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri)

// generic asynchronous function to retrieve a record from the database as an object
// queryObject - object variable representing the query sent to the database
// callback - callback function which will be given the retrieved record as a parameter
// ex: 
// function getToken(record) { console.log(record.access_token); }
// var query = {username: 'student1', email: 'student@csu.fullerton.edu'};


// getRecord(query, getToken);

export async function updateChannelID(guildids, channelids) {
  
  try{
    await client.connect();

    // db name and collection
    const database = client.db("Users");
    const docs = database.collection("user_info");

    

    var query = {guild_id: `${guildids}`};
    var insert = {$set: {channel_id: `${channelids}`}};

    console.log(query);
    console.log(insert);
    // find the first record matching the given query
    
      docs.updateOne(query,insert);

  }
  catch(error){
    console.log(error);
  }
}
  
    
      
  


  
    
  


export async function getRecord(queryObject, callback) {
  try {
    await client.connect();

    // db name and collection
    const database = client.db("Users");
    const docs = database.collection("user_info");

    // find the first record matching the given query
    const findResult = await docs.findOne(queryObject);

    // return the record to the callback function
    console.log(queryObject + "query");
    callback(findResult);

    
    
  } catch(error) {
    console.log(error);
  }
}