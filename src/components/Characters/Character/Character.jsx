import React from 'react';
import "./Character.sass"
import Button from "../../../ui/Button/Button";

const Character = ({name, status, gender, location, image}) => {

    return (
        <div className="character">
            <img src={image} alt=""/>
            <div className="character__info">
                <h1>{name}</h1>
                <h2>{status} {gender}</h2>
                <h2>Location: {location}</h2>
                <Button children="Details" type="outlined"/>
            </div>

        </div>
    );
};

export default Character;