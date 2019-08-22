/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the tickets's controller class.
It receives calls from the "TicketsRoutes" class and
passes the calls down to the "TicketsModel" class

*/



const TicketsModel = require('../../models/ticket_management/TicketsModel.js');




module.exports = class TicketsController{
    constructor(){

    }
	
	
	
   insert_tickets(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myTicketsObject=new TicketsModel();
     var myTicketsObjectPromise = myTicketsObject.insert_tickets(jsonObject_);
		  
		   
		   myTicketsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_tickets(){
	   return new Promise(function(resolve, reject) {  
        const  myTicketsObject=new TicketsModel();
        var myTicketsObjectPromise = myTicketsObject.get_all_tickets();
		   
		   
		   myTicketsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_tickets(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         const  myTicketsObject=new TicketsModel();
        var myTicketsObjectPromise = myTicketsObject.get_specific_tickets(ColumnName,value_);
		   
		   
		   myTicketsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_tickets_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myTicketsObject=new TicketsModel();
        
		var myTicketsObjectPromise = myTicketsObject.batch_tickets_update(jsonObject_);
		   
		   
		   myTicketsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_tickets_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
        const  myTicketsObject=new TicketsModel();
        
		var myTicketsObjectPromise = myTicketsObject.individual_tickets_update(ColumnName,value_);
		   
		   
		   myTicketsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_tickets_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myTicketsObject=new TicketsModel();
        
		var myTicketsObjectPromise = myTicketsObject.delete_tickets_record(ColumnName,value_);
		    
		   
		   myTicketsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}