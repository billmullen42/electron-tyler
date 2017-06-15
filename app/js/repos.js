setTimeout(function () {
  $('.ui.search')
    .search({
      apiSettings: {
        url: 'https://api.github.com/search/repositories?q={query}',
        onResponse: function (githubResponse) {
          $('#repos').empty();
          githubResponse.items.forEach(function(e, i, a) {
            const box = `
            <div class="ui raised very padded text container segment">
              <h2 class="ui header"><a href="#">${e.full_name}</a></h2>
              <a href="${e.html_url}/archive/${e.default_branch}.zip"><button class="download ui button">Download</button></a>
            </div>`;
            $('#repos').append(box);
          });
          return {};
        }
      },
      fields: {
        results : 'items',
        title   : 'name',
        url     : 'html_url'
      },
      minCharacters : 3,
      showNoResults: false
    });
  }, 500);
