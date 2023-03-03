import React, {useState} from 'react';
import {Arrays} from './myComponentes/Arrays';


function App() {



  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a8e75297c5msh0f90c48ec4ed7cep154f9cjsn736be15a10aa',
      'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
    },
    body: JSON.stringify({"query":"what is youttube?"})
  };
  
  fetch('https://chatgpt-ai-chat-bot.p.rapidapi.com/ask', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (


    <>


    
    
    <Arrays/>
    </>




  );
}

export default App;
