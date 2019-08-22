/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/



const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
var dbcredentials;
var port = process.env.PORT || 5000;


    dbcredentials={
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.MY_DB,
        insecureAuth : true
    }


app.use(express.static('public'));

var con;
app.use((req,res,next)=>{
    con = mysql.createConnection(dbcredentials);
    con.on('error',(err) =>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            console.log(err);                        
        } else {                                      
            //throw err;                                  
        }
    });
    console.log("Connection established");

    next();
});


app.use(require('./routes/events_management/EventTypesRoutes.js'));
app.use(require('./routes/events_management/EventCategoriesRoutes.js'));
app.use(require('./routes/events_management/EventPrivacyRoutes.js'));
app.use(require('./routes/events_management/EventsRoutes.js'));
app.use(require('./routes/attendee_management/AttendeesRoutes.js'));
app.use(require('./routes/ticket_management/TicketTypesRoutes.js'));
app.use(require('./routes/ticket_management/TicketsRoutes.js'));
app.use(require('./routes/transactions_and_billing/TransactionsRoutes.js'));
app.use(require('./routes/transactions_and_billing/EventOwnerBankDetailsRoutes.js'));
app.use(require('./routes/agent_management/AgentTypesRoutes.js'));
app.use(require('./routes/users_management/UsersRoutes.js'));



app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Listening on "+port);
});