
import * as express from 'express';
import * as expressLayouts from 'express-ejs-layouts';
import * as expressSession from 'express-session';
import * as router from './route';
import * as session from 'express-Session';
import { basket } from './others/basket';

const port = 8080;

const products = [];




const app = express();
app.use(expressSession({
    secret: "save",
    resave: false,
    saveUninitialized: true
}));

// Session
app.set('trust proxy', 1);
app.use(
    session(
        {
            secret: "Once Upon a time there were children, which had fun, which had spare time, which enjoyed living ... and then they went to school.",
            saveUninitialized: true,
            resave: false,
            cookie: {
                secure: true,
                basket: new basket()
            }
        }
    )
)

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


