(function(module) {

  Article.filterCat = function() {
    $('#aboutBtn').removeClass('clicked');
    $('#contactBtn').removeClass('clicked');
    $('#projectBtn').addClass('clicked');
    $('.project').fadeIn('slow');
    $('#catFilter').fadeIn('slow');
    $('#about').hide();
    $('#contact').hide();
    $('#accordion').accordion({collapsible: true, active: false});
    $('#totalProjects').text('Currently working on ' + repos.all.length + ' projects');


  };
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
      var $thisVal = $(this).val();
      if ($(this).val()) {
        $('section[data-category=' + $thisVal + ']').fadeIn();
      }else {
        $('.project').fadeIn();
      }
    });
  };

})(window);
