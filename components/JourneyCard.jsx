import React from "react";

export default function JourneyCard({img, location,googleMapsUrl, title,startDate,endDate,description})  {
    return (
        <div className="Card">
    
            <img className="CardImage" src={img}  alt="card image" />
            <div className="CardContent">
                <div className="LocationDetails Flex">
                    <img src="./location-dot-solid.svg" alt="location icon" className="Icons" />
                    <h3 className="Uppercase">{location}</h3>
                    <a href={googleMapsUrl} target = "_blank">View on google maps</a>
                </div>
                <h1>{title}</h1>
                <p>{startDate} - {endDate}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}