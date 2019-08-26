/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_types's controller class.
It receives calls from the "EventTypesRoutes" class and
passes the calls down to the "EventTypesModel" class

*/

const EventTypesModel = require("../../models/events_management/EventTypesModel.js");

module.exports = class EventTypesController {
  constructor() {}

  insert_event_types(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventTypesObject = new EventTypesModel();
      var myEventTypesObjectPromise = myEventTypesObject.insert_event_types(
        jsonObject_
      );

      myEventTypesObjectPromise.then(
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
      const myEventTypesObject = new EventTypesModel();
      var myEventTypesObjectPromise = myEventTypesObject.get_all_event_types();

      myEventTypesObjectPromise.then(
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
      const myEventTypesObject = new EventTypesModel();
      var myEventTypesObjectPromise = myEventTypesObject.get_specific_event_types(
        ColumnName,
        value_
      );

      myEventTypesObjectPromise.then(
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
      const myEventTypesObject = new EventTypesModel();

      var myEventTypesObjectPromise = myEventTypesObject.batch_event_types_update(
        jsonObject_
      );

      myEventTypesObjectPromise.then(
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
      const myEventTypesObject = new EventTypesModel();

      var myEventTypesObjectPromise = myEventTypesObject.individual_event_types_update(
        ColumnName,
        value_
      );

      myEventTypesObjectPromise.then(
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
      const myEventTypesObject = new EventTypesModel();

      var myEventTypesObjectPromise = myEventTypesObject.delete_event_types_record(
        ColumnName,
        value_
      );

      myEventTypesObjectPromise.then(
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
