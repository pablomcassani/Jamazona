import express from 'express'; //gives access to express package.
import cors from 'cors';//bypass cors protocols
import data from './data';//let you control products from backend.

const app = express();

app.use(cors());

app.get("/api/products", (req, res) =>{
	res.send(data.products);
}); //returns the adress in server.js.
app.get('/api/products/:id', (req, res)=> {
	const product = data.products.find((x) =>x._id === req.params.id);
		if  (product){
			res.send(product);
	}	else {
			res.status(404).send( {message: 'product Not Found'});
		}
	});

app.listen(5000, () => {
	console.log('serve at http://localhost:5000');
});//crea webserver