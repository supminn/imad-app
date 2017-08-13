var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var profile = {
    title: 'Supriya\'s Profile',
    heading:'profile details',
    content:`
         <p>
            NAME: Supriya Minnasandram<br/>
            Education<br/>
            Work Experience<br/>
            Hobbies & Interests<br/>
            DOB
        </p>
        
        <h4> About Myself</h4>
            <p>
                I am trying to explore new things and trying to improve in coding with the help of IMAD :)
            </p>`
};

function createtemp (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmltemp = `
    
    <html>
        <head>
            <title>
          ${title} 
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
          
        </head>
        <body>
            <div class="container">
                <div>
                <a href="/">HOME</a>
                </div>
                <hr/>
                <hr/>
                <div>
                    <h2>
                        ${heading}
                    </h2>
                </div>
                <div>
                  ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmltemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/profile',function(req,res) {
    res.send(createtemp(profile));
});

app.get('/articles',function(req,res) {
    res.send('Articles posted by Supriya will be served here');
});

app.get('/videos',function(req,res) {
    res.send('Supriya\'s performance videos will be served here');
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
