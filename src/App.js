import React from 'react';

import Router from './router'
import './App.css';
import { TodoProvider } from './todos/todo-context';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <TodoProvider>
      {/* <secondProvider> */}
        {/* <thirdProvider> */}
       <BrowserRouter>
         <div className="App">
          {/* <NavBar /> */}
           <Router />
         </div>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
