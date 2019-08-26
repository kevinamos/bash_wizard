/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the events_ table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"EventsController" class

*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const EventsController = require("../../controllers/events_management/EventsController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_events_", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    id: request.body.id,
    EventCategoryId: request.body.EventCategoryId,
    EventName: request.body.EventName,
    EventVenue: request.body.EventVenue,
    EventTypeId: request.body.EventTypeId,
    StartDate: request.body.StartDate,
    EndDate: request.body.EndDate,
    EventPhotoUrl: request.body.EventPhotoUrl,
    EventDescription: request.body.EventDescription,
    CustomMessage: request.body.CustomMessage,
    EventPrivacyId: request.body.EventPrivacyId,
    TicketLimit: request.body.TicketLimit
  };

  var myEventsControllerObject = new EventsController();
  var myEventsControllerObjectPromise = myEventsControllerObject.insert_events_(
    jsonObject_
  );

  myEventsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_all_events_", urlencodedParser, function(request, response) {
  var myEventsControllerObject = new EventsController();
  var myEventsControllerObjectPromise = myEventsControllerObject.get_all_events_();

  myEventsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/update_events_", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    id: request.body.id,
    EventCategoryId: request.body.EventCategoryId,
    EventName: request.body.EventName,
    EventVenue: request.body.EventVenue,
    EventTypeId: request.body.EventTypeId,
    StartDate: request.body.StartDate,
    EndDate: request.body.EndDate,
    EventPhotoUrl: request.body.EventPhotoUrl,
    EventDescription: request.body.EventDescription,
    CustomMessage: request.body.CustomMessage,
    EventPrivacyId: request.body.EventPrivacyId,
    TicketLimit: request.body.TicketLimit
  };

  var myEventsControllerObject = new EventsController();
  var myEventsControllerObjectPromise = myEventsControllerObject.batch_events__update(
    jsonObject_
  );

  myEventsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_specific_events_", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myEventsControllerObject = new EventsController();

  var myEventsControllerObjectPromise = myEventsControllerObject.get_specific_events_(
    mKey,
    mValue
  );

  myEventsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_individual_events_", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var jsonObject_ = {
    id: request.body.id,
    EventCategoryId: request.body.EventCategoryId,
    EventName: request.body.EventName,
    EventVenue: request.body.EventVenue,
    EventTypeId: request.body.EventTypeId,
    StartDate: request.body.StartDate,
    EndDate: request.body.EndDate,
    EventPhotoUrl: request.body.EventPhotoUrl,
    EventDescription: request.body.EventDescription,
    CustomMessage: request.body.CustomMessage,
    EventPrivacyId: request.body.EventPrivacyId,
    TicketLimit: request.body.TicketLimit
  };

  var myEventsControllerObject = new EventsController();
  var myEventsControllerObjectPromise = myEventsControllerObject.individual_events__update(
    column_name,
    value_,
    jsonObject_
  );

  myEventsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/delete_individual_events_", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myEventsControllerObject = new EventsController();
  var myEventsControllerObjectPromise = myEventsControllerObject.delete_events__record(
    column_name,
    value_
  );

  myEventsControllerObjectPromise.then(
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
