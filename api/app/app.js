/** @format */
// preparando o express para escutar
const express = require('express');
const app = express();
app.use(express.json());

// pegando os dados
const fs = require('fs');
const data = fs.readFileSync('../fakeData/books.json', 'utf8');
const books = JSON.parse(data);
const library = books.Books;
console.log(library);

// tentanto ter um array sozinho ?
// var library = JSON.parse(data)
// var library = JSON.stringify(library.Books)
// var libraryb = library.split(',')
// console.log(`library is ${library} and type of ${typeof library} ______________________________and we have lbb  ${libraryb}`);
// fazer funcao de encher linguica
// const library = new Array();
// function json2array(data) {
// 	var result = [];
// 	var keys = Object.keys(data);
// 	keys.forEach(function (key) {
// 		result.push(data[key]);
// 	});
// 	console.log(result)
// 	return result;
// }

// for (var i in data) library.push([ i, data[ i ] ]);

// metodos que eu sei
// mensagem na porta home
app.get('/', (req, res) => {
	res.send('Bem vindos a uma API para todos governar!');
});

// get by all books and frases
app.get('/api/books', (req, res) => {
	res.send(library);
});

// get quote by id
app.get('/api/books/:id', (req, res) => {
	const book = library[parseInt(req.params.id)];
	if (!book) res.status(404).send('You have no books here!');
	res.send(`${book.quote}`);
});

//portinhas

const PORT = process.env.PORT || 1988;
app.listen(PORT, () =>
	console.log(`Listen to your heart
When he's calling for you
Listen to your heart
There's nothing else you can do
I don't know where you're going
But I think is in the port ${PORT}`)
);

