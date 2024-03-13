const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index.html', (req, res) => {
  res.render('index');
});

app.get('/generic.html', (req, res) => {
  res.render('generic');
});

app.get('/elements.html', (req, res) => {
  res.render('elements');
});

app.post('/', (req, res) => {
  console.log('Post req received: ' + req.body);
  console.dir(req.body);

  if (req.body.bookTitle == '' && req.body.authorName == '') {
    res.send( {status: 'Error: Request was null.'} );
  } else {
    let url = '';
    if (req.body.bookTitle && req.body.authorName) {
      url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:"' + req.body.bookTitle + '"+inauthor:"' + req.body.authorName + '"';
    } else if (req.body.bookTitle) {
      url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:"' + req.body.bookTitle + '"';
    } else if (req.body.authorName) {
      url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:"' + req.body.authorName + '"';
    }

    if (req.body.currentPage > 1) {
      url += '&startIndex=' + ((req.body.currentPage-1) * 10);
    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url
    };
    
    axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      if (response.data.totalItems==0) {
        res.send({status: 'Error: totalItems is 0'});
      } else {
        res.send(response.data);
      }
    }).catch((error) => {
      console.log(error);
      res.send({status: 'ERROR: ' + error});
    });
  }
});

app.use(express.static('public'));
// app.use(express.json());
app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));
app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});
