import React, { useState } from 'react';
import HomePage from '../HomePage/Homepage';

export default function LandingPage(isLoggedIn) {
    
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