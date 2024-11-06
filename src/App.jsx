import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from "firebase/app";


function App() {

  const firebaseConfig = {
      apiKey: "AIzaSyAzMpARNjuQz5swI1xFdHyQjkBKjTU4AlI",
      authDomain: "fridgeflow-1d5bb.firebaseapp.com",
      projectId: "fridgeflow-1d5bb",
      storageBucket: "fridgeflow-1d5bb.firebasestorage.app",
      messagingSenderId: "9635535682",
      appId: "1:9635535682:web:eae4d49ff2926fc059c6db",
      measurementId: "G-1FJ22R6CXM"
    };
  
  const app = initializeApp(firebaseConfig);
  console.log(app);
  



  return (
    <>
      <h1>My App</h1>
      <h2>By breaking code</h2>
    </>
  )
}

export default App
