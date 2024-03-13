
import './index.css'
import TodoWrapper from './components/TodoWrapper';
import todoForm from './components/TodoForm';


function App() {
  return(
    <div className='App'>
      <TodoWrapper />
      <div>
        <h1 className='text-6xl font-bold text-white-500'>My TODO List</h1>

      </div>
    </div>

  );
  
}

export default App
