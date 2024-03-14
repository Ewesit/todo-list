
import './App.css'
import './index.css'
import {TodoWrapper} from './components/TodoWrapper';




function App() {
  return(
    <div className='App bg-gray-800 min-h-screen flex flex-col justify-center items-center'>

      <TodoWrapper>
        <h1 className="text-6xl font-bold text-white">My TODO List</h1>
      </TodoWrapper>
      
      
    </div>

  );
  
}

export default App
