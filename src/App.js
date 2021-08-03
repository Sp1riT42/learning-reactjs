import logo from './logo.svg';
import './App.css';
import {
  useState,
  useEffect
} from "react";


export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const handleSendMessage = () => {
    console.log(value)
    setMessageList((state) => [...state, { text: value, author: "User" }]);
    setValue("");
  };

    useEffect(() => {
      if(messageList[messageList.length-1]?.author === "User") {
        setTimeout(() =>{
          setMessageList((state) => [...state, { text: "Hi, User", author: "Bot" }]);
        }, 1500)
      }
    },[messageList])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {messageList.map((message, id) => (
              <li key={id}>
                {message.text} = {message.author}
              </li>
          ))}
        </ul>
        <input className="App-input" placeholder="message" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="App-btn" onClick={handleSendMessage}>send</button>
      </header>
    </div>
  );
}

//export default App;
