import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/product/${product._id}`} />
			<Card.Img src={product.image} variant='top' />
		</Card>
	);
};

<Card.Body>
	<a href={`/product/${product._id}`}>
		<Card.Title as='div'>
			<strong>{Product.name}</strong>
		</Card.Title>
	</a>
	<Card.Text as='div'>
		<div className='my-3'>
			{Product.rating} from {Product.numReviews} reviews
		</div>
	</Card.Text>

	<Card.Text as='h3'> ${Product.price}</Card.Text>
</Card.Body>;

export default Product;
