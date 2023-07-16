import { useState } from 'react';
import Button from '../components/button';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from '../components/product-card';
import { fetchProducts } from '../app/api-service';

export type Product = {
	id: string,
    name: string,
    price: number
}

function Store() {
	const [products, setProducts] = useState([] as Product[]);

	function fetchAndUpdateProducts() {
		fetchProducts()
			.then(products => setProducts(products))
			.catch(error => console.log(error));
	}

	return (
		<div className='store'>
			<img className='storeBanner' src='src/assets/banner1.png' />
			<div className='storeProducts'>
				{products.map(
					(product) => <ProductCard 
						key={product.id} 
						img='src/assets/pasta-ditalini.jpeg' 
						name={product.name} 
					/>
				)}
			</div>
			<div className='storeSearch'>
				<Button onClick={() => fetchAndUpdateProducts()}>
					<SearchIcon />
					{'Search'}
				</Button>
			</div>
		</div>
	);
}

export default Store;