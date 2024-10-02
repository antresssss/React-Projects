import React from "react";
import kati from "../assets/aktie.png";
import star from "../assets/stra.png";

export default function Card() {
    return(
    <div className="card">
        <img src={kati} alt="a photo" className="photo"/>
        <div className="cardStats">
            <img src={star} className="star"/>
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <h2 className="title">Life lessons with Katie </h2>
        <p><span className="bold">From $136/person </span></p>

    </div>


    )
}