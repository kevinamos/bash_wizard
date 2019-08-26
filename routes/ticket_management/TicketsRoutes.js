/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the tickets table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TicketsController" class

*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TicketsController = require("../../controllers/ticket_management/TicketsController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_tickets", urlencodedParser, function(request, response) {
  var date = new Date();
  date.setHours(date.getHours() + 0);

  var jsonObject_ = {
    TicketTypeId: request.body.TicketTypeId,
    AttendeeId: request.body.AttendeeId,
    AgentId: request.body.AgentId,
    TicketNumber: request.body.TicketNumber,
    BookedDate: date
  };

  var myTicketsControllerObject = new TicketsController();
  var myTicketsControllerObjectPromise = myTicketsControllerObject.insert_tickets(
    jsonObject_
  );

  myTicketsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_all_tickets", urlencodedParser, function(request, response) {
  var myTicketsControllerObject = new TicketsController();
  var myTicketsControllerObjectPromise = myTicketsControllerObject.get_all_tickets();

  myTicketsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/update_tickets", urlencodedParser, function(request, response) {
  var date = new Date();
  date.setHours(date.getHours() + 0);

  var jsonObject_ = {
    TicketTypeId: request.body.TicketTypeId,
    AttendeeId: request.body.AttendeeId,
    AgentId: request.body.AgentId,
    TicketNumber: request.body.TicketNumber,
    BookedDate: date
  };

  var myTicketsControllerObject = new TicketsController();
  var myTicketsControllerObjectPromise = myTicketsControllerObject.batch_tickets_update(
    jsonObject_
  );

  myTicketsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_specific_tickets", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myTicketsControllerObject = new TicketsController();

  var myTicketsControllerObjectPromise = myTicketsControllerObject.get_specific_tickets(
    mKey,
    mValue
  );

  myTicketsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_individual_tickets", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var date = new Date();
  date.setHours(date.getHours() + 0);

  var jsonObject_ = {
    TicketTypeId: request.body.TicketTypeId,
    AttendeeId: request.body.AttendeeId,
    AgentId: request.body.AgentId,
    TicketNumber: request.body.TicketNumber,
    BookedDate: date
  };

  var myTicketsControllerObject = new TicketsController();
  var myTicketsControllerObjectPromise = myTicketsControllerObject.individual_tickets_update(
    column_name,
    value_,
    jsonObject_
  );

  myTicketsControllerObjectPromise.then(
    function(result) {
      response.send(result);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/delete_individual_tickets", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myTicketsControllerObject = new TicketsController();
  var myTicketsControllerObjectPromise = myTicketsControllerObject.delete_tickets_record(
    column_name,
    value_
  );

  myTicketsControllerObjectPromise.then(
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
