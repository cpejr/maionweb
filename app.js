require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const firebase = require('firebase');
const flash = require('express-flash');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const carsRouter = require('./routes/car');
const newRouter = require('./routes/new');
const prospectionRouter = require('./routes/prospection');
const registredRouter = require('./routes/registred');
const homeadminRouter = require('./routes/homeadmin');

const app = express();


/**
 *  Database setup
 */

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}?${process.env.MONGO_OPTIONS}`);
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
mongoose.connection.once('open', () => {
  console.log('Database connect!');
});

/**
 * firebase setup
 */
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

// //handlebars setup Middleware
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
//
//
// //handlebars setup routes
// app.get('/', function(req,res){
//   res.render('home');
// });




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
 defaultLayout: 'layout',
 extname: '.hbs',
 partialsDir: 'views/partials',
 helpers: {
   // Here we're declaring the #section that appears in layout/layout.hbs
   section(name, options) {
     if (!this._sections) this._sections = {};
     this._sections[name] = options.fn(this);
     return null;
   },
   // Compare logic
   compare(lvalue, rvalue, options) {
     if (arguments.length < 3) {
       throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
     }
     const operator = options.hash.operator || '==';
     const operators = {
       '==': function(l, r) { return l == r; },
       '===': function(l, r) { return l === r; },
       '!=': function(l, r) { return l != r; },
       '<': function(l, r) { return l < r; },
       '>': function(l, r) { return l > r; },
       '<=': function(l, r) { return l <= r; },
       '>=': function(l, r) { return l >= r; },
       'typeof': function(l, r) { return typeof l == r; }
     }
     if (!operators[operator]) {
       throw new Error(`Handlerbars Helper 'compare' doesn't know the operator ${operator}`);
     }
     const result = operators[operator](lvalue, rvalue);
     if (result) {
       return options.fn(this);
     }
     return options.inverse(this);
   }
 }
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'some-private-cpe-key',
  resave: true,
  saveUninitialized: true
}));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);
app.use('/new', newRouter);
app.use('/prospection', prospectionRouter);
app.use('/registred', registredRouter);
app.use('/homeadmin', homeadminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
