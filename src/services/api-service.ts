import { Product } from '../views/store';

const domain = import.meta.env.VITE_API_DOMAIN as string;

export const fetchProducts = async (): Promise<Product[]> => {
	const response = await fetch(`${domain}/product`, {
		method: 'GET'
	});

	return response.json();
}; 