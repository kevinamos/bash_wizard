/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "event_privacy" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.

*/



const ModelMaster=require('../ModelMaster.js');
const TableName="event_privacy";


module.exports = class EventPrivacyModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	
	
   insert_event_privacy(jsonObject_){
	   return new Promise(function(resolve, reject) {
	   
 	   const  myModelMaster=new ModelMaster();

       var myModelMasterPromise = myModelMaster.insert(TableName,jsonObject_);
		   
		   
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
		   
	   })
 
    }		
	
	

	
	
	
   get_all_event_privacy(){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();

        var myModelMasterPromise = myModelMaster.selectAll(TableName);
		 myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		
     })
    }	
	
	
	
	
	
	
	
	
	
   get_specific_event_privacy(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();


        var myModelMasterPromise = myModelMaster.selectSpecific(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
     })
    }		
	
	
	
	
   batch_event_privacy_update(jsonObject_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();


        var myModelMasterPromise = myModelMaster.batch_update(TableName,jsonObject_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
   individual_event_privacy_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();

        
		var myModelMasterPromise = myModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
   delete_event_privacy_record(ColumnName,value_){
	   return new Promise(function(resolve, reject) {
        const  myModelMaster=new ModelMaster();

        
		var myModelMasterPromise = myModelMaster.delete(TableName,ColumnName,value_);
		   myModelMasterPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
     })
    }		
	
	
	
	
	
}