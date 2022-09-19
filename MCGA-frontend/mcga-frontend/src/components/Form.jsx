import React, { useState } from 'react';


const Form = ({ addUser }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const userChange = (e) => {
      setUser(e.target.value)
    }
    const passChange = (e) => {
      setPass(e.target.value)
    }

  return (
    
      <div>
        <input type="text" placeholder="Default User" required="required" value={user} onChange={(e) => userChange(e)} />
        <input type="password" placeholder="Default Password" required="required" value={pass} onChange={(e) => passChange(e)} />

        <button onClick={e => {
              console.log ('El usuario es:',  user, 'y a password es:', pass)
            }}>Enviar usuario y pass a la consola</button>
      </div>
   

  );
};

export default Form;