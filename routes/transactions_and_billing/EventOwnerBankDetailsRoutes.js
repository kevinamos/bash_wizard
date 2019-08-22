/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the event_owner_bank_details table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"EventOwnerBankDetailsController" class

*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const EventOwnerBankDetailsController = require('../../controllers/transactions_and_billing/EventOwnerBankDetailsController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_event_owner_bank_details', urlencodedParser,function(request,response){
	   
	   
	   
        var	jsonObject_ = {
         
		    id:request.body.id,
			MpesaNumber:request.body.MpesaNumber,
			BankName:request.body.BankName,
			BankBranch:request.body.BankBranch,
			AccountName:request.body.AccountName,
			AccountNumber:request.body.AccountNumber
			
						   
		 
		
      
        };
	
	      var myEventOwnerBankDetailsControllerObject=new EventOwnerBankDetailsController();
          var myEventOwnerBankDetailsControllerObjectPromise = myEventOwnerBankDetailsControllerObject.insert_event_owner_bank_details(jsonObject_);
	          
		   
		   myEventOwnerBankDetailsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_event_owner_bank_details',urlencodedParser,function(request,response){
     var myEventOwnerBankDetailsControllerObject=new EventOwnerBankDetailsController();
     var myEventOwnerBankDetailsControllerObjectPromise = myEventOwnerBankDetailsControllerObject.get_all_event_owner_bank_details();
	      
		   
		   myEventOwnerBankDetailsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });






   router.post('/update_event_owner_bank_details',urlencodedParser,function(request,response){
	   
	   
	
    var	jsonObject_ = {
         
		    id:request.body.id,
			MpesaNumber:request.body.MpesaNumber,
			BankName:request.body.BankName,
			BankBranch:request.body.BankBranch,
			AccountName:request.body.AccountName,
			AccountNumber:request.body.AccountNumber
		
      
        };
	
    var myEventOwnerBankDetailsControllerObject=new EventOwnerBankDetailsController();
    var myEventOwnerBankDetailsControllerObjectPromise = myEventOwnerBankDetailsControllerObject.batch_event_owner_bank_details_update(jsonObject_);
	   
		   
		   myEventOwnerBankDetailsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







   router.post('/get_specific_update_event_owner_bank_details',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
   
        var myEventOwnerBankDetailsControllerObject=new EventOwnerBankDetailsController();


        var myEventOwnerBankDetailsControllerObjectPromise = myEventOwnerBankDetailsControllerObject.get_specific_event_owner_bank_details(mKey,mValue);
	        
		   
		   myEventOwnerBankDetailsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });






   router.post('/update_individual_event_owner_bank_details',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	
          var	jsonObject_ = {
         
		          id:request.body.id,
			      MpesaNumber:request.body.MpesaNumber,
			      BankName:request.body.BankName,
			      BankBranch:request.body.BankBranch,
			      AccountName:request.body.AccountName,
			      AccountNumber:request.body.AccountNumber
		
      
           };
	
         var myEventOwnerBankDetailsControllerObject=new EventOwnerBankDetailsController();
         var myEventOwnerBankDetailsControllerObjectPromise = myEventOwnerBankDetailsControllerObject.individual_event_owner_bank_details_update(column_name,value_,jsonObject_);
	         	        
		   
		   myEventOwnerBankDetailsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_event_owner_bank_details',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
    var myEventOwnerBankDetailsControllerObject=new EventOwnerBankDetailsController();
    var myEventOwnerBankDetailsControllerObjectPromise = myEventOwnerBankDetailsControllerObject.delete_event_owner_bank_details_record(column_name,value_);
	      	        
		   
		   myEventOwnerBankDetailsControllerObjectPromise.then(function(result) {
        
           response.send(result);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });
 
 
module.exports = router;




