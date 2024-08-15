import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './Components/NabBar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {

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
