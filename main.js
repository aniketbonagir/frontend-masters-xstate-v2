import './style.css';
// import { createMachine } from 'xstate';


function transition(state, event) {
  switch(event.type) {
    case "FETCH":
      console.log("Starting to fetch Data");
      break;
    default:
      break;
  }
}
  
window.transition = transition;