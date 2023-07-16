import Button from './button';

export interface ProductCardProps {
    img: string
    name: string
}

function ProductCard({img, name}: ProductCardProps) {
	return (
		<div className='productCard'>
			<Button>
				<img src={img} />
				<h2>{name}</h2>
			</Button>
		</div>
	);
}

export default ProductCard;