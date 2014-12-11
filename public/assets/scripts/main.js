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
var id;
var queryData;
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

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/shows/all/0/5/subscription/web",
        function( data ) {
          for (i=0; i < data['results'].length; i++){
            var id = data['results'][i].id;
            var html="<li><h2>"+data['results'][i].title+"</h2><p>Released: "+data['results'][i].first_aired+"</p><img src="+data['results'][i].artwork_304x171+"></li>";
            $('#home_tv').append(html);
          }
        }
      );

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/movie/all/0/5/subscription/web",
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

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/shows/all/0/27/subscription/web",
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
      // var id=[];
      // var loopNumber;
      // var poster =[];

      // {Base API URL} /movie/ {id}
      console.log('Navigating to movies Page');

      // $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/movie/all/0/27/purchase/web",

      //   function( data ) {

      //     // function loadRottenData(id, poster){

      //     //   $.ajax({
      //     //     url: "http://api.rottentomatoes.com/api/public/v1.0/movies/"+id+".json?apikey=btgk4cag7u4vnv52szrrbms5",
      //     //     dataType: "jsonp",
      //     //     success: function(RottenData){
      //     //       console.log(RottenData);
      //     //       console.log(poster)

      //     //       if ( RottenData.synopsis != ''){
      //     //         var html =  "<li><h2>"+RottenData.title+"</h2><p>Released: "+RottenData.year+"</p><p>Studio: "+RottenData.studio+"</p><p>Rating: "+RottenData.mpaa_rating+"</p><img src="+poster+"><h2>Synopsis</h2><p>"+RottenData.synopsis+"</p></li>"
      //     //       } else {
      //     //         var html =  "<li><h2>"+RottenData.title+"</h2><p>Released: "+RottenData.year+"</p><p>Studio: "+RottenData.studio+"</p><p>Rating: "+RottenData.mpaa_rating+"</p><img src="+poster+"></li>"
      //     //       }

      //     //       $('#movies').append(html);
      //     //     }
      //     //   });

      //     // }
      //     for (i=0; i < 27; i++){
      //       poster.push(data['results'][i].poster_240x342);

      //     }
      //     for (i=0; i < 27; i++){
      //       loopNumber = i;
      //       // queryData = data;
      //       // var html="<li><h2>"+data['results'][i].title+"</h2><p>Released: "+data['results'][i].release_year+"</p><img src="+data['results'][i].poster_240x342+"></li>";
      //       // $('#movies').append(html);
      //       var posterId = "posterId-"+i;

      //       $.ajax({
      //         url: "http://api.rottentomatoes.com/api/public/v1.0/movies/"+data['results'][i].rottentomatoes+".json?apikey=btgk4cag7u4vnv52szrrbms5",
      //         dataType: "jsonp",
      //         success: function(RottenData){
      //           // console.log(RottenData);
      //           // console.log(poster);
      //           var html1 =  "<li><h2>"+RottenData.title+"</h2><p>Released: "+RottenData.year+"</p><p>Studio: "+RottenData.studio+"</p><p>Rating: "+RottenData.mpaa_rating+"</p><img id='"+posterId+"'></li>";
      //           var html2 =  "<li><h2>"+RottenData.title+"</h2><p>Released: "+RottenData.year+"</p><p>Studio: "+RottenData.studio+"</p><p>Rating: "+RottenData.mpaa_rating+"</p><img id='"+posterId+"'><h2>Synopsis</h2><p>"+RottenData.synopsis+"</p></li>";

      //           if ( RottenData.synopsis != ''){
      //             var html = html1;
      //           } else {
      //             var html = html2;
      //           }

      //           $('#movies').append(html);
      //         }
      //       });

      //       // loadRottenData(data['results'][i].rottentomatoes, data['results'][i].poster_240x342);

      //     }

          //  working - poster sucks
          $.ajax({
              url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?apikey=btgk4cag7u4vnv52szrrbms5&limit=27&country=ca",
              dataType: "jsonp",
              success: function(RottenData){
                console.log(RottenData.movies);
                for (i=0; i < 27; i++){
                  var data= RottenData.movies[i];
                  // console.log(RottenData);

                  if ( data.synopsis != ''){data
                    var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div><h2>Synopsis</h2><p>"+data.synopsis+"</p></li>"
                  } else {
                    var html =  "<li><h2>"+data.title+"</h2><img src="+data.posters.original+"><div><p>Released: "+data.year+"</p><p>Rating: "+data.mpaa_rating+"</p></div></li>"
                  }

                  $('#movies').append(html);
                };


              }
            });


      //   }
      // );

      App.views['movies'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      var time;

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/updates/get_current_time",
        function( data ) {
          console.log(data['results'])
          // time = data.results
          $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/updates/movies/changes/"+data['results'],
            function( newData ) {
              console.log(newData)
            }
          )
        }
      );

      $.getJSON( "http://api-public.guidebox.com/v1.43/json/rKIqHMV5Eer12k3q5nPp0de9xX6wNcaW/sources/subscription",
        function( data ) {
          console.log(data)
        }
      );

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