const express = require('express');
const router = express();
const FeedParser = require('feedparser');
const request = require('request');

/* GET home page. */
router.get('/hellow', function(req, res, next) {
  var data = [];
  var feed = request('https://oreno-erohon.com/feed')
  var feedparser = new FeedParser();

  feed.on('error', function (error) {
    // request エラー処理
  });

  feed.on('response', function (feed_res) {
    var stream = this;
    if (feed_res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    }
    else {
      stream.pipe(feedparser);
    }
  });

  feedparser.on('error', function (error) {
    // feedparser エラー処理
  });

  feedparser.on('readable', function () {
    var item;
    while (item = this.read()) {
      data.push({
        'title': item.title,
        'url': item.link,
        'description':item.description,
      });
    }
  });

  feedparser.on('end', function () {
    res.json({ title: 'LIG Feed', data: data});
    // res.render('index',{data:data});
  });

  // res.render('index', { title: 'Express' }); //今回は使わないのでコメントアウト
});

// router.get("/hellow", (req, res) => {
//   res.json({ title: "Hello World!" });
// });

module.exports = router;