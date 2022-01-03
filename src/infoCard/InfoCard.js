import React from 'react';

import './InfoCard.scss';

function InfoCard({title, content}) {
    return (
        <div className="infoCard">
            <h3 className="infoCard__title" data-testid="infoCard__title">{title}</h3>    
            <div className="infoCard__content" data-testid="infoCard__content">{content}</div>        
        </div>
    );
}

export default InfoCard;