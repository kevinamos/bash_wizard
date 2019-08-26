/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the users's controller class.
It receives calls from the "UsersRoutes" class and
passes the calls down to the "UsersModel" class

*/

const ModelMaster = require("../../models/ModelMaster.js");
const UsersModel = require("../../models/users_management/UsersModel.js");
const crypto = require("crypto");
var pbkdf2 = require("pbkdf2");

module.exports = class UsersController {
  constructor() {}

  /*my_hash_function(password, salt){
		
          var hash = crypto.createHmac('sha512', salt); 
          hash.update(password);
          var value = hash.digest('hex');
          return {
             salt:salt,
             encrypted_Password:value
          };
    }*/

  insert_users(jsonObject_) {
    return new Promise(function(resolve, reject) {
      //var userAlreadyRegisteredResult;
      var TableName = "users";
      var ColumnName = "UserEmail";
      var value_ = jsonObject_.UserEmail;
      const myModelMaster = new ModelMaster();
      var myModelMasterPromise = myModelMaster.selectSpecific(
        TableName,
        ColumnName,
        value_
      );

      myModelMasterPromise.then(
        function(userAlreadyRegisteredResult) {
          if (userAlreadyRegisteredResult.length === 0) {
            var salt = crypto.randomBytes(128).toString("base64");
            var hash = crypto.createHmac(
              "sha512",
              salt
            ); /** Hashing algorithm sha512 */

            hash.update(jsonObject_.Password);
            var encrypted_Password = hash.digest("hex");

            delete jsonObject_["Password"];
            jsonObject_["EncryptedPassword"] = encrypted_Password;
            jsonObject_["Salt"] = salt;

            const myUsersObject = new UsersModel();
            var myUsersObjectPromise = myUsersObject.insert_users(jsonObject_);

            myUsersObjectPromise.then(
              function(result) {
                resolve(result);
              },
              function(err) {
                reject(err);
              }
            );
          } else {
            var myResponse = "A user already exists with this email";
            resolve(myResponse);
          }
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  user_login(jsonObject_) {
    return new Promise(function(resolve, reject) {
      var TableName = "users";
      var ColumnName = "UserEmail";
      var value_ = jsonObject_.AttemptedUserEmail;

      const myModelMaster = new ModelMaster();
      var myModelMasterPromise = myModelMaster.selectSpecific(
        TableName,
        ColumnName,
        value_
      );

      myModelMasterPromise.then(
        function(userExistsResult) {
          if (userExistsResult.length === 0) {
            var myResponse = "There is no user account by this email";
            resolve(myResponse);
          } else {
            var loginResponse;
            var hash = crypto.createHmac(
              "sha512",
              userExistsResult[0].Salt
            ); /** Hashing algorithm sha512 */
            hash.update(jsonObject_.AttemptedPassword);
            var Attempted_encrypted_Password = hash.digest("hex");

            if (
              Attempted_encrypted_Password ===
              userExistsResult[0].EncryptedPassword
            ) {
              loginResponse = "Login was succesful";
            } else {
              loginResponse = "Login failed";
            }

            resolve(loginResponse);
          }
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_users() {
    return new Promise(function(resolve, reject) {
      const myUsersObject = new UsersModel();
      var myUsersObjectPromise = myUsersObject.get_all_users();

      myUsersObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_users(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myUsersObject = new UsersModel();
      var myUsersObjectPromise = myUsersObject.get_specific_users(
        ColumnName,
        value_
      );

      myUsersObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_users_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myUsersObject = new UsersModel();

      var myUsersObjectPromise = myUsersObject.batch_users_update(jsonObject_);

      myUsersObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_users_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myUsersObject = new UsersModel();

      var myUsersObjectPromise = myUsersObject.individual_users_update(
        ColumnName,
        value_
      );

      myUsersObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_users_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myUsersObject = new UsersModel();

      var myUsersObjectPromise = myUsersObject.delete_users_record(
        ColumnName,
        value_
      );

      myUsersObjectPromise.then(
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
