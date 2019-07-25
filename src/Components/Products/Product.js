import React from 'react';
import "./Products.css";

const Card = ({name, email, id, photo, price, click})=>{
	const salt = parseFloat(price).toFixed(2) + 'Lei';
	return(
		<div id={id} className='products' onClick={click}>
			<img id={id}  className='' alt='robots' src={photo}/>
			<div  className=''>
				<h2 id={id}>{name}</h2>
				<h3 id={id}>{salt}</h3>
				<p id={id}>{email}</p>
			</div>
		</div>
		)
}

export default Card;