var app = angular.module("app", ['leaflet-directive']);

app.run(function($rootScope) {

  $rootScope.timers = [];

  $rootScope.addTimer = function(name, filesize){

    var duration = $rootScope.timers.length > 0 ? new Date().getTime() - $rootScope.timers.slice(-1)[0].timestamp : 0;

    $rootScope.timers.push({
      name: name,
      filesize: (filesize || ''),
      timestamp: new Date().getTime(),
      duration: duration
    });

    $rootScope.sumTimers = ($rootScope.sumTimers || 0) + duration;
  };

  $rootScope.addTimer('Run Angular app and set up first timer');

});

app.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

app.controller('ResumeCtrl', function($scope){
  console.log('ResumeCtrl')
  $scope.skills = [
    { name: 'Javascript', level: 90 },
    { name: 'AngularJS', level: 80 },
    { name: 'BackboneJS', level: 40 },
    { name: 'Ruby, Rails, Sinatra', level: 70 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'D3', level: 50 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Design', level: 20 },
    { name: 'Creativity', level: 80 },
    { name: 'User Experience', level: 30 }
  ].sort(function(a,b){
    return b.level - a.level;
  });

  $scope.tools = [  'Git',
                    'Bower',
                    'Grunt',
                    'Rake',
                    'Heroku',
                    'Sublime',
                    'Test:Unit',
                    'RSpec',
                    'SASS',
                    'LESS',
                    'Stylus',
                    'Node',
                    'Mocha',
                    'Chai',
                    'Karma'];

  $scope.experiences = [
    { role: 'Front-End Software Engineer',
      org: 'Databricks, Inc',
      link: 'www.databricks.com',
      timeframe: ['Sep 2014', 'Present'],
      brief: 'Andressen Horowitz Big Data Startup providing a cloud platform solution for big data analytics, processing, and storage.',
      tools: ['angular','d3','chai','mocha','karma'],
      desc: [
        'Served on the Execution Team to collaboratively make decisions on software features, testing, and maintenance of the product',
        'Initialized design discussions regarding better front-end tooling, asset management, and automated testing tools',
        'Collaborated with team members across the stack to fix critical pre-release UI bugs with data visualization notebooks',
        'Fixed day-to-day major to critical front-end bugs on the core product as the sole fully front-end developer on the team'
      ] },
    { role: 'Front-End Developer',
      org: 'Socrata, Inc',
      link: 'www.socrata.com',
      timeframe: ['Dec 2013', 'Aug 2014'],
      brief: 'Open Data SaaS provider serving data.gov, CMS, Chicago, New York, World Bank, UN, and many others.',
      tools: ['angular','d3','chai','mocha','karma'],
      desc: [
        'Implemented highly interactive responsive web apps in Angular, Rails & Sinatra powered by RESTful backend APIs',
        'Developed, tested & maintained release of new user-facing data visualization features',
        'Wrote automated backend & frontend tests to verify behavior across all major browsers',
        'Collaborated on overall technical architecture, modeling & design decisions to optimize speed & scale',
        "Worked closely with PMs, BAs & designers to balance business objectives with technical quality"
      ] },
    { role: 'Freelance Full Stack Web Developer',
      org: 'Self-Employed',
      timeframe: ['Aug 2013', 'Mar 2014'],
      desc: [
        'Collaborating closely with clients to deliver an end-to-end product with visual design and usability in mind',
        'Implementing rich, cross-browser compatible Javascript applications in Angular and Rails',
        'Managing remote communications and clear expectations with nontechnical stakeholders'

      ] },
    { role: 'Management Consultant (Procurement & Analytics)',
      org: 'ATKearney',
      brief: 'Top 10 Global Management Consulting firm',
      timeframe: ['Jul 2012', 'Apr 2013'],
      desc: [
        'Led research across 150 plants to transform procurement operations for a global CPG , saving $3-6MM.',
        'Developed large relational databases to deliver key data-driven insights on Fortune 500 analytics engagements',
        'Collaborated in teams of 4-6 to assess business processes and identify major savings opportunities for global manufacturing clients'
      ] }
  ]

  $scope.education = [
    { role: 'Mathematics with Specialization in Economics, B.S.',
      org: 'University of Chicago',
      timeframe: ['2008', '2012'],
      desc: [
        'Mathematics Research for Undergraduates (REU) Apprentice, focused on abstract algebra & topology',
        'Founded & led a non-profit organization (40-60 members) focused on event program management, marketing, and fundraising for an experimental arts community space.',
        'Uncommon Fund Committee member focused on distributing grants to promising student startups and initiatives',
        'Avid volunteer health teacher & assistant coach for competitive high school debate'
      ] },
      { role: 'Ruby on Rails Bootcamp',
      org: 'CodeFellows',
      timeframe: ['Jul 2013', 'Aug 2013'],
      desc: [
        'Participated in an immersive 8-week bootcamp in full stack web development with a focus on Rails'
      ] }
  ]

  $scope.test = "TEST";
});

app.filter('start', function() {
  return function(timeframe) {
    return timeframe[0];
  };
});

app.filter('end', function() {
  return function(timeframe) {
    return timeframe[1];
  };
});

app.filter('duration', function() {
  return function(timeframe) {
    var startDate = timeframe[0], endDate = timeframe[1];
    if (endDate === 'Present') {
      return moment(startDate, 'MMM YYYY').fromNow()
              .replace(' ago','')
              + '+';
    } else {
      return moment(startDate, 'MMM YYYY').from(moment(endDate, 'MMM YYYY'))
              .replace(' ago','');
    }

  };
});

app.directive('menuLink', function(){
  return {
    restrict: 'C',
    link: function($scope, element){
      element.on('click', function(){
        element.parent().parent().toggleClass('expand');
      })
    }
  }
});


app.directive('printLink', function(){
  return {
    restrict: 'C',
    link: function($scope, element){
      element.on('click', function(){
        window.print();
      })
    }
  }
});

app.directive('expand', function($timeout){
  return {
    restrict: 'E',
    replace: true,
    template: "<a class='expand'>learn more</a>",
    link: function($scope, element){
      element.on('click', function(){
        element.toggleClass('active');
        element.parent().parent().find('ul').toggleClass('active');

        $timeout(function(){
          if (element.hasClass('active')){
            element.text('collapse');
          } else {
            element.text('expand')
          }
        })
      });
    }
  }
})


app.directive('stickyLink', function(){
  return {
    restrict: 'C',
    link: function($scope, element){
      element.on('click', function(){
        $(element).toggleClass('active');
      })
    }
  }
})
.directive('toggleLink', function(){
  return {
    restrict: 'C',
    link: function($scope, element){
      element.on('click', function(){
        $('.toggle-link').removeClass('active');
        $(element).addClass('active');
      })
    }
  }
});

app.factory('Bounds', function($http, $rootScope){

  var minLng = 180, maxLng = -180, minLat = 90, maxLat = -90;

  var Bounds = function(geojson) {
    // bound variables

    if (!geojson) return [ [maxLat,maxLng],[minLat,minLng] ];

    var updateBounds = {};

    // helper functions for updating the bound variables by
    // calculating min/max coordinates of different Geometry Types

    function compareBoundValues(lats,lngs){
      if (_.min(lngs) < minLng) minLng = _.min(lngs);
      if (_.max(lngs) > maxLng) maxLng = _.max(lngs);
      if (_.min(lats) < minLat) minLat = _.min(lats);
      if (_.max(lats) > maxLat) maxLat = _.max(lats);
    }

    updateBounds.Polygon = function(coordinates) {

      _.each(coordinates, function(lngLats){
        // In Geojson, coordinates are denoted as [longitude, latitude] pairs
            var lngs = _.map(lngLats, function(lngLat){ return lngLat[0]; });
            var lats = _.map(lngLats, function(lngLat){ return lngLat[1]; });
            compareBoundValues(lats,lngs);
          });
    };

    updateBounds.MultiPolygon = function(coordinates) {
      _.each(coordinates, function(polygonCoordinates){
        updateBounds.Polygon(polygonCoordinates);
      });
    }

    updateBounds.MultiLineString = function(coordinates) {
      // same as Polygon
      updateBounds.Polygon(coordinates);
    }

    updateBounds.LineString = function(coordinates) {
      throw new Error("Unsupported geometry type: LineString. TODO");
    }

    updateBounds.Point = function(coordinates) {
      compareBoundValues([coordinates[1]],[coordinates[0]]);
    }

    if (geojson.type == 'FeatureCollection') {

      _.each(geojson.features, function(feature){

        var coordinates = feature.geometry.coordinates;

        updateBounds[feature.geometry.type](coordinates);

      });

      $rootScope.addTimer('Calculate ' + geojson.id + ' Bounds', geojson.filesize);

      return [ [maxLat,maxLng],[minLat,minLng] ];

    } else {

      throw new Error("Geojson is not a FeatureCollection")

    }
  };

  return Bounds;

});

app.controller('MapCtrl', function($scope, $location, $http, Bounds, leafletBoundsHelpers, $timeout, $rootScope) {

  $rootScope.addTimer('Initialize Timers and Map Controller');

  $scope.layers = {
    baselayers: {
      mapbox: {
        name: 'MapBox',
        url: 'http://a.tiles.mapbox.com/v3/socrata-apps.ibp0l899/{z}/{x}/{y}.png',
        type: 'xyz'
      }
    }
  };

  $scope.center = {};

  $scope.possibleLayers = ['Neighborhoods_2012b','CTA_Routes', 'CTA_BusStops', 'PoliceDistrict','PublicSchool'];
  $scope.possibleLayersNames = [
    {refName: 'Neighborhoods_2012b', humanName: 'Chicago Neighborhoods'},
    {refName: 'CTA_Routes', humanName: 'Chicago CTA Route Lines'},
    {refName: 'CTA_BusStops', humanName: 'Chicago CTA Bus Stops'},
    {refName: 'PoliceDistrict', humanName: 'Chicago Police Districts'},
    {refName: 'PublicSchool', humanName: 'Chicago Public School Locations'}];
  // TODO: clean

  var Geojson = {};

  $scope.data = [];

  $scope.desiredLayers = [];

  $scope.previousAction == 'init';

  $scope.loadingMethod = undefined;

  // Style Geojson features
  var style = function(feature) {
    return {
      fillColor: fillColor(feature),
      weight: weight(feature),
      opacity: 0.5,
      color: color(feature),
      dashArray: 0,
      fillOpacity: 0.4
    };
  };

  function fillColor(feature) {
    // random color
    return "#"+((1<<24)*Math.random()|0).toString(16);
  };

  function color(feature) {
    if (feature.geometry.type != 'MultiLineString') {
      return 'black';
    } else {
      // random color
      return "#"+((1<<24)*Math.random()|0).toString(16);
    }
  }

  function weight(feature) {
    if (feature.geometry.type != 'MultiLineString') {
      return 1;
    } else {
      return 3;
    }
  }

  $scope.updateLoadingMethod = function(method) {
    $scope.loadingMethod = method;
  }

  $scope.updateDesiredLayers = function(layer) {
    // toggle desirability of layer

    // log previous duration
    var previousDuration = $rootScope.sumTimers;

    // reset timers
    $rootScope.timers = [];
    $rootScope.sumTimers = 0;
    $rootScope.addTimer('Reset Timer');

    if (_.contains($scope.desiredLayers, layer)) {
      $scope.desiredLayers = _.filter($scope.desiredLayers, function(l){ return l != layer });
      // remove layer

        if ($scope.loadingMethod == 'Many') {

        // since duration only gets added to a data layer in retrospect (after the next action request is initiated),
        // and the duration of the current action (sumTimers) gets updated upon layer removal, then
        // if the user is removing a layer that is not the last layer,
        // LOG the duration of the last added layer, IF the last action was an add

        if ($scope.previousAction == 'add') {
          $scope.data[$scope.data.length - 1].duration = previousDuration;
        }

        // update Geojson object to inform the leaflet directive to remove geojson layer
        $scope.data = _.filter($scope.data, function(datum){ return datum.id != layer });
        $scope.geojson = {
          id: Geojson.ChicagoNeighborhoods.id,
          data: $scope.data,
          style: style
        }
      } else if ($scope.loadingMethod == 'One') {
        loadSingleGeojsonRequest($scope.desiredLayers);
      }

      // update previous action
      $scope.previousAction = 'remove';

    } else {
      // add layer
      $scope.desiredLayers.push(layer);

      if ($scope.loadingMethod == 'Many') {
        addGeojsonRequest(layer);

        if ($scope.previousAction == 'add' || $scope.previousAction == 'init') {
          // log duration of last added layer
          $scope.data[$scope.data.length - 1].duration = previousDuration;
        }
      } else if ($scope.loadingMethod == 'One') {
        loadSingleGeojsonRequest($scope.desiredLayers);
      }

      $scope.previousAction = 'add';
    }
  }

  function addGeojsonRequest(layerName) {
   $http.get('/datasets/geojson/'+layerName+'.json').then(function(result) {
      // GeoJson was reprojected and converted to Geojson with http://converter.mygeodata.eu/vector
      // reprojected to WGS 84 (SRID: 4326)

      $rootScope.addTimer('GET '+layerName);

      Geojson.ChicagoNeighborhoods = result.data;
      Geojson.ChicagoNeighborhoods.id = layerName;

      $scope.bounds = leafletBoundsHelpers.createBoundsFromArray(Bounds(Geojson.ChicagoNeighborhoods));
      $scope.data.push(Geojson.ChicagoNeighborhoods);

      $scope.geojson = {
        id: Geojson.ChicagoNeighborhoods.id,
        data: $scope.data,
        style: style
      }

      $rootScope.addTimer('Request (additional) Geojson layer' + layerName, result.data.filesize);
    });
  }

  function loadSingleGeojsonRequest(layers) {
    if (layers.length == 0) {
      $scope.data = [];

      $scope.geojson = {
        id: 'Merged Layers',
        data: $scope.data,
        style: style
      }

      return;
    }

    var masterGeojson = { type: "FeatureCollection", "filesize": 0, "features": [] };

    _.each(layers, function(layerName, i) {
      $http.get('/datasets/geojson/'+layerName+'.json').success(function(data) {
        $rootScope.addTimer('GET ' + layerName);
        masterGeojson.features = masterGeojson.features.concat(data.features);
        console.log('layer', i, masterGeojson);
      }).then(function(){
        if (i == 0) {
          // TODO: why is i == 0 the last one?
          $scope.data = masterGeojson;

          console.log('final', masterGeojson);

          $scope.bounds = leafletBoundsHelpers.createBoundsFromArray(Bounds(masterGeojson));

          $scope.geojson = {
            id: 'Merged Layers',
            data: $scope.data,
            style: style
          }
        }
      });
    });
  }
});
