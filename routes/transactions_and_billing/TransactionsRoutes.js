/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the transactions table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TransactionsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TransactionsController = require('../../controllers/transactions_and_billing/TransactionsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_transactions', urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	   
        var	jsonObject_ = {
         
		    EventId:request.body.EventId,
			AttendeeId:request.body.AttendeeId,
			TicketId:request.body.TicketId,
			AgentId:request.body.AgentId,
			PaymentStatus:request.body.PaymentStatus,
			ProcessStatus:request.body.ProcessStatus,
			TransactionDate:date
			
						   
		 
		
      
        };
	
	      var myTransactionsControllerObject=new TransactionsController();
          var myTransactionsControllerObjectPromise = myTransactionsControllerObject.insert_transactions(jsonObject_);
	          
		   
		   myTransactionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_transactions',urlencodedParser,function(request,response){
    var myTransactionsControllerObject=new TransactionsController();
    var myTransactionsControllerObjectPromise = myTransactionsControllerObject.get_all_transactions();
	      
		   
		   myTransactionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_transactions',urlencodedParser,function(request,response){
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
    var	jsonObject_ = {
         
		    EventId:request.body.EventId,
			AttendeeId:request.body.AttendeeId,
			TicketId:request.body.TicketId,
			AgentId:request.body.AgentId,
			PaymentStatus:request.body.PaymentStatus,
			ProcessStatus:request.body.ProcessStatus,
			TransactionDate:date
		
      
        };
	
    var myTransactionsControllerObject=new TransactionsController();
    var myTransactionsControllerObjectPromise = myTransactionsControllerObject.batch_transactions_update(jsonObject_);
	   
		   
		   myTransactionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_transactions',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myTransactionsControllerObject=new TransactionsController();


        var myTransactionsControllerObjectPromise = myTransactionsControllerObject.get_specific_transactions(mKey,mValue);
	        
		   
		   myTransactionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_transactions',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   var date = new Date();
	   date.setHours(date.getHours()+0);
	
          var	jsonObject_ = {
         
		          EventId:request.body.EventId,
			      AttendeeId:request.body.AttendeeId,
			      TicketId:request.body.TicketId,
			      AgentId:request.body.AgentId,
			      PaymentStatus:request.body.PaymentStatus,
			      ProcessStatus:request.body.ProcessStatus,
			      TransactionDate:date
		
      
           };
	
         var myTransactionsControllerObject=new TransactionsController();
         var myTransactionsControllerObjectPromise = myTransactionsControllerObject.individual_transactions_update(column_name,value_,jsonObject_);
	         	        
		   
		   myTransactionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_transactions',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myTransactionsControllerObject=new TransactionsController();
    var myTransactionsControllerObjectPromise = myTransactionsControllerObject.delete_transactions_record(column_name,value_);
	      	        
		   
		   myTransactionsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




