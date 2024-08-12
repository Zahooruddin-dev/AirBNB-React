import React from 'react';
import Player from './images/katie-zaferes.png';
import Star from './images/star.png';

export default function Card(props) {
    let avalibility
    if(props.item.openSpots===0){
        avalibility="SOLD OUT"
    }
    else if(props.item.location === "Online"){
        avalibility="ONLINE"
    }
    
	return (
		<div className='card'>
            {avalibility && <div className="card--badge">{avalibility}</div>}
			<img src={props.item.coverImg} className='card--image' alt='Main card image.' />
			<div className='card--stats'>
				<img src={Star} className='card--star' alt='Star icon.' />
				<span>{props.item.stats.rating}</span>
				<span className='gray'>({props.item.stats.reviewCount})</span>
				<span className='gray'>*{props.item.location}</span>

				<span className='gray'>{props.item.country} </span>
			</div>
			<h2 p className='card--title'>
				{props.item.title}
			</h2>
			<p className='card--price'>
				<span className='bold'>From ${props.item.price} </span>/ person
			</p>
		</div>
	);
}
