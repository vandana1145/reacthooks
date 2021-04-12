import React, {useEffect, useState} from 'react'
import useCustomCounter from './Custom'

// //useState functionality
// function App(params) {
//   const [name, setname] = useState("You are awesome!")
//   const [place, setplace] = useState("Planet")
//   const handleClick = () => {
//     setname("You are fantastic.");
//     setplace("Earth");
//   };
//   return(
//     <React.Fragment>
//       <h1>{name}</h1>
//       <h2>{place}</h2>
//       <button type="submit" onClick={handleClick}>Know Yourself</button>
//     </React.Fragment>
//   )
// }

// //useEffect functionality
// function App(){
//   const [countUp, setcountUp] = useState(0)
//   const [countDown, setcountDown] = useState(50)

//   const handleIncrement = () => {
//     setcountUp(countUp + 1);
//   }

//   const handleDecrement = () => {
//     setcountDown(countDown - 1);
//   }

//   useEffect(()=>{
//     console.log("Use effect Called!")
//   }, [countDown])

//   return(
//     <React.Fragment>
//       <h1>Count Up: {countUp}</h1>
//       <button type="submit" onClick={handleIncrement}>RaiseMeUp</button>
//       <br/>
//       <br/>
//       <h1>Count Down: {countDown}</h1>
//       <button type="submit" onClick={handleDecrement}>CountMeDown</button>
//     </React.Fragment>
//   )
// }

// Custom hooks
function App(params) {
  const num = useCustomCounter();
  const num1 = useCustomCounter();

  return (
    <React.Fragment>
      <h1>Count Up: {num.count}</h1>
      <button type="submit" onClick={num.handleCount}>ClickMe</button>

      <h1>Count Up: {num1.count}</h1>
      <button type="submit" onClick={num1.handleCount}>ClickMe</button>
    </React.Fragment>
  );
}


export default App;