import express from  'express'; 
import products from './products.js'

const app = express();

app.get('/',( req, res) =>{
    res.send('server is ready')
});

const port = process.ENV || 5000

app.get('/api/products',( req, res) =>{
    res.send(products)
});

app.listen(port, ()=>{
    console.log('server is running at http://localhost:5000')
});