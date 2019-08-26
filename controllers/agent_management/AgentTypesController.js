/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the agent_types's controller class.
It receives calls from the "AgentTypesRoutes" class and
passes the calls down to the "AgentTypesModel" class

*/

const AgentTypesModel = require("../../models/agent_management/AgentTypesModel.js");

module.exports = class AgentTypesController {
  constructor() {}

  insert_agent_types(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myAgentTypesObject = new AgentTypesModel();
      var myAgentTypesObjectPromise = myAgentTypesObject.insert_agent_types(
        jsonObject_
      );

      myAgentTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_all_agent_types() {
    return new Promise(function(resolve, reject) {
      const myAgentTypesObject = new AgentTypesModel();
      var myAgentTypesObjectPromise = myAgentTypesObject.get_all_agent_types();

      myAgentTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  get_specific_agent_types(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myAgentTypesObject = new AgentTypesModel();
      var myAgentTypesObjectPromise = myAgentTypesObject.get_specific_agent_types(
        ColumnName,
        value_
      );

      myAgentTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  batch_agent_types_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myAgentTypesObject = new AgentTypesModel();

      var myAgentTypesObjectPromise = myAgentTypesObject.batch_agent_types_update(
        jsonObject_
      );

      myAgentTypesObject.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  individual_agent_types_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      const myAgentTypesObject = new AgentTypesModel();

      var myAgentTypesObjectPromise = myAgentTypesObject.individual_agent_types_update(
        ColumnName,
        value_
      );

      myAgentTypesObjectPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  delete_agent_types_record(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      const myAgentTypesObject = new AgentTypesModel();

      var myAgentTypesObjectPromise = myAgentTypesObject.delete_agent_types_record(
        ColumnName,
        value_
      );

      myAgentTypesObjectPromise.then(
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
