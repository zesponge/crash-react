import Header from './components/Header'

function App() {
  const name = 'brad'
  const x = false

  return (
    <div className='container'>
      <h1>hello from react</h1>
      <h2>other thing {name}</h2>
      <h3>{1+2}</h3>
      <h4>{x ? 'yes' : 'no'}</h4>
      <Header/>
    </div>
  );
}

export default App;
