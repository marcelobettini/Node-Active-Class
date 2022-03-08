express = require("express");
hbs = require('hbs')
const app = express();
const PORT = 3000;
app.set('view engine', 'hbs')
app.use(express.static('public'))

const isActive = (req, res, next) => {
    app.locals.active = {
        home: false,
        cat: false,
        dog: false,
        parrot: false
    }
    next()
}

app.get('/', isActive, (req, res) => {
    app.locals.active.home = true
    res.render('index')
})
app.get('/dog', isActive, (req, res) => {
    app.locals.active.dog = true
    res.render('dog')
})
app.get('/cat', isActive, (req, res) => {
    app.locals.active.cat = true
    res.render('cat')
})
app.get('/parrot', isActive, (req, res) => {
    app.locals.active.parrot = true
    res.render('parrot')
})
//lanzamos nuestra app en localhost
app.listen(PORT, (err) => {
    err
      ? console.log("Ocurrió un misterioso error que nos dejó game over")
      : console.log(`Servidor corriendo en http://localhost:${PORT}/`);
  });