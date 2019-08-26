/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "event_types" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.

*/

const ModelMaster = require("../ModelMaster.js");
const TableName = "event_types";

module.exports = class EventTypesModel {
  constructor() {}

  insert_event_types(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myModelMaster = new ModelMaster();

      var myModelMasterPromise = myModelMaster.insert(TableName, jsonObject_);

      myModelMasterPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_event_types() {
    return new Promise(function(resolve, reject) {
      const myModelMaster = new ModelMaster();

      var myModelMasterPromise = myModelMaster.selectAll(TableName);
      myModelMasterPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_event_types(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myModelMaster = new ModelMaster();

      var myModelMasterPromise = myModelMaster.selectSpecific(
        TableName,
        ColumnName,
        value_
      );
      myModelMasterPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_event_types_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myModelMaster = new ModelMaster();

      var myModelMasterPromise = myModelMaster.batch_update(
        TableName,
        jsonObject_
      );
      myModelMasterPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_event_types_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myModelMaster = new ModelMaster();

      var myModelMasterPromise = myModelMaster.individual_update(
        TableName,
        jsonObject_,
        ColumnName,
        value_
      );
      myModelMasterPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_event_types_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myModelMaster = new ModelMaster();

      var myModelMasterPromise = myModelMaster.delete(
        TableName,
        ColumnName,
        value_
      );
      myModelMasterPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }
};
