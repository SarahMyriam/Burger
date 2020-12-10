const orm = require('../config/orm');

function getAll(callback){

    orm.selectAll(
        function (error, results){
          callback(results)
        }
    );
}

function insert(data,callback){

    orm.insertOne(
      data, 
      function(error, results){
        callback(results)
      }

  );
}

function update(data, id ,callback){
     
    orm.updateOne(
      data,
      id,
      function(error, results){
        callback(results)
      }

    );
}

module.exports={
  getAll,
  insert,
  update
};

