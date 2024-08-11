import React from "react"
import Player from "./images/katie-zaferes.png"
import Star from "./images/star.png"


export default function Card(props) {
	const {img,rating,reviewCount,country,title,price} = props
    return (
        <div className="card">
            <img 
                src={props.img} 
                className="card--image" 
                alt="Main card image."
            />
            <div className="card--stats">
                <img 
                    src={Star}
                    className="card--star" 
                    alt="Star icon."
                />
                <span>{props.rating} </span>
                <span className="gray">{props.reviewCount} </span>
                <span className="gray">{props.country} </span>
            </div>
            <h2>{props.title} </h2>
            <p><span className="bold">{props.price} </span> / person</p>
        </div>
    )
}