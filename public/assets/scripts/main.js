// Keys
// - Rotten Tomato: btgk4cag7u4vnv52szrrbms5


// -----------------------------
// Wait for DOM Load
// -----------------------------


jQuery(function($) {
  var id;

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'theater' : 'theater',
      'movies' : 'movies',
      'coming': 'coming',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');

      $.ajax({
          url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?apikey=btgk4cag7u4vnv52szrrbms5&limit=6&country=ca",
          dataType: "jsonp",
          success: function(RottenData){
            console.log(RottenData.movies);
            for (i=0; i < 27; i++){
              var data= RottenData.movies[i];

              if ( data.synopsis != ''){data
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr><h2>Synopsis</h2><p class='synopsis'>"+data.synopsis+"</p></li>"
              } else {
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr></li>"
              }

              $('#theater').append(html);
            };
          }
        });

      $.ajax({
          url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/new_releases.json?apikey=btgk4cag7u4vnv52szrrbms5&page_limit=6&country=ca",
          dataType: "jsonp",
          success: function(RottenData){
            console.log(RottenData.movies);
            for (i=0; i < 27; i++){
              var data= RottenData.movies[i];

              if ( data.synopsis != ''){data
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr><h2>Synopsis</h2><p class='synopsis'>"+data.synopsis+"</p></li>"
              } else {
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr></li>"
              }

              $('#dvd').append(html);
            };
          }
        });

      App.views['home'].render();
    },

    // theater Route
    theater: function() {

      $.ajax({
          url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=btgk4cag7u4vnv52szrrbms5&page_limit=50&country=ca",
          dataType: "jsonp",
          success: function(RottenData){
            console.log(RottenData.movies);
            for (i=0; i < 27; i++){
              var data= RottenData.movies[i];

              if ( data.synopsis != ''){data
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr><h2>Synopsis</h2><p class='synopsis'>"+data.synopsis+"</p></li>"
              } else {
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr></li>"
              }

              $('#theater').append(html);
            };
          }
        });

      App.views['theater'].render();
    },

    // Movies Route
    movies: function() {

      $.ajax({
          url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?apikey=btgk4cag7u4vnv52szrrbms5&limit=27&country=ca",
          dataType: "jsonp",
          success: function(RottenData){
            console.log(RottenData.movies);
            for (i=0; i < 27; i++){
              var data= RottenData.movies[i];

              if ( data.synopsis != ''){data
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr><h2>Synopsis</h2><p class='synopsis'>"+data.synopsis+"</p></li>"
              } else {
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr></li>"
              }

              $('#movies').append(html);
            };
          }
        });

      App.views['movies'].render();
    },

    // Coming soon Route
    coming: function() {

      $.ajax({
          url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=btgk4cag7u4vnv52szrrbms5&page_limit=9&country=ca",
          dataType: "jsonp",
          success: function(RottenData){
            console.log(RottenData.movies);
            for (i=0; i < 27; i++){
              var data= RottenData.movies[i];

              if ( data.synopsis != ''){data
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr><h2>Synopsis</h2><p class='synopsis'>"+data.synopsis+"</p></li>"
              } else {
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr></li>"
              }

              $('#theater').append(html);
            };
          }
        });

      $.ajax({
          url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/upcoming.json?apikey=btgk4cag7u4vnv52szrrbms5&page_limit=9&country=ca",
          dataType: "jsonp",
          success: function(RottenData){
            console.log(RottenData.movies);
            for (i=0; i < 27; i++){
              var data= RottenData.movies[i];

              if ( data.synopsis != ''){data
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr><h2>Synopsis</h2><p class='synopsis'>"+data.synopsis+"</p></li>"
              } else {
                var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div class='info'><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h3>Scores</h3><hr><p class='score'>Audience: <span>"+data.ratings.audience_score+"%</span></p><p class='score'>Critics: <span>"+data.ratings.critics_score+"%</span></p><hr></li>"
              }

              $('#dvd').append(html);
            };
          }
        });

      App.views['coming'].render();
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
      theater: new theaterView(),
      movies: new MoviesView(),
      coming: new comingView(),
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
        page_header: "<h1>Welcome to James's movie finder</h1>",
        theater_header: "<h1>New to theater</h1>",
        dvd_header: "<h1>New to dvd</h1>"
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
  // Theater View
  // -----------------------------

  var theaterView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#theater',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        page_header: '<h1>Movies in theater</h1>'
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
  // Movies on dvd View
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
        page_header: '<h1>Popular on DVD</h1>'
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
  // Coming soon View
  // -----------------------------

  var comingView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#coming',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        theaters_header: '<h1>Coming Soon to Theaters</h1>',
        dvd_header: '<h1>Coming Soon to dvd</h1>'
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
        contact_header: '<h1>Contact</h1>',
        about_header: '<h1>About Us</h1>'
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