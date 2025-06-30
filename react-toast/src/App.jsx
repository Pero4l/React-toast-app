import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  function info (){

    toast.info("This is an info toast!");

    toast.error("This is a error")

  }
  

  const notify = () => toast.info("🦄 Wow! This is a toast!");

  return (
    <div>
      <button onClick={info}>Show Toast</button>

      {/* Must include ToastContainer to display toasts */}
      <ToastContainer />
    </div>
  );
}

export default App;