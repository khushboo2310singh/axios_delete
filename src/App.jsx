import React from 'react'
import "./App.css"
import axios from 'axios'
const App = () => {
    const handleclick=()=>{
        axios.delete("https://65c11d2ddc74300bce8d561c.mockapi.io/users/2")
        .then(response=>{
            console.log(response.data);
            console.log("Data has been deleted");

        })
         .catch(error=>{
            console.log(error);
         });   
    }
  return (
    <>
    <h2>Delete data from database by clicking button</h2>
    <div className='App mt-5'>
        <input type="button"  value="Delete" onClick={handleclick} className='m-4' />
       
    </div>
    </>
  )
}

export default App