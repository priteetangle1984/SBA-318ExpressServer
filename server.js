const express = require('express');
// express app
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');


// -------register view engine-----------
app.set('view engine', 'ejs');


//-----using morgan/middleware and static files--
app.use(morgan('dev')); 
app.use(express.static('styles'));
app.use(express.urlencoded({ extended: true }));

// ----connecting to mongoDB
const dbURI = 'mongodb+srv://pritee_perscholas:AGC6f1lik5pmwpaz@atlascluster.d9evfbt.mongodb.net/SBA308A';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((result) => {
    app.listen(3000);
})
.catch((error) => {
  console.log('Error connecting to MongoDB database:', error);
});

// ---------listen to server-----------
// app.listen(3000);



//ROUTES
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p>about Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About'});
});

//BLOG ROUTES
app.use('/blogs', blogRoutes);


// -------404 Not Found---------------
app.use((req, res) => {
    // res.send('<p>Home Page</p>');
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: 'OOPS'})
});
