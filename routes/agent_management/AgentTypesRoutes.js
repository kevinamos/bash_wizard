/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the agent_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"AgentTypesController" class

*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const AgentTypesController = require("../../controllers/agent_management/AgentTypesController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_agent_types", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    AgentTypeDescription: request.body.AgentTypeDescription
  };

  var myAgentTypesControllerObject = new AgentTypesController();
  var myAgentTypesControllerObjectPromise = myAgentTypesControllerObject.insert_agent_types(
    jsonObject_
  );

  myAgentTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_all_agent_types", urlencodedParser, function(
  request,
  response
) {
  var myAgentTypesControllerObject = new AgentTypesController();
  var myAgentTypesControllerObjectPromise = myAgentTypesControllerObject.get_all_agent_types();

  myAgentTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/update_agent_types", urlencodedParser, function(
  request,
  response
) {
  var jsonObject_ = {
    AgentTypeDescription: request.body.AgentTypeDescription
  };

  var myAgentTypesControllerObject = new AgentTypesController();
  var myAgentTypesControllerObjectPromise = myAgentTypesControllerObject.batch_agent_types_update(
    jsonObject_
  );

  myAgentTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_specific_agent_types", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myAgentTypesControllerObject = new AgentTypesController();

  var myAgentTypesControllerObjectPromise = myAgentTypesControllerObject.get_specific_event_owner_bank_details(
    mKey,
    mValue
  );

  myAgentTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_agent_types", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var jsonObject_ = {
    AgentTypeDescription: request.body.AgentTypeDescription
  };

  var myAgentTypesControllerObject = new AgentTypesController();
  var myAgentTypesControllerObjectPromise = myAgentTypesControllerObject.individual_agent_types_update(
    column_name,
    value_,
    jsonObject_
  );

  myAgentTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/delete_individual_agent_types", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myAgentTypesControllerObject = new AgentTypesController();
  var myAgentTypesControllerObjectPromise = myAgentTypesControllerObject.delete_event_owner_bank_details_record(
    column_name,
    value_
  );

  myAgentTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

module.exports = router;
