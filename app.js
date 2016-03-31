// var articles = [];
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
    $('#messingAround').hide();
  });



  $('#projectBtn').on('click', function(e) {
    e.preventDefault();
    $('#aboutBtn').removeClass('clicked');
    $('#contactBtn').removeClass('clicked');
    $('#projectBtn').addClass('clicked');
    $('#messingBtn').removeClass('clicked');
    $('.project').fadeIn('slow');
    $('#catFilter').fadeIn('slow');
    $('#about').hide();
    $('#contact').hide();
    $('#messingAround').hide();



  });
  $('#aboutBtn').on('click', function(e) {
    e.preventDefault();
    $('#aboutBtn').addClass('clicked');
    $('#contactBtn').removeClass('clicked');
    $('#projectBtn').removeClass('clicked');
    $('#messingBtn').removeClass('clicked');
    $('.project').hide();
    $('#catFilter').hide();
    $('#about').fadeIn('slow');
    $('#contact').hide();
    $('#messingAround').hide();


  });
  $('#messingBtn').on('click', function(e) {
    e.preventDefault();
    $('#messingBtn').addClass('clicked');
    $('aboutBtn').removeClass('clicked');
    $('#contactBtn').removeClass('clicked');
    $('#projectBtn').removeClass('clicked');
    $('.project').hide();
    $('#catFilter').hide();
    $('about').hide();
    $('#messingAround').fadeIn('slow');
    $('#contact').hide();

  });

  $('#contactBtn').on('click', function(e) {
    e.preventDefault();
    $('#aboutBtn').removeClass('clicked');
    $('#messingBtn').removeClass('clicked');
    $('#contactBtn').addClass('clicked');
    $('#projectBtn').removeClass('clicked');
    $('.project').hide();
    $('#catFilter').hide();
    $('#about').hide();
    $('#messingAround').hide();
    $('#contact').fadeIn('slow');
  });

  Article.loadAll = function(rawData) {

    rawData.forEach(function(ele) {
      Article.all.push(new Article(ele));
    });
  };
  Article.fetchAll = function() {
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
    // $('#totes').text('Total description words used: ' + Article.numWordsAll());
    Article.categorize();
    Article.populateFilter();
    Article.handleCategoryFilter();
  };
  $('.template').hide();

  var catFilter = [];

  Article.categorize = function() {
    return Article.all.map(function(article) {
      return article.category;
    }).reduce(function(a,b) {
      catFilter.push(b);
      return a + b;
    },-1);
  };

  Article.populateFilter = function() {
    catFilter.reduce(function(i,a,b) {
      $('#catFilter').append('<option>' + catFilter[i] + '</option');
      return i += 1;
    }, 0);
  };

  Article.handleCategoryFilter = function() {
    $('#catFilter').on('change', function() {
      $('section .project').hide();
      // $('#catFilter').show();
      var $thisVal = $(this).val();
      if ($(this).val()) {
        $('section[data-category=' + $thisVal + ']').fadeIn();
      };
    });
  };


  module.catFilter = catFilter;
  module.Article = Article;
})(window);
