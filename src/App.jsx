
import React, { useState } from 'react';
import data from './data.json';
//components
import './App.css'
import './index.css'
import Header from './Header';
import ToDoList from './components/ToDoList';
import ToDoList from './components/ToDo';

function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
 
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList}/>
   </div>
 );
}
 
export default App;