// Keys
// - best buy: um8mu6rt8v6jfamdsc25wpbz
// - Rotten Tomato: btgk4cag7u4vnv52szrrbms5
// - guidebox: rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW
// -

// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {
  var seasons_data = [];//tv = JSON.parse('http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/shows/all/1/5/subscription/web');
var id=[];
  //movies = JSON.parse('http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/movie/all/1/5/subscription/web');

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'tv' : 'tv',
      'movies' : 'movies',
      'about': 'about',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/shows/all/1/5/subscription/web",
        function( data ) {
          for (i=0; i < data['results'].length; i++){
            var id = data['results'][i].id;
            var html="<li><h2>"+data['results'][i].title+"</h2><p>Released: "+data['results'][i].first_aired+"</p><img src="+data['results'][i].artwork_304x171+"></li>";
            $('#home_tv').append(html);
          }
        }
      );

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/movie/all/1/5/subscription/web",
        function( data ) {
          for (i=0; i < data['results'].length; i++){
            var id = data['results'][i].id;
            var html="<li><h2>"+data['results'][i].title+"</h2><p>Released: "+data['results'][i].release_year+"</p><img src="+data['results'][i].poster_240x342+"></li>";
            $('#home_movies').append(html);
          }
        }
      );

      App.views['home'].render();
    },

    // Tv Route
    tv: function() {
      // http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/show/ {id} /seasons

      console.log('Navigating to tv Page');

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/shows/all/1/27/subscription/web",
        function( data ) {
          for (i=0; i < 27; i++){
            id.push(data['results'][i].id)
            var html="<li><h2>"+data['results'][i].title+"</h2><p>Released: "+data['results'][i].first_aired+"</p><img src="+data['results'][i].artwork_304x171+"></li>";
            $('#tv').append(html);
          }
        }
      )

      App.views['tv'].render();
    },

    // Movies Route
    movies: function() {
      var id=[];
      // {Base API URL} /movie/ {id}
      console.log('Navigating to movies Page');

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/movie/all/1/27/subscription/web",
        function( data ) {

          for (i=0; i < data['results'].length; i++){

            id.push(data['results'][i].id);
            var html="<li><h2>"+data['results'][i].title+"</h2><p>Released: "+data['results'][i].release_year+"</p><img src="+data['results'][i].poster_240x342+"></li>";
            $('#movies').append(html);
          }
        }
      );

      App.views['movies'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');

      App.views['about'].render();
    },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      tv: new TvView(),
      movies: new MoviesView(),
      about: new AboutView(),
      contact: new ContactView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        page_header: "<h1>Welcome to James's movie and tv finder</h1>",
        about:"<p>James's movie and tv finder helps you find popular movies and tv shows for sale and links where it is viewable online.</p>",
        tv_header: "<h1>Popular Tv Shows</h1>",
        movie_header: "<h1>Popular Movies Shows</h1>"
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Tv View
  // -----------------------------

  var TvView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#tv',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        page_header: '<h1>Tv Shows</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Movies View
  // -----------------------------

  var MoviesView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#movies',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        page_header: '<h1>Movies</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        page_header: '<h1>About</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        page_header: '<h1>Contact</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    var url = $(this).attr('href') || '#';
    var isLocal = url.match(/^#/)

    if(isLocal) {
      e.preventDefault();
      App.router.navigate($(this).attr('href'), { trigger: true });
    }

  });


});