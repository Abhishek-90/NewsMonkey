import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News';

function App() {
  return (
    <>
      <Navbar title="MonkeyNews"/>
      <News pageSize={6}/>
    </>
  );
}

export default App;
