/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_privacy's controller class.
It receives calls from the "EventPrivacyRoutes" class and
passes the calls down to the "EventPrivacyModel" class

*/

const EventPrivacyModel = require("../../models/events_management/EventPrivacyModel.js");

module.exports = class EventPrivacyController {
  constructor() {}

  insert_event_privacy(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventPrivacyObject = new EventPrivacyModel();
      var myEventPrivacyObjectPromise = myEventPrivacyObject.insert_event_privacy(
        jsonObject_
      );

      myEventPrivacyObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_event_privacy() {
    return new Promise(function(resolve, reject) {
      const myEventPrivacyObject = new EventPrivacyModel();
      var myEventPrivacyObjectPromise = myEventPrivacyObject.get_all_event_privacy();

      myEventPrivacyObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_event_privacy(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myEventPrivacyObject = new EventPrivacyModel();
      var myEventPrivacyObjectPromise = myEventPrivacyObject.get_specific_event_privacy(
        ColumnName,
        value_
      );

      myEventPrivacyObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_event_privacy_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventPrivacyObject = new EventPrivacyModel();

      var myEventPrivacyObjectPromise = myEventPrivacyObject.batch_event_privacy_update(
        jsonObject_
      );

      myEventPrivacyObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_event_privacy_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventPrivacyObject = new EventPrivacyModel();

      var myEventPrivacyObjectPromise = myEventPrivacyObject.individual_event_privacy_update(
        ColumnName,
        value_
      );

      myEventPrivacyObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_event_privacy_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myEventPrivacyObject = new EventPrivacyModel();

      var myEventPrivacyObjectPromise = myEventPrivacyObject.delete_event_privacy_record(
        ColumnName,
        value_
      );

      myEventPrivacyObjectPromise.then(
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
