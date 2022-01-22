import React from 'react'

export default function Card(props) {
    const photo_id = props.imageUrl.split('/');
    const url = `https://source.unsplash.com/${photo_id[photo_id.length - 1]}/400x300`;
    return (
        <div>
        <div className="card">
            <img src={url}/>
            <div className="info">
                <div className="location">
                    <img src="location.png"/>
                    <h3>{props.location.toUpperCase()}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
            
        </div>
        <hr/>
        </div>
    )
}