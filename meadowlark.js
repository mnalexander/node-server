// Обычно находится в начале файла
const handlers = require('./lib/handlers')

app.get('/', handlers.home)

app.get('/about', handlers.about)

// Пользовательская страница 404
app.use(handlers.notFound)

// Пользовательская страница 500
app.use(handlers.serverError)



const fortune = require('./lib/fortune')

const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

//app.get('/',
//    (req,
//     res) => res.render('home'))


//app.get('/about',
//  (req,
//res) => {
//    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
//    res.render('about', { fortune: randomFortune })
//})

//app.use((req, res) => {
//res.status(404)
//  res.render('404')
//})

//app.use((err, req, res, next) => {
//    console.error(err.message)
//    res.status(500)
//    res.render('500')
//})


app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` +
    `нажмите Ctrl+C для завершения.` ))

//const fortunes = [
//    "Победи свои страхи, или они победят тебя.",
//    "Рекам нужны истоки.",
//    "Не бойся неведомого.",
//    "Тебя ждет приятный сюрприз.",
//    "Будь проще везде, где только можно.",
//]