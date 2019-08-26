/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the ticket_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TicketTypesController" class

*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TicketTypesController = require("../../controllers/ticket_management/TicketTypesController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_ticket_types", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    EventPrivacyDescription: request.body.EventPrivacyDescription,
    EventPrivacyDescription: request.body.EventPrivacyDescription,
    EventPrivacyDescription: request.body.EventPrivacyDescription
  };

  var myTicketTypesControllerObject = new TicketTypesController();
  var myTicketTypesControllerObjectPromise = myTicketTypesControllerObject.insert_ticket_types(
    jsonObject_
  );

  myTicketTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_all_ticket_types", urlencodedParser, function(
  request,
  response
) {
  var myTicketTypesControllerObject = new TicketTypesController();
  var myTicketTypesControllerObjectPromise = myTicketTypesControllerObject.get_all_ticket_types();

  myTicketTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/update_ticket_types", urlencodedParser, function(
  request,
  response
) {
  var jsonObject_ = {
    EventPrivacyDescription: request.body.EventPrivacyDescription,
    EventPrivacyDescription: request.body.EventPrivacyDescription,
    EventPrivacyDescription: request.body.EventPrivacyDescription
  };

  var myTicketTypesControllerObject = new TicketTypesController();
  var myTicketTypesControllerObjectPromise = myTicketTypesControllerObject.batch_ticket_types_update(
    jsonObject_
  );

  myTicketTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_specific_ticket_types", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myTicketTypesControllerObject = new TicketTypesController();

  var myTicketTypesControllerObjectPromise = myTicketTypesControllerObject.get_specific_ticket_types(
    mKey,
    mValue
  );

  myTicketTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_individual_ticket_types", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var jsonObject_ = {
    EventPrivacyDescription: request.body.EventPrivacyDescription,
    EventPrivacyDescription: request.body.EventPrivacyDescription,
    EventPrivacyDescription: request.body.EventPrivacyDescription
  };

  var myTicketTypesControllerObject = new TicketTypesController();
  var myTicketTypesControllerObjectPromise = myTicketTypesControllerObject.individual_ticket_types_update(
    column_name,
    value_,
    jsonObject_
  );

  myTicketTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/delete_individual_ticket_types", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myTicketTypesControllerObject = new TicketTypesController();
  var myTicketTypesControllerObjectPromise = myTicketTypesControllerObject.delete_ticket_types_record(
    column_name,
    value_
  );

  myTicketTypesControllerObjectPromise.then(
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
