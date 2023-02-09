import React from 'react';
import "./FeaturesCard.css";

const FeaturesCard = (props) => {
    return (
        
        <div class="FeatureCard">
            <h1 class="FeatureTitle">{props.title}</h1>
            <div class="FeatureContent">
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default FeaturesCard