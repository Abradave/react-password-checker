import './Main.css'
import { useState } from 'react';
import PasswordChecker from "./PasswordChecker";



function Main() {
    const [password, setPassword] = useState("")

    return ( <main>
    <div>
        <label htmlFor='password'>Jelszó:</label> 
        <input type="text" id='password' onInput={event => setPassword(event.currentTarget.value)} /> 
    </div>
    
        <div> 
            <PasswordChecker password={password}/>
        </div> 
        </main>);
}

export default Main;