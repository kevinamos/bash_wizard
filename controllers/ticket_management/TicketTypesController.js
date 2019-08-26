/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the ticket_types's controller class.
It receives calls from the "TicketTypesRoutes" class and
passes the calls down to the "TicketTypesModel" class

*/

const TicketTypesModel = require("../../models/ticket_management/TicketTypesModel.js");

module.exports = class TicketTypesController {
  constructor() {}

  insert_ticket_types(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myTicketTypesObject = new TicketTypesModel();
      var myTicketTypesObjectPromise = myTicketTypesObject.insert_ticket_types(
        jsonObject_
      );

      myTicketTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_ticket_types() {
    return new Promise(function(resolve, reject) {
      const myTicketTypesObject = new TicketTypesModel();
      var myTicketTypesObjectPromise = myTicketTypesObject.get_all_ticket_types();

      myTicketTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_ticket_types(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myTicketTypesObject = new TicketTypesModel();
      var myTicketTypesObjectPromise = myTicketTypesObject.get_specific_ticket_types(
        ColumnName,
        value_
      );

      myTicketTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_ticket_types_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myTicketTypesObject = new TicketTypesModel();

      var myTicketTypesObjectPromise = myTicketTypesObject.batch_ticket_types_update(
        jsonObject_
      );

      myTicketTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_ticket_types_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myTicketTypesObject = new TicketTypesModel();

      var myTicketTypesObjectPromise = myTicketTypesObject.individual_ticket_types_update(
        ColumnName,
        value_
      );

      myTicketTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_ticket_types_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myTicketTypesObject = new TicketTypesModel();

      var myTicketTypesObjectPromise = myTicketTypesObject.delete_ticket_types_record(
        ColumnName,
        value_
      );

      myTicketTypesObjectPromise.then(
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
