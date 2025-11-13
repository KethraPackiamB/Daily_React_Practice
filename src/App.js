import logo from './logo.svg';
import './App.css';
import {Demo} from "./Demo";
import { DemoProps } from './PropsConcept/DemoProps';
import { ChildComponent } from './PropsConcept/ChildComponent';
import { UserStateConcept } from './Learning/UseStateConcept';
import { CallingAPI } from './Practicing/CallingAPI';

function App() {
  return (
   <div>
    {/* <Demo/> */}
    {/* <DemoProps/> */}
    {/* <UserStateConcept/> */}
    <CallingAPI/>
   </div>
  );
}

export default App;
