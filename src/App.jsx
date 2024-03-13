
import './App.css'
import './index.css'
import TodoWrapper from './components/TodoWrapper';




function App() {
  return(
    <div className='App'>
      
      <div>
        <h1 className='text-6xl font-bold text-white-500'>My TODO List</h1>

      </div>
      <TodoWrapper />
      
    </div>

  );
  
}

export default App
