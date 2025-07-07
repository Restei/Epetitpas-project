import './App.css';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

function Homepage() {

  const [username, setName] = useState('');
  const [email, setMail] = useState('');
  const navigate = useNavigate();
  
  const HandleClick = async (where,e) => {
    e.preventDefault();
    if (email.includes('@')){
      const response = await fetch(`http://localhost:5000/api/${where}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, email })
      });
      const data = await response.json();
      if (data){
        localStorage.setItem('data', JSON.stringify(data));
        navigate('/connect')
      }
    }  
    else {
      alert('email must include @ !');
    }

  }

  return (
    <div class = "container">
      <form>
        <div>
          <input type = "text" value = {username} onChange={elem => setName(elem.target.value)} placeholder='Nom'></input>
        </div>
        <div>
          <input type = "text" value = {email} onChange={elem => setMail(elem.target.value)} placeholder='Email'></input>
        </div>
        <button id="signin" onClick={(e) => HandleClick('signin',e)}>Connexion</button>
        <button id="signup" onClick={(e) => HandleClick('signup',e)}>Inscription</button>
      </form>
    </div>
  );
}

export default Homepage;
