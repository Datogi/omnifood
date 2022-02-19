import React, {useState} from 'react'
const api = {
  key: "b0a6020532b4b46f77a2417902fddd0e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  return (
  <header className='bg-hero bg-cover bg-center h-screen bg-fixed'>
      <div className=''>
      <img src="logo-white.png" alt="Omnifood logo" class="w-24 h-auto"/>
      <ul className="float-right -mt-10 mr-10">
      <li className='inline-block ml-10 text-white text-xl'>Food delivery</li>
      <li className='inline-block ml-10 text-white text-xl'>How it works</li>
      <li className='inline-block ml-10 text-white text-xl'>Our cities</li>
      <li className='inline-block ml-10 text-white text-xl'>Sign up</li>
      </ul>
      </div>
    <div class="absolute w-4/6 top-1/2 ml-20 ">
      <h1 className='uppercase mb-5 text-white text-5xl text-left '>Goodbye junk food.<br/>Hello super healthy meals.</h1>
      <button class="mr-8 border-2 border-orange-400 bg-orange-400 p-2 w-40 text-lg hover:text-white hover:bg-orange-500 hover:border-orange-500 rounded-full h-auto" >I’m hungry</button>
      <button class="border-2 border-orange-400 hover:bg-orange-400 p-2 w-40 text-lg hover:text-white rounded-full h-auto">Show me more</button>
    </div>
  </header>
  );
}

export default App;
