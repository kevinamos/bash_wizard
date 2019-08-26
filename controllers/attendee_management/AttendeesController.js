/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the attendees's controller class.
It receives calls from the "AttendeesRoutes" class and
passes the calls down to the "AttendeesModel" class

*/

const AttendeesModel = require("../../models/attendee_management/AttendeesModel.js");

module.exports = class AttendeesController {
  constructor() {}

  insert_attendees(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myAttendeesObject = new AttendeesModel();
      var myAttendeesObjectPromise = myAttendeesObject.insert_attendees(
        jsonObject_
      );

      myAttendeesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_attendees() {
    return new Promise(function(resolve, reject) {
      const myAttendeesObject = new AttendeesModel();
      var myAttendeesObjectPromise = myAttendeesObject.get_all_attendees();

      myAttendeesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_attendees(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myAttendeesObject = new AttendeesModel();
      var myAttendeesObjectPromise = myAttendeesObject.get_specific_attendees(
        ColumnName,
        value_
      );

      myAttendeesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_attendees_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myAttendeesObject = new AttendeesModel();

      var myAttendeesObjectPromise = myAttendeesObject.batch_attendees_update(
        jsonObject_
      );

      myAttendeesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_attendees_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myAttendeesObject = new AttendeesModel();

      var myAttendeesObjectPromise = myAttendeesObject.individual_attendees_update(
        ColumnName,
        value_
      );

      myAttendeesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_attendees_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myAttendeesObject = new AttendeesModel();

      var myAttendeesObjectPromise = myAttendeesObject.delete_attendees_record(
        ColumnName,
        value_
      );

      myAttendeesObjectPromise.then(
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
