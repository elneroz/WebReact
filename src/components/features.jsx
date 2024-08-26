import React from "react";
import './features.css'
const Features =()=>{
    const features =[
        {
            title: "Catacteristica 1",
            description: "First fucionality description",
            image: "/a.jpg"
        },
        {
            title: "Catacteristica 1",
            description: "First fucionality description",
            image: "/b.jpg"
        },
        {
            title: "Catacteristica 1",
            description: "First fucionality description",
            image: "/c.jpg"
        }
    ]
    return(
        <div className="features-container">
            {features.map((features, index)=>(
                <div key={index} className="feature-item">
                    <img src={features.image} alt={features.title} className="feature-image"/>
                    <div className="feature-text">
                        <h3>{features.title}</h3>
                        <p>{features.description}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Features