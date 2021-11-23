import React from 'react';
import { useState } from 'react';
import './App.css';
import { UserForm } from './Components/UserForm';
import UserTable from './Components/UserTable';
// import Clear from './Components/clear'



const getLocalData = () => {
  let data = localStorage.getItem( 'userData' )
  if ( data ) {
    return JSON.parse(localStorage.getItem('userData'))
  } else {
    return []
  }
}
function App() {
  const [userFormData, setuserFormData] = useState( getLocalData() );
  const getUserFormData = (userData) => {
    const userFormDataCopy = [...userFormData];
    userFormDataCopy.push( userData );
    setuserFormData( userFormDataCopy );
    localStorage.setItem('userData',JSON.stringify(userFormDataCopy))
  }
  return (
    <div className="App">
      <UserForm getUserFormData={ getUserFormData } />
      <UserTable userFormData={ userFormData}/>
    </div>
  );
}

export default App;
