(function(module) {
  function Article (project) {

    this.title = project.title;
    this.url = project.url;
    this.img = project.img;
    this.description = project.description;
    this.category = project.category;
  };

  Article.all = [];

  Article.prototype.toHtml = function() {
    var theTemplateScript = $('#articles-template').text();
    var theTemplate = Handlebars.compile(theTemplateScript);
    return theTemplate(this);
    $newArticle.removeClass('template');
  };

  $(document).ready(function() {
    $('.project').hide();
    $('#catFilter').hide();
    $('#about').hide();
    $('#contact').hide();
    Article.categorize();
    Article.populateFilter();
    Article.handleCategoryFilter();
  });

  Article.loadAll = function(rawData) {

    rawData.forEach(function(ele) {
      Article.all.push(new Article(ele));
    });
  };

  Article.fetchAll = function() {
    console.log('fetchAll is working');
    if (localStorage.rawData) {
      Article.loadAll(JSON.parse(localStorage.rawData));
      Article.all.forEach(function(a){
        $('section.project').parent().append(a.toHtml());
      });
    } else {
      $.getJSON('projects.json', function(data) {
        Article.loadAll(data);

        localStorage.setItem('rawData', JSON.stringify(data));
        Article.all.forEach(function(a){
          $('section.project').parent().append(a.toHtml());
        });
      });
    }
  };

  $('.template').hide();



  module.catFilter = catFilter;
  module.Article = Article;
})(window);
