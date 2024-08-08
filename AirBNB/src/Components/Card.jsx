import React from 'react';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
import star from "../assets/card/star.png"
import player1 from "../assets/card/player1.png"

export default function Card() {
	return (
		<div className='card'>
			<img src={player1} alt='player'  className='player--img'/>
			<div className='card--stats'>
				<img src={star} alt='star' className='star'/>
				<span>5.0</span>
				<span className='lighter'>(6) .</span>
				<span className='lighter'>USA </span>
				<p>Life lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136 /</span>Person</p>
			</div>
		</div>
	);
}
