/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_categories table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"EventCategoriesController" class

*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const EventCategoriesController = require("../../controllers/events_management/EventCategoriesController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_event_categories", urlencodedParser, function(
  request,
  response
) {
  var jsonObject_ = {
    EventCategoryDescription: request.body.EventCategoryDescription
  };

  var myEventCategoriesControllerObject = new EventCategoriesController();
  var myEventCategoriesControllerObjectPromise = myEventCategoriesControllerObject.insert_event_categories(
    jsonObject_
  );

  myEventCategoriesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_all_event_categories", urlencodedParser, function(
  request,
  response
) {
  var myEventCategoriesControllerObject = new EventCategoriesController();
  var myEventCategoriesControllerObjectPromise = myEventCategoriesControllerObject.get_all_event_categories();

  myEventCategoriesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/update_event_categories", urlencodedParser, function(
  request,
  response
) {
  var jsonObject_ = {
    EventCategoryDescription: request.body.EventCategoryDescription
  };

  var myEventCategoriesControllerObject = new EventCategoriesController();
  var myEventCategoriesControllerObjectPromise = myEventCategoriesControllerObject.batch_event_categories_update(
    jsonObject_
  );

  myEventCategoriesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_specific_event_categories", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myEventCategoriesControllerObject = new EventCategoriesController();

  var myEventCategoriesControllerObjectPromise = myEventCategoriesControllerObject.get_specific_event_categories(
    mKey,
    mValue
  );

  myEventCategoriesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_individual_event_categories", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var jsonObject_ = {
    EventCategoryDescription: request.body.EventCategoryDescription
  };

  var myEventCategoriesControllerObject = new EventCategoriesController();
  var myEventCategoriesControllerObjectPromise = myEventCategoriesControllerObject.individual_event_categories_update(
    column_name,
    value_,
    jsonObject_
  );

  myEventCategoriesControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/delete_individual_event_categories", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myEventCategoriesControllerObject = new EventCategoriesController();
  var myEventCategoriesControllerObjectPromise = myEventCategoriesControllerObject.delete_event_categories_record(
    column_name,
    value_
  );

  myEventCategoriesControllerObjectPromise.then(
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
