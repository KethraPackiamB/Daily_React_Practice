import logo from './logo.svg';
import './App.css';

import { CallingAPI } from './Practicing/CallingAPI';
import { ParentComponent } from './PropsConcept/ParentComponent';
import { Component1 } from './UseContectConcept/Component1';
import { DemoA } from './UseContectConcept/DemoA';
import { UserProfiles } from './SingleResponsibilityPrinciple/UserProfiles';


function App() {
  return (
   <div>
   {/* <CallingAPI/> */}
   {/* <ParentComponent/> */}
   {/* <Component1/> */}
   {/* <DemoA/> */}
  <UserProfiles/>
   </div>
  );
}

export default App;
