import React from 'react'
import Navbar from './Navbar';
import NewInspection from './NewInspection';
import HeaderForm from './newinspection/HeaderForm';
import AudioRecorderCard from './newinspection/AudioCard';
function App(){
  return(
    <div className="container-fluid">
    <Navbar />
    <div className="container py-5 d-flex justify-content-end">
      <NewInspection />
    </div>
    <div className="container">
      <HeaderForm />
      <AudioRecorderCard />
    </div>
    </div>
  );
}
export default App;