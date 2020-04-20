import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = React.useState(0);

  return ( 
    <div>
      <h1>Hello from React {count}</h1>
  <button onClick={() => setCount(count +1)} >Click ME</button>
    </div>
  );
}
 
ReactDOM.render(<App/>, document.getElementById('app'));