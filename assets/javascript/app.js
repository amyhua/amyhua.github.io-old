var app = angular.module("app", []);

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
    { name: 'Ruby on Rails & Sinatra', level: 70 },
    { name: 'HTML & CSS with SASS', level: 90 },
    { name: 'D3', level: 70 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Design', level: 40 },
    { name: 'Creativity', level: 80 },
    { name: 'User Experience', level: 50 }
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
                    'Node',
                    'Mocha',
                    'Chai',
                    'Karma'];

  $scope.experiences = [
    { role: 'Front-End Developer',
      org: 'Socrata, Inc',
      timeframe: ['Dec 2013', 'Present'],
      brief: 'Open Data SaaS provider serving data.gov, CMS, Chicago, New York, World Bank, UN, and many others.',
      tools: ['angular','d3','chai','mocha','karma'],
      desc: [
        'Implementing highly interactive responsive web apps in Angular, Rails & Sinatra powered by RESTful backend APIs',
        'Developing, implementing, testing & maintaining release of new user-facing data visualization features',
        'Writing automated backend & frontend tests to verify behavior across all major browsers',
        'Collaborating on overall technical architecture, modeling & design decisions to optimize speed & scale',
        "Working closely with PMs, BAs & designers to balance business objectives with technical quality"
      ] },
    { role: 'Freelance Full Stack Web Developer',
      org: 'Self-Employed',
      timeframe: ['Aug 2013', 'Present'],
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
      brief: 'Top 4 Mathematics Department & Top 2 Economics Department worldwide.',
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