// Menginisialisasikan express framwork

var express = require('express');
var app = express();

// Menggunakan folder public sebagai folder statis
app.use(express.static('public'));

// mengirimkan response file index.html ke sisi klien saat server di akses hanya menggunakan hostname
app.get("/", function(request, response) {
    response.sendfile(__dirname + '/views/index.html');
});
 
// mengirimkan API response array dari variable dreams saat user mengakses url http://yourweb.com/dreams
app.get("/dreams", function (request, response) {
    response.send(dreams);
});
   
// menambahkan data baru ke dalam array dreams saat ada data yang dikirim dari klien menggunakan metode POST
app.post("/dreams", function (request, response) {
    dreams.push(request.query.dream);
    response.sendStatus(200);
});
   
// Simple in-memory store for now
var dreams = [
    "Find and count some sheep",
    "Climb a really tall mountain",
    "Wash the dishes"
];

// Memulai web server dan mendengarkan request dari sisi klien
// Listen for request

var listener = app.listen(process.env.port, function() {
    console.log('Your app is listening on port' + listener.address().port);
})
