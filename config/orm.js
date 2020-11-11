//import connect
const connection = require('./connection');

function selectAll(callback){
    connection.query({
        sql: 'SELECT * FROM `burgers`',
      }, function (error, results, fields) { 
          return callback(error , results);
          //console.log(error, results, fields);
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      });
}

module.exports = {
    selectAll
};
