import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './Components/NabBar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.

		<Card
				img='/src/Components/images/katie-zaferes.png'
				rating='5.0'
				reviewCount={6}
				country='Whatever you want'
				title='Life Lessons with Katie Zaferes'
				price={136}
			></Card>
			img={item.coverImg}
	rating={item.stats.rating}
	reviewCount={item.stats.reviewCount}
	country={item.country}
	location={item.location}
	title={item.title}
	price={item.price}
	openSpots={item.openSpots}
*/
const dataElement = data.map(item => {
	return <Card 
	key={item.id}
	item={item}
	/>
})

	return (
		<>
			<NavBar></NavBar>
			<Hero />

		  <section className="cards-list">
                {dataElement}
            </section>
		</>
	);
}

export default App;
//     <Hero></Hero>
