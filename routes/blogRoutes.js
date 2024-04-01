const express = require('express');
const blogControllers = require('../controllers/blogControllers')
const router = express.Router();

//----BLOG ROUTES-----
router.get('/', blogControllers.blog_index);


// router.get('/' ,(req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//     .then((result) => {
//         res.render('index', { title: 'All Blogs', blogs: result })
//     }) .catch((err) => {
//         console.log(err);
//     });
// }) 

// router.get('/create', (req, res) => {
//     // res.send('<p>about Page</p>');
//     // res.sendFile('./views/about.html', { root: __dirname });
//     res.render('create',  { title: 'Create New Blogs'});
// });

//=======ROUTERS=========
router.get('/create', blogControllers.blog_create_get);
router.get('/:id', blogControllers.blog_details);
router.post('/', blogControllers.blog_create_post )
router.delete('/:id', blogControllers.blog_delete)


// router.get('/:id', (req, res) => {
// const id = req.params.id;
// // console.log(id);
// Blog.findById(id)
// .then((result) => {
//     res.render('details', { blog: result, title: 'Blog Details'});
// }) .catch((err) => {
//     console.log(err);
// });
// })

module.exports = router;