import React from 'react';
import './Movie.css';

const movie = (props)=>{
    return (
        <div className='movie'>
            <h1>
                {props.name}
            </h1>
            <div className = 'details'>
                <div>
                    <span>Director:</span>{props.director}
                </div>
                <div>
                    <span>Producer:</span>{props.producer}
                </div>
                <div>
                    <span>Release Date:</span>{props.release}
                </div>

            </div>

            <p>
                <span>Plot:</span>{props.desc}
            </p>
        </div>
    );
}
export default movie;