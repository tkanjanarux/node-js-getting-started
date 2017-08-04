var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view cache', false);
app.disable('view cache');

var data = [{
  id: 0,
  name: 'ลิโอเนล เมสซี'
}, {
  id: 1,
  name: 'คริสเตียโน โรนัลโด'
}, {
  id: 2,
  name: 'อาร์เยน ร็อบเบน'
}, {
  id: 3,
  name: 'ซลาตัน อิบราฮิโมวิช'
}, {
  id: 4,
  name: 'หลุยส์ ซัวเรส'
}, {
  id: 5,
  name: 'โรบิน ฟาน เพอร์ซี'
}, {
  id: 6,
  name: 'เมซุส โอซิล'
}, {
  id: 7,
  name: 'แดนนี่ เวลเบ็ค'
}, {
  id: 8,
  name: 'สตีเวน เจอร์ราร์ด'
}, {
  id: 9,
  name: 'มาริโอ บาโลเตลี'
}];


app.get('/', function(request, response) {
  var rand = Math.floor(Math.random() * 9);
  response.render('pages/index', data[rand]);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
