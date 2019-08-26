/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_owner_bank_details's controller class.
It receives calls from the "EventOwnerBankDetailsRoutes" class and
passes the calls down to the "EventOwnerBankDetailsModel" class

*/

const EventOwnerBankDetailsModel = require("../../models/transactions_and_billing/EventOwnerBankDetailsModel.js");

module.exports = class EventOwnerBankDetailsController {
  constructor() {}

  insert_event_owner_bank_details(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventOwnerBankDetailsObject = new EventOwnerBankDetailsModel();
      var myEventOwnerBankDetailsObjectPromise = myEventOwnerBankDetailsObject.insert_event_owner_bank_details(
        jsonObject_
      );

      myEventOwnerBankDetailsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_event_owner_bank_details() {
    return new Promise(function(resolve, reject) {
      const myEventOwnerBankDetailsObject = new EventOwnerBankDetailsModel();
      var myEventOwnerBankDetailsObjectPromise = myEventOwnerBankDetailsObject.get_all_event_owner_bank_details();

      myEventOwnerBankDetailsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_event_owner_bank_details(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myEventOwnerBankDetailsObject = new EventOwnerBankDetailsModel();
      var myEventOwnerBankDetailsObjectPromise = myEventOwnerBankDetailsObject.get_specific_event_owner_bank_details(
        ColumnName,
        value_
      );

      myEventOwnerBankDetailsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_event_owner_bank_details_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventOwnerBankDetailsObject = new EventOwnerBankDetailsModel();

      var myEventOwnerBankDetailsObjectPromise = myEventOwnerBankDetailsObject.batch_event_owner_bank_details_update(
        jsonObject_
      );

      myEventOwnerBankDetailsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_event_owner_bank_details_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myEventOwnerBankDetailsObject = new EventOwnerBankDetailsModel();

      var myEventOwnerBankDetailsObjectPromise = myEventOwnerBankDetailsObject.individual_event_owner_bank_details_update(
        ColumnName,
        value_
      );

      myEventOwnerBankDetailsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_event_owner_bank_details_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myEventOwnerBankDetailsObject = new EventOwnerBankDetailsModel();

      var myEventOwnerBankDetailsObjectPromise = myEventOwnerBankDetailsObject.delete_event_owner_bank_details_record(
        ColumnName,
        value_
      );

      myEventOwnerBankDetailsObjectPromise.then(
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
