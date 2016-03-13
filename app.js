var articles = [];

function Article (project) {

  this.title = project.title;
  this.url = project.url;
  this.img = project.img;
  this.description = project.description;
};

Article.prototype.toHtml = function() {
  var theTemplateScript = $('#articles-template').text();
  var theTemplate = Handlebars.compile(theTemplateScript);
  return theTemplate(this);
  $newArticle.removeClass('template');
};

$('#projectBtn').on('click', function(e) {
  e.preventDefault();
  $('.project').removeAttr('hidden');
  $('#about').attr('hidden', true);
  $('#contact').attr('hidden', true);


});
$('#aboutBtn').on('click', function(e) {
  e.preventDefault();
  $('.project').attr('hidden', true);
  $('#contact').attr('hidden', true);
  $('#about').removeAttr('hidden');

});
$('#contactBtn').on('click', function(e) {
  e.preventDefault();
  $('.project').attr('hidden', true);
  $('#about').attr('hidden', true);
  $('#contact').removeAttr('hidden');

});


rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('section.project').parent().append(a.toHtml());
});

$('.template').hide();
