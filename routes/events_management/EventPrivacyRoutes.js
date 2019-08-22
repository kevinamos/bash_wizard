/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_privacy table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"EventPrivacyController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const EventPrivacyController = require('../../controllers/events_management/EventPrivacyController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_event_privacy', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		 EventPrivacyDescription:request.body.EventPrivacyDescription
		 
		
      
        };
	
	      var myEventPrivacyControllerObject=new EventPrivacyController();
          var myEventPrivacyControllerObjectPromise = myEventPrivacyControllerObject.insert_event_privacy(jsonObject_);
	          
		   
		   myEventPrivacyControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_event_privacy',urlencodedParser,function(request,response){
    var myEventPrivacyControllerObject=new EventPrivacyController();
    var myEventPrivacyControllerObjectPromise = myEventPrivacyControllerObject.get_all_event_privacy();
	      
		   
		   myEventPrivacyControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_event_privacy',urlencodedParser,function(request,response){
	   
	  
	
    var	jsonObject_ = {
         
		 EventPrivacyDescription:request.body.EventPrivacyDescription
		
      
        };
	
    var myEventPrivacyControllerObject=new EventPrivacyController();
    var myEventPrivacyControllerObjectPromise = myEventPrivacyControllerObject.batch_event_privacy_update(jsonObject_);
	   
		   
		   myEventPrivacyControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_event_privacy',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myEventPrivacyControllerObject=new EventPrivacyController();


        var myEventPrivacyControllerObjectPromise = myEventPrivacyControllerObject.get_specific_event_privacy(mKey,mValue);
	        
		   
		   myEventPrivacyControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_event_privacy',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	  
	
          var	jsonObject_ = {
         
		          EventPrivacyDescription:request.body.EventPrivacyDescription
		
      
           };
	
        var myEventPrivacyControllerObject=new EventPrivacyController();
         var myEventPrivacyControllerObjectPromise = myEventPrivacyControllerObject.individual_event_privacy_update(column_name,value_,jsonObject_);
	         	        
		   
		   myEventPrivacyControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_event_privacy',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myEventPrivacyControllerObject=new EventPrivacyController();
    var myEventPrivacyControllerObjectPromise = myEventPrivacyControllerObject.delete_event_privacy_record(column_name,value_);
	      	        
		   
		   myEventPrivacyControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




