var articles = [];

function Article (project) {

  this.title = project.title;
  this.url = project.url;
  this.img = project.img;
  this.description = project.description;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('section.project.template').clone();

  $newArticle.find('.projectTitle').text(this.title);
  $newArticle.find('.projectPiece a').attr('href', this.url);
  $newArticle.find('.projectPiece img').attr('src', this.img);
  $newArticle.find('.projectDesc').text(this.description);


  // $newArticle.append('<hr>');

  $newArticle.removeClass('template');



  return $newArticle;
};

$('#projectBtn').on('click', function(e) {
  e.preventDefault();
  $('.project').removeAttr('hidden');
  $('#about').attr('hidden', true);

});
$('#aboutBtn').on('click', function(e) {
  e.preventDefault();
  $('.project').attr('hidden', true);
  $('#about').removeAttr('hidden');

});


rawData.forEach(function(ele) {
  articles.push(new Article(ele));
  console.log('running');
});

articles.forEach(function(a){
  $('section.project').parent().append(a.toHtml());
  console.log('running2');
});

$('.template').hide();
