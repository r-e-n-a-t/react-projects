import logo from './logo.svg';
import './App.css';

async function getData() {
  const result = await fetch("https://api.pi.delivery/v1/pi?start=0&numberOfDigits=100");
  if(!result.ok) {
      throw new Error(`Could not a Fetch, status ${result.status}`);
  }
  return await result.text();
}

function App() {

  // const letters = split(animatable)
  // setTimeout(() => letters.forEach(span => span.style.opacity = 1), 0)
  
  // function split(element) {
  //   element.style.wordBreak = 'break-word'
  //   const letters = element.innerText.split('').map((letter, i) => {
  //     const span = document.createElement('span')
  //     span.innerHTML = letter !== ' ' ? letter : '&nbsp;'
  //     span.style.opacity = 0
  //     span.style.transitionDelay = 0.1 * i + 's'
  //     return span
  //   })
  
  //   element.innerHTML = ''
  //   element.append(...letters)
  //   return letters
  // }
  const pi = getData()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          google
        </a>
        <p>
          {pi}
        </p>
      </header>
    </div>
  );
}

export default App;
