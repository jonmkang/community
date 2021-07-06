import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }

    console.log(username, password);
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Email:</label>
            <input value={username} onChange={ (e) => {setUsername(e.target.value)}}/>
            <label>Password:</label>
            <input value={password} onChange={ (e) => {setPassword(e.target.value)}}/>
            <button type="submit" onSubmit={(e) => handleSubmit(e)}>Login</button>
        </form>
    )
}