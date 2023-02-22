import React, {FunctionComponent, useState } from 'react';
import "./styles/App.css";


const App: FunctionComponent = () => {
  const [name, setName] = useState<String>('React')

  return(
    <div>Hello, {name} !!</div>
  )
}

export default App;
