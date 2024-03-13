
import './App.css'
import './index.css'
import { todoWrapper } from './components/todoWrapper';

function App() {
  return(
    <div className='App'>
      <todoWrapper />
      <div>
        <h1 className='text-6xl font-bold text-white-500'>My TODO List</h1>

      </div>
    </div>

  );
  
}

export default App
