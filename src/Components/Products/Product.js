import React from 'react';
import "./Products.css";

const Card = ({name, email, id, photo, price})=>{
	const salt = parseFloat(price).toFixed(2) + 'Lei';
	return(
		<div className='products grow '>
			<img className='' alt='robots' src={photo}/>
			<div className=''>
				<h2>{name}</h2>
				<h3>{salt}</h3>
				<p>{email}</p>
			</div>
		</div>
		)
}

export default Card;