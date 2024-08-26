import React from "react";

const Features =()=>{
    const features =[
        {
            title: "Catacteristica 1",
            description: "First fucionality description",
            image: "image route"
        },
        {
            title: "Catacteristica 1",
            description: "First fucionality description",
            image: "image route"
        },
        {
            title: "Catacteristica 1",
            description: "First fucionality description",
            image: "image route"
        }
    ]
    return(
        <div>
            {features.map((features, index)=>{
                <div key={index}>
                    <img src={features.image} alt={features.title}/>
                    <h3>{features.title}</h3>
                    <p>{features.description}</p>
                </div>
            })

            }
        </div>
    )
}