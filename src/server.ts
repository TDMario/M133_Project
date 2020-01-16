
import * as express from 'express';
import * as expressLayouts from 'express-ejs-layouts';
import * as expressSession from 'express-session';
import * as router from './route';

const port = 8080;


const app = express();
app.use(expressSession({
    secret: "save",
    resave: false,
    saveUninitialized: true
}));

// Zuständig für richtige darstellung von Daten
app.use(express.urlencoded({ extended: true }));


// EJS für views
app.set('view engine', 'ejs');
app.use(expressLayouts);


// Router setzen
app.use('/', router);

app.use(express.static(__dirname + '/others'))

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


