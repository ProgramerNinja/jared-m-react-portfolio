import React from "react";
import {Link} from 'react-router-dom';

export default function(props) {
    return (
        <div>
            <h2>Sorry, that page doesn't exist.</h2>

            <Link to='/'>Homepage</Link>
        </div>

    );
}