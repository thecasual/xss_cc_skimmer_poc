import React from 'react';
import './App.css';
import Form from './form';
import queryString from "query-string";

function App() {
  const parsed = queryString.parse(window.location.search);
  const content = parsed.name;
  const html = '<div><h1>Hello, world!</h1></div>';
  return (
    <><div dangerouslySetInnerHTML={{ __html: content }}>

    </div><div><Form></Form></div></>)
}

export default App;
