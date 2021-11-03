const express = require('express');

require('dotenv').config();
require('./models/db');

const User = require('./models/user');

const app = express();

app.post('/create-user', async (req,res) => {
    
    const user = await User({
        username: 'Janey Does',
         email: 'johaaa@email.com',
          password: '1222',
        });
await user.save();
res.json(user);
});

app.get('/', (req, res) => {

    res.send('Hello World');

});

app.listen(8000, () => {

    console.log('port is listening');

});