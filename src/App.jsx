import { useEffect, useState } from 'react';
import './index.css';


function App() {
  const [latitude,setLatitude] = useState(45)
  const [longiture,setLongitude] = useState(60)

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }else {
      console.log("not supported")
    }
  })

  return (
    <div className="App">
      <h1>Weather app</h1>
    </div>
  );
}

export default App;
