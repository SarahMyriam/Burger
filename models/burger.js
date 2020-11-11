const orm = require('./config/orm');

function getAll(){

    orm.selectAll(
        function (error, results){
          console.log(results);
        }
    );
}