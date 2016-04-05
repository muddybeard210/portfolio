(function(module) {
  aboutFunc = function() {
    $('#aboutBtn').addClass('clicked');
    $('#contactBtn').removeClass('clicked');
    $('#projectBtn').removeClass('clicked');
    $('.project').hide();
    $('#catFilter').hide();
    $('#about').fadeIn('slow');
    $('#contact').hide();
  };
})(window);
