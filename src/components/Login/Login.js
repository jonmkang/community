import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    console.log(username, password);
    
    return (
        <form>
            <label>Email:</label>
            <input value={username} onChange={ (e) => {setUsername(e.target.value)}}/>
            <label>Password:</label>
            <input value={password} onChange={ (e) => {setPassword(e.target.value)}}/>
            <button type="submit">Login</button>
        </form>
    )
}