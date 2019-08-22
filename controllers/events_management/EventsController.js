/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the events_'s controller class.
It receives calls from the "EventsRoutes" class and
passes the calls down to the "EventsModel" class

*/



const EventsModel = require('../../models/events_management/EventsModel.js');




module.exports = class EventsController{
    constructor(){

    }
	
	
	
   insert_events_(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     const  myEventsObject=new EventsModel();
     var myEventsObjectPromise = myEventsObject.insert_events_(jsonObject_);
		  
		   
		   myEventsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   get_all_events_(){
	   return new Promise(function(resolve, reject) {  
        const  myEventsObject=new EventsModel();
        var myEventsObjectPromise = myEventsObject.get_all_events_();
		   
		   
		   myEventsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   get_specific_events_(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
         const  myEventsObject=new EventsModel();
        var myEventsObjectPromise = myEventsObject.get_specific_events_(ColumnName,value_);
		   
		   
		   myEventsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   batch_events__update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       const  myEventsObject=new EventsModel();
        
		var myEventsObjectPromise = myEventsObject.batch_events__update(jsonObject_);
		   
		   
		   myEventsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   individual_events__update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
        const  myEventsObject=new EventsModel();
        
		var myEventsObjectPromise = myEventsObject.individual_events__update(ColumnName,value_);
		   
		   
		   myEventsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   delete_events__record(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        const  myEventsObject=new EventsModel();
        
		var myEventsObjectPromise = myEventsObject.delete_events__record(ColumnName,value_);
		    
		   
		   myEventsObjectPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
		
	
	
}