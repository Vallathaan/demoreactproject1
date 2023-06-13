
// function App() {
//   // console.log('hello from component');

//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   console.log(now, a + b);
  

//   return (
//   <div>
//     <P>
//       Hello world, it is {now.toString()}
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </P>
//   </div>
//   );
// }

// export default App

import React from 'react'

function Hello(){
  return(
    <div><p>
      Hello {props.name},you are {props.age} years old!</p>
    
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>
        greetings
      </h1>
        <HEllo name='ashok' age={10+20} />
        <Hello name='vallathan' age={ age } />
      <p>
        Hello World
      </p>
    </div>
  )
}

export default App