var pompeii = new Article ('POMPEII','Side scolling game.  Defent the city of Pompeii', 'http://andrewpeterwatson.github.io/Swift', 'imgs/pompeii.png');



function Article (title, description, url, img) {
  this.title= title;
  this.description = description;
  this.url = url;
  this.img = img;
  this.render = function() {
    var $newArticle = $('section.project.three.columns').clone();
    $newArticle.find('.projectTitle').html(this.title);
    $newArticle.find('.projectDesc').html(this.description);
    $newArticle.find('img').attr('src', this.img);
    return $newArticle;
  };
};
pompeii.render();

Article.prototype.toHtml = function() {
  var $newArticle = $('section.project.three.columns').clone();

  // $newArticle.attr('data-category', this.category);

  // $newArticle.find('time[pubdate]').attr('title', this.publishedOn);


  // $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  // $newArticle.append('<hr>');

  // $newArticle.removeClass('template');

  return $newArticle;
};

// rawData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// rawData.forEach(function(ele) {
//   articles.push(new Article(ele));
// });
//
// articles.forEach(function(a){
//   $('#articles').append(a.toHtml());
// });




















//
// function Article (opts) {
//
//   this.author = opts.author;
//   this.title = opts.title;
//   this.category = opts.category;
//   this.authorUrl = opts.authorUrl;
//   this.publishedOn = opts.publishedOn;
//   this.body = opts.body;
// }
//
//
