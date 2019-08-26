/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the transactions's controller class.
It receives calls from the "TransactionsRoutes" class and
passes the calls down to the "TransactionsModel" class

*/

const TransactionsModel = require("../../models/transactions_and_billing/TransactionsModel.js");

module.exports = class TransactionsController {
  constructor() {}

  insert_transactions(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myTransactionsObject = new TransactionsModel();
      var myTransactionsObjectPromise = myTransactionsObject.insert_transactions(
        jsonObject_
      );

      myTransactionsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_transactions() {
    return new Promise(function(resolve, reject) {
      const myTransactionsObject = new TransactionsModel();
      var myTransactionsObjectPromise = myTransactionsObject.get_all_transactions();

      myTransactionsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_transactions(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myTransactionsObject = new TransactionsModel();
      var myTransactionsObjectPromise = myTransactionsObject.get_specific_transactions(
        ColumnName,
        value_
      );

      myTransactionsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_transactions_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myTransactionsObject = new TransactionsModel();

      var myTransactionsObjectPromise = myTransactionsObject.batch_transactions_update(
        jsonObject_
      );

      myTransactionsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_transactions_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myTransactionsObject = new TransactionsModel();

      var myTransactionsObjectPromise = myTransactionsObject.individual_transactions_update(
        ColumnName,
        value_
      );

      myTransactionsObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_transactions_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myTransactionsObject = new TransactionsModel();

      var myTransactionsObjectPromise = myTransactionsObject.delete_transactions_record(
        ColumnName,
        value_
      );

      myTransactionsObjectPromise.then(
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
