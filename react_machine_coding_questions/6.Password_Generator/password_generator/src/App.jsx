import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(0);
  const [checkboxData, setCheckboxData] = useState([
    {title: 'Include Lowercase', state: false},
    {title: 'Include Uppercase', state: false},
    {title: 'Include Special Characters', state: false},
    {title: 'Include Numbers', state: false}
  ]);
  const [password, setPassword] = useState('');
  const [copy, setCopy] = useState(false);


  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = uppercase.toLowerCase();
  const specialChars = '!@#$%^&*()><,.}{|)(';
  const numbers = '1234567890';


  const handleCheckbox = (i) => {
    const updatedCheckedBox = [...checkboxData];
    updatedCheckedBox[i].state = !updatedCheckedBox[i].state;
    setCheckboxData(updatedCheckedBox);
  }

  const handleSetPassword = () => {
    let charPool = ''; // this will contain all the types of data like(lowercase, uppercase, special chars, numbers).
    let allCharPassword = []; // this will store password.
    let remainingChars = length; // after appending character at every step we need to update the length of password.
    if(checkboxData[0].state && remainingChars) {
      charPool+=lowercase;
      let pass = lowercase[Math.floor(Math.random() * lowercase.length)];
      allCharPassword.push(pass);
      remainingChars = length - allCharPassword.length;
    }
    
    if(checkboxData[1].state && remainingChars) {
      charPool+=uppercase;
      let pass = uppercase[Math.floor(Math.random() * uppercase.length)];
      allCharPassword.push(pass);
      remainingChars = length - allCharPassword.length;
    }

    if(checkboxData[2].state && remainingChars) {
      charPool+=specialChars;
      let pass = specialChars[Math.floor(Math.random() * specialChars.length)];
      allCharPassword.push(pass);
      remainingChars = length - allCharPassword.length;
    }

    if(checkboxData[3].state && remainingChars) {
      charPool+=numbers;
      let pass = numbers[Math.floor(Math.random() * numbers.length)];
      allCharPassword.push(pass);
      remainingChars = length - allCharPassword.length;
    }

    for(let i = 0; i < remainingChars; i++) {
      const randomChar = charPool[Math.floor(Math.random() * charPool.length)];
      allCharPassword.push(randomChar);
    }

    if(length === 0 && allCharPassword.length === 0) {
      setPassword('Select atleast 1 option')
      return;
    }
    setPassword(allCharPassword.join(''));
  }

  const handleCopy = () => {
    if(password !== '') {
      navigator.clipboard.writeText(password)
      // .then(() => alert('Pasword copied to clipboard'))
      setCopy(true);

      setTimeout(() => {
        setCopy(false)
      }, 2000)
    }
  }

  
  return (
    <>
      <h3>Character Length {length}</h3>
      <input type='range' min={0} max={25} value={length} onChange={(e) => setLength(e.target.value)}/>
      {checkboxData.map((check, index) => {
        return (
          <div key={index} style={{display: 'flex'}}>
            <input type='checkbox' checked={check.state} onChange={() => handleCheckbox(index)}/>
            <label>{check.title}</label>
          </div>
        )
      })}
      <h3>{password}</h3>
      <button onClick={handleSetPassword}>Generate Password</button>
      <button onClick={handleCopy}>{copy ? 'Copied' : 'Copy'}</button>
    </>
  )
}

export default App;