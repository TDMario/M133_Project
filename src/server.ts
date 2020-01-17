
import * as express from 'express';
import * as expressLayouts from 'express-ejs-layouts';
import * as session from 'express-session';
import * as router from './route';
import { basket } from './others/basket';

const port = 8080;

const app = express();



// Session
app.set('trusty proxy', 1);
app.use(
    session(
        {
            secret: 'Once Upon a time there were children, which had fun, which had spare time, which enjoyed living ... and then they went to school.',
            resave: false,
            saveUninitialized: true,
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


