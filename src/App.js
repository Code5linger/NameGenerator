import './App.css';
import React, {useState, useEffect} from 'react';

const API_URL = `https://random-data-api.com/api/users/random_user`;

function App() {
  const [name, setName] = useState('');

  const generateName = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setName(data.first_name));
  }

  useEffect(() => {
    generateName();
  }, [])

  return (

      <div className="box">
        <h2>Random Name</h2>
        <p>{name}</p>
        <button onClick={generateName}>Need another name🤔</button>
      </div>

  );
}

export default App;
