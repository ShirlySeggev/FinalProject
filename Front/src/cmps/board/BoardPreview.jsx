
import { Link } from 'react-router-dom';
import React from 'react';


export function BoardPreview({ board }) {
    const { _id, title } = board;

    return (
        
        <Link to={`/board/${_id}`}>
                <div className="single-board-preview">
            <h4>{title}</h4>
            </div>
            </Link>
        
    );

}

