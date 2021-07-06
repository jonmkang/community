import { useState, useContext } from 'react';
import "./Info.css"


export default function Info({ detailsTitle, detailsInfo }) {
    const [editing, toggleEdit] = useState(false);
    
    return (
        <div class="info-container">
            <h5>{detailsTitle}</h5>
            <p>{detailsInfo}</p>
        </div>
    )
}