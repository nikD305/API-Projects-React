import React, {useState, useEffect} from 'react';
import './App.css'


function App() {
const [data, setData] = useState([])
const [endPoint, setEndPoint] = useState('')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8e75297c5msh0f90c48ec4ed7cep154f9cjsn736be15a10aa',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

// useEffect(()=>{
// fetchData()
// },[endPoint])



  const fetchData = () =>{
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${endPoint}`, options)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));
  


  }
  

  
 

  
console.log("to display",data)

const submitHandler = (e)=>{
e.preventDefault()

}

  return (


    <div className='app'>


<form onSubmit={submitHandler}>
<input type="text" value={endPoint} onChange={(e)=>setEndPoint(e.target.value)} />
<button type='submit' onClick={()=>fetchData()}>Submit</button>
</form>

{/* Cannot apply .map on object so before applying .map confirm if its object or array but doing console.log , here data is object and data.d is array 

, If you get the error data.map is not a function then you have applied map on object instead of array
*/}

<div className="single">
{data && data.d && data.d.map((movie, index) => {
  return (
    <div key={index} className="movies">
      <img src={movie?.i?.imageUrl} alt="" height={300} />
      <p>{movie.l}</p>
    </div>
  );
})}
</div>
  
   
    </div>




  );
}

export default App;
