import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {
	const id = props.id;
	console.log("item id", id);
	const { cart, setCart } = useContext(CartContext);

	const removeItem = () => {
		setCart(cart.filter(item => item.id !== id));
		console.log(cart);
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem()}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
