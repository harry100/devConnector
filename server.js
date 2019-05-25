const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//Body parse middleware
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
	.connect(db, {useNewUrlParser: true})
	.then(() => console.log('MongoDb Connected'))
	.catch(error => console.log(`something's wrong`, error));

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport.js')(passport);

//use Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
