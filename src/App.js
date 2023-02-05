import Header from './components/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
