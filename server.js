const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse incoming string or array data. Need to be set up for POST
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data. Need to be set up for POST
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// express.static. we provide a file path to a location in our app (public) and instruct
// the server to make these files static resources. So all of our front end code can now be 
// accessed without having a specific server endpoint created for it. 
app.use(express.static('public')); 
const { animals } = require('./data/animals.json');


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});