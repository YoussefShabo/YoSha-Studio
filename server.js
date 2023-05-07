// =======================================
//              DEPENDENCIES
// =======================================
const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const projects = require('./models/projects.js');
const ProjectsCollection = require('./projectSchema.js');

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// =======================================
//              ROUTES
// =======================================

                // SEED ROUTE
// app.get('/projects/seed', (req, res) => {
//     ProjectsCollection.create(projects).then(() =>{
//     res.send(projects)
//   })
// })

                // INDEX ROUTE
app.get('/projects', (req, res) => {
    ProjectsCollection.find({}).then((allprojects) => {
        res.render('index.ejs', {
            projects: allprojects
        });
    })
});

                // NEW ROUTE
app.get('/projects/new', (req, res) => {
    res.render('new.ejs');
});

                // SHOW ROUTE
app.get('/projects/:_id', (req, res) => {
    ProjectsCollection.findById(req.params._id).then((foundProjects) => {
        res.render('show.ejs', {
        projects: foundProjects
        })
    })
});

                //POST ROUTE
app.post('/projects', (req, res) => {
    ProjectsCollection.create(req.body).then((createProjects) => {
        res.redirect('/projects')
    })
});

                //EDIT ROUTE
app.get('/projects/:id/edit', (req,res) =>{
    ProjectsCollection.findById(req.params.id).then((foundProjects) => {
        res.render('edit.ejs', {
        projects: foundProjects
        })
    })
})

                //DELETE ROUTE
app.delete('/projects/:id', (req,res) => {
    ProjectsCollection.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/projects')
    })
})

                //PUT ROUTE
app.put('/projects/:id', (req,res) =>{
    ProjectsCollection.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
        res.redirect('/projects')
    })
})

                //STATIC PAGES
app.get('/projects/contact', (req,res) => {
    res.render('/contact.html');
})

// =======================================
//              LISTENER
// =======================================
mongoose.connect('mongodb://localhost:27017/budgets').then(() => {
    console.log('conneciton with mongo established')
 })
 
 app.listen(port, () => {
   console.log(`Listening on port: ${port}`)
 });
 