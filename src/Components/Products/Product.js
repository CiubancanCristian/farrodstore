import React from 'react';
import "./Products.css";

const Card = ({name, email, id, poza})=>{
	return(
		<div className='products'>
			<img className='' alt='robots' src={poza}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		)
}

export default Card;