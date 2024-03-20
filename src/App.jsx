
import React, { useState } from 'react';
import data from './data.json';
//components
import './App.css'
import './index.css'
import Header from './Header';

function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
 
 return (
   <div className="App">
     <Header />
   </div>
 );
}
 
export default App;