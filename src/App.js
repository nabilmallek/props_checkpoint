import React from 'react'
import FullName from './Profile/components/FullName';
import Bio from './Profile/components/Bio';
import Profession from './Profile/components/Profession';
import Photo from './Profile/components/Photo';
function App() {
  return (
    <div style={{backgroundColor:'grey'}}>
      <FullName name="lio messi"/>
      <Bio country ="an argentina"/>
      <Profession job="football plyer"/>
      <Photo><img src={"/messi.jpg"} alt="" /> </Photo>
    </div>
  );
}

export default App;
