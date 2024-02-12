import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import ShipBoard from './components/ShipBoard';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


// Example usage


function App(){

console.log('App');
  return(<DndProvider backend={HTML5Backend}>  <ShipBoard   /> </DndProvider>);
}

export default App;

