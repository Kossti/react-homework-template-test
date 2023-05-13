import { useState, useEffect } from 'react';

// import React, { Component } from 'react';

export const App = () => {
  // 1. Run effect only on mount to init some library
  useEffect(() => {
    initThirdPartyLibrary();
  }, []);

  // 2. Run effect only when username prop changes
  useEffect(() => {
    fetchUser(username);
  }, [username]);

  // 3. Run effect on value prop change
  useEffect(() => {
    // Do stuff when value prop changes
  }, [value]);

  // 4. Run effect on isLoggedIn state change
  useEffect(() => {
    // Do stuff when isLoggedIn state changes
  }, [isLoggedIn]);

  // 5. Run effect on mount and clean up on unmount
  useEffect(() => {
    const handleKeyDown = e => console.log('keydown event: ', e);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

// export class App extends Component {
//   handleKeyDown = e => {
//     console.log('keydown event: ', e);
//   };

//   componentDidMount() {
//     initThirdPartyLibrary();
//     document.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.value !== this.props.value) {
//       // Do stuff when value changes
//     }

//     if (prevState.isLoggedIn !== this.state.isLoggedIn) {
//       // Do stuff when isLoggedIn state changes
//     }

//     if (prevProps.username !== this.props.username) {
//       // Fetch user when username prop changes
//       fetchUser(this.props.username);
//     }
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown);
//   }

//   render() {
//     return <div>App</div>;
//   }
// }

// export const App = () => {
//   useEffect(() => {
//     console.log('Mounting phase: same when componentDidMount runs');
//     return () => {
//       console.log('Unmounting phase: same when componentWillUnmount runs');
//     };
//   }, []);
//   return null;
// };

// export const App = () => {
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);

//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue, secondValue]);
//   return (
//     <div>
//       <button onClick={() => setFirstValue(firstValue + 1)}>
//         First {firstValue}
//       </button>
//       <button onClick={() => setSecondValue(secondValue + 1)}>
//         Second {secondValue}
//       </button>
//     </div>
//   );
// };

// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log(value);
//     console.log('Updating phase: same when componentDidUpdate runs');
//   }, [value]);
//   return (
//     <div>
//       <button onClick={() => setValue(value + 1)}>{value}</button>
//     </div>
//   );
// };

// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Mountinf phase: same when componentDidMount runs');
//   }, []);
//   return (
//     <div>
//       <button onClick={() => setValue(value + 1)}>{value}</button>
//     </div>
//   );
// };

// export const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.titel = `You clicked ${value} times`;
//   });
//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </div>
//   );
// };

// import { useState } from 'react';

// export const App = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       {value}
//       <button type="button" onClick={() => setValue(value + 1)}>
//         Increment value by 1
//       </button>
//     </div>
//   );
// };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
