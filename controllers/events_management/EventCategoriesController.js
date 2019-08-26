/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_categories's controller class.
It receives calls from the "EventCategoriesRoutes" class and
passes the calls down to the "EventCategoriesModel" class

*/

const EventCategoriesModel = require("../../models/events_management/EventCategoriesModel.js");

module.exports = class EventCategoriesController {
  constructor() {}

  insert_event_categories(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventCategoriesObject = new EventCategoriesModel();
      var myEventCategoriesObjectPromise = myEventCategoriesObject.insert_event_categories(
        jsonObject_
      );

      myEventCategoriesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_event_categories() {
    return new Promise(function(resolve, reject) {
      const myEventCategoriesObject = new EventCategoriesModel();
      var myEventCategoriesObjectPromise = myEventCategoriesObject.get_all_event_categories();

      myEventCategoriesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_event_categories(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myEventCategoriesObject = new EventCategoriesModel();
      var myEventCategoriesObjectPromise = myEventCategoriesObject.get_specific_event_categories(
        ColumnName,
        value_
      );

      myEventCategoriesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_event_categories_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventCategoriesObject = new EventCategoriesModel();

      var myEventCategoriesObjectPromise = myEventCategoriesObject.batch_event_categories_update(
        jsonObject_
      );

      myEventCategoriesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_event_categories_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventCategoriesObject = new EventCategoriesModel();

      var myEventCategoriesObjectPromise = myEventCategoriesObject.individual_event_categories_update(
        ColumnName,
        value_
      );

      myEventCategoriesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_event_categories_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myEventCategoriesObject = new EventCategoriesModel();

      var myEventCategoriesObjectPromise = myEventCategoriesObject.delete_event_categories_record(
        ColumnName,
        value_
      );

      myEventCategoriesObjectPromise.then(
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
