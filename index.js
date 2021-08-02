import express from 'express'
import route from './route/home_route.js'
import path from 'path';
import cors from 'cors';

const app = express()
app.use(cors('*'));

const __dirname = path.resolve();
app.use(express.static(__dirname + '/views/page/home'))

app.set('view engine', 'html')

app.use('/', route)

app.listen( process.env.PORT || 3000, function(){
  console.log(" Express Server listening on port %d in %s mode", this.address().port, app.settings.env);
});