const express = require('express');
// express app
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');


// -------use view engine-----------
app.set('view engine', 'ejs');


//-----using morgan--
app.use(morgan('dev')); 
app.use(express.static('styles'));

// ----connecting to mongoDB
const dbURI = 'mongodb+srv://pritee_perscholas:AGC6f1lik5pmwpaz@atlascluster.d9evfbt.mongodb.net/SBA308A';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB database');
})
.catch((error) => {
  console.log('Error connecting to MongoDB database:', error);
});

// ---------listen to server-----------
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'GitHub', snippet:'A blog for aspiring programmers that covers best practices and gives the opportunity to interact with other students and coders'},
        {title: 'Slack Engineering Blog', snippet: 'A blog that covers the full spectrum of engineering, from junior team members to senior-level staff' },
        {title: 'The Daily WTF', snippet: 'A user-submitted blog that highlights some of the worst coding practices that happen in a real working environment' },
        {title: 'Coding Horror', snippet: 'A blog by Jeff Atwood that provides advice and tips for software engineers in a lighthearted tone' }
    ]
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>about Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About'});
});


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
