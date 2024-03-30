const express = require('express');
// express app
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');


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

//----BLOG ROUTES-----
app.get('/blogs' ,(req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result })
    }) .catch((err) => {
        console.log(err);
    });
}) 

//----POST REQUEST-----
app.post('/blogs', (req, res) => {
const blog = new Blog(req.body);

blog.save()
.then((result) => {
    res.redirect('/blogs');
}) .catch((err) => {
    console.log(err);
});
})

app.get('/blogs/:id', (req, res) => {
const id = req.params.id;
// console.log(id);
Blog.findById(id)
.then((result) => {
    res.render('details', { blog: result, title: 'Blog Details'});
}) .catch((err) => {
    console.log(err);
});
})

app.get('/blogs/create', (req, res) => {
    // res.send('<p>about Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('create',  { title: 'Create New Blogs'});
});

// -------404 Not Found---------------
app.use((req, res) => {
    // res.send('<p>Home Page</p>');
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: 'OOPS'})
});
