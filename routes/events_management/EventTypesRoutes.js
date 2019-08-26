/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_types table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"EventTypesController" class

*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const EventTypesController = require("../../controllers/events_management/EventTypesController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_event_types", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    EventTypeDescription: request.body.EventTypeDescription
  };

  var myEventTypesControllerObject = new EventTypesController();
  var myEventTypesControllerObjectPromise = myEventTypesControllerObject.insert_event_types(
    jsonObject_
  );

  myEventTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_all_event_types", urlencodedParser, function(
  request,
  response
) {
  var myEventTypesControllerObject = new EventTypesController();
  var myEventTypesControllerObjectPromise = myEventTypesControllerObject.get_all_event_types();

  myEventTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/update_event_types", urlencodedParser, function(
  request,
  response
) {
  var jsonObject_ = {
    EventTypeDescription: request.body.EventTypeDescription
  };

  var myEventTypesControllerObject = new EventTypesController();
  var myEventTypesControllerObjectPromise = myEventTypesControllerObject.batch_event_types_update(
    jsonObject_
  );

  myEventTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_specific_event_types", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myEventTypesControllerObject = new EventTypesController();

  var myEventTypesControllerObjectPromise = myEventTypesControllerObject.get_specific_event_types(
    mKey,
    mValue
  );

  myEventTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_individual_event_types", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var jsonObject_ = {
    EventTypeDescription: request.body.EventTypeDescription
  };

  var myEventTypesControllerObject = new EventTypesController();
  var myEventTypesControllerObjectPromise = myEventTypesControllerObject.individual_event_types_update(
    column_name,
    value_,
    jsonObject_
  );

  myEventTypesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/delete_individual_event_types", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myEventTypesControllerObject = new EventTypesController();
  var myEventTypesControllerObjectPromise = myEventTypesControllerObject.delete_event_types_record(
    column_name,
    value_
  );

  myEventTypesControllerObjectPromise.then(
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
