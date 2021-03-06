module.exports = function(app) {
  var fixtures = [
    {
      id: 0,
      title: 'First School',
      iliosAdministratorEmail: 'test@example.com',
      isDeleted: false,
      programs: [0,1],
      instructorGroups: [0,1,2],
      courses: [0,1]
    },
    {
      id: 1,
      title: 'Second School',
      iliosAdministratorEmail: 'test@example.com',
      isDeleted: false,
      stewardedProgramYears: [0,1],
      courses: [2,3,4]
    },
    {
      id: 2,
      title: 'Third Test School',
      iliosAdministratorEmail: 'test@example.com',
      isDeleted: false,
      stewardedProgramYears: [1]
    }
  ];

  var createRouter = require('../helpers/createrouter.js');
  var router = createRouter('school', fixtures);
  app.use('/api/schools', router);
};
