(function(module){
  var repos = {};

  repos.all = [];

  repos.requestRepos = function() {
    $.ajax({
      url: 'https://api.github.com/users/muddybeard210/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + GITHUB_TOKEN 
      },
      success: function(data, message, xhr) {
        console.log(data);
        console.log(message);
        repos.all = data;
      },
      error: function(data, status) {
        console.log(data);
        console.log(status);
      }
    });
  };
  module.repos = repos;
})(window);
