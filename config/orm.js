//import connect
const connection = require('./connection');

//seclectOne
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
//insertOne
function insertOne(data, callback){
    connection.query('INSERT INTO burgers SET ?', data, 
    function (error, results, fields) {
    return callback(error , results);
});

}

//updateOne
function updateOne(data , id , callback){
    connection.query('UPDATE burgers SET  burger_name = ? , devoured = ? WHERE  id =?' ,[data.burger_name, data.devoured, id],
   function (error, results, fields) {
      return  callback(error, results);
    });

}

module.exports = {
  selectAll,
  insertOne,
  updateOne
};

