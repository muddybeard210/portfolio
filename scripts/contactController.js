(function(){
  contactFunc = function(){
    $('#aboutBtn').removeClass('clicked');
    $('#contactBtn').addClass('clicked');
    $('#projectBtn').removeClass('clicked');
    $('.project').hide();
    $('#catFilter').hide();
    $('#about').hide();
    $('#contact').fadeIn('slow');
  };

})(window);
