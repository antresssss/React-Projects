import logo from './logo.svg';
import './App.css';

const cursor=document.getElementsById("cursor")

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.pageX +"px"
    cursor.style.top=e.pageY +"px"
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           CHOOSE CUSTOM CURSOR
           <div className='cursor' id="cursor"></div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
