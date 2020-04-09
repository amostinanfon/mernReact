const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');

const items = require('./routes/api/itemsRoutes')

const app = express();
const morgan = require('morgan');

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

//DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
/*mongoose
    .connect(db, 
    { useNewUrlParser: true ,  useUnifiedTopology: true } )
    .then(() => console.log('MongoDB  connected'))
    .catch(err => console.log(err));
*/
mongoose.connect(
    'mongodb://127.0.0.1:27017/mern-shopping-db', 
    {
       useUnifiedTopology: true,
       useNewUrlParser: true
    })
    .then( () => console.log('***** Connection Successfull *******'))
    .catch(err => console.error(err));

    // Use Routes
app.use('/api/items', items)

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));