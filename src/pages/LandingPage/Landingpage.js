import React, { useState } from 'react';
import HomePage from '../HomePage/Homepage';

export default function LandingPage() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    if (isLoggedIn) {
            return (
            <HomePage/>
        )
    }
    return (
        <div>Landing Page 
         
            

        </div>
    )
}