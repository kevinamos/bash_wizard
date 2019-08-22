/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the attendees table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"AttendeesController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const AttendeesController = require('../../controllers/attendee_management/AttendeesController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_attendees', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    
			EventId:request.body.EventId,
			AttendeeName:request.body.AttendeeName,
			AttendeeEmail:request.body.AttendeeEmail,
			AttendeePhoneNumber:request.body.AttendeePhoneNumber,
			NumberOfTickets:request.body.NumberOfTickets
		 
		
      
        };
	
	      var myAttendeesControllerObject=new AttendeesController();
          var myAttendeesControllerObjectPromise = myAttendeesControllerObject.insert_attendees(jsonObject_);
	          
		   
		   myAttendeesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_attendees',urlencodedParser,function(request,response){
    var myAttendeesControllerObject=new AttendeesController();
    var myAttendeesControllerObjectPromise = myAttendeesControllerObject.get_all_attendees();
	      
		   
		   myAttendeesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_attendees',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		    EventId:request.body.EventId,
			AttendeeName:request.body.AttendeeName,
			AttendeeEmail:request.body.AttendeeEmail,
			AttendeePhoneNumber:request.body.AttendeePhoneNumber,
			NumberOfTickets:request.body.NumberOfTickets
		
      
        };
	
    var myAttendeesControllerObject=new AttendeesController();
    var myAttendeesControllerObjectPromise = myAttendeesControllerObject.batch_attendees_update(jsonObject_);
	   
		   
		   myAttendeesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_attendees',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myAttendeesControllerObject=new AttendeesController();


        var myAttendeesControllerObjectPromise = myAttendeesControllerObject.get_specific_attendees(mKey,mValue);
	        
		   
		   myAttendeesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_attendees',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		    EventId:request.body.EventId,
			AttendeeName:request.body.AttendeeName,
			AttendeeEmail:request.body.AttendeeEmail,
			AttendeePhoneNumber:request.body.AttendeePhoneNumber,
			NumberOfTickets:request.body.NumberOfTickets
		
      
           };
	
        var myAttendeesControllerObject=new AttendeesController();
        var myAttendeesControllerObjectPromise = myAttendeesControllerObject.individual_attendees_update(column_name,value_,jsonObject_);
	         	        
		   
		   myAttendeesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_attendees',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myAttendeesControllerObject=new AttendeesController();
    var myAttendeesControllerObjectPromise = myAttendeesControllerObject.delete_attendees_record(column_name,value_);
	      	        
		   
		   myAttendeesControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




