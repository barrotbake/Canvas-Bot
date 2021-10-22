const { MongoClient } = require('mongodb');
//just replace with the MongoDB deployment's connection string
const uri = "mongodb+srv://user1:12345@cluster0.ab9yi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

let newUser = async (email, userName, password) => {
  try {
    await client.connect();
    //db name and collection replace here
    const database = client.db("Users");
    const docs = database.collection("user_info")
    const userEmail = await docs.findOne({ email: email })
    const userPotentialName = await docs.findOne({ username: userName })

    if (userEmail) {
      console.log("This email already exist")
    }
    else if (userPotentialName) {
      console.log("This username is already in use")
    } else {
      let doc = {
        email: email,
        password: password,
        username: userName,
      }
      await docs.insertOne(doc)
    }
    // since this method returns the matched document, not a cursor, print it directl
  } finally {
    await client.close();
  }
}

let userLogin = async (userName, password) => {
  try {
    await client.connect();
    //db name and collection replace here
    const database = client.db("Users");
    const docs = database.collection("user_info")

    const user = await docs.findOne({ username: userName })
    if (!user) {
      console.log("Account doesn't exist!")
    } else {
      if (password !== user.password) {
        console.log("Incorrect password!")
      } else {
        console.log("Log in Success!")
      }
    }
    // since this method returns the matched document, not a cursor, print it directl
  } finally {
    await client.close();
  }
}

let setInfo = async (userName, courseId, zoom_link, access_token) => {
  try {
    await client.connect();
    //db name and collection replace here
    const database = client.db("Users");
    const docs = database.collection("user_info")

    const updateDoc = {
      $set: {
        _courseid: courseId,
        zoom_link: zoom_link,
        access_token: access_token
      },
    };

    await docs.updateOne({ username: userName }, updateDoc)
    // since this method returns the matched document, not a cursor, print it directl
  } finally {
    await client.close();
  }
}

newUser("alanallsta@gmail.com", "alanclown", "Alan")
