var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var events=require('events');
function Account() {
    this.balance=0;
    this.deposit=function(amount) {this.balance+=amount; this.emit('balanceChanged')};
    this.withdraw=function(amount) {this.balance-=amount; this.emit('balanceChanged')};
}
Account.prototype=events.EventEmitter.prototype;
function displayBalance() {console.log("Balance:$%d",this.balance);}
function checkOverdraw() {if (this.balance<0) {console.log("Overdrawn!");}}
function checkGoal(acc,goal) {
    if (acc.balance>goal) {console.log("Goal acheived");}
}
var account=new Account();
account.on("balanceChanged", displayBalance);
account.on("balanceChanged",checkOverdraw);
account.on("balanceChanged",function(){checkGoal(this,1000);});
account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);

module.exports=app;
