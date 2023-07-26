import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import './App.css';

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult(null);
    setLoading(true);
    
    try {
      const response = await axios.post("http://localhost:8000", {
        query: textValue
      });
      
      setResult(response.data);
    } catch(e) {
      console.log(e);
      setResult({error: "There was an error processing the request."});
    }
    
    setLoading(false);
  };
  
  return (
    <div className='app-container'>
      <header className='app-header'>
        <img src="/owl.png" className='app-logo' alt="Owl" />
          <div>
            <h1 className='title'>Bitcoin PAL</h1>
            <h3 className='subtitle'>Personal Assistant for Learning</h3>
          </div>
      </header>
      <form onSubmit={handleSubmit} className='input-form'>
        <input 
          type="text"
          value={textValue}
          onChange={ e => setTextValue(e.target.value) }
          className='input-box'
          placeholder='Ask your Bitcoin question...'
        />
        <button type="submit" className='submit-button'>
          Submit
        </button>
      </form>
      <div className='responses-section'>
      { loading ? (
        <div className='loading-div'>
          <Spinner />
        </div>
      ) : (
        result && (
          <div className='response-div'>
            <h2>Query: {result.query}</h2>
            <h3>Answer:</h3>
            <p>{result.answer}</p>
            <h3>Source Documents:</h3>
            <ul>
            { result.source_documents.map((doc, index) => (
              <li key={index}>
                <h4>Source: {doc.source}</h4>
                <p>{doc.content}</p>
              </li>
            ))}
            </ul>
            <h3>Processing Time: { result.time_taken } seconds</h3>
          </div>
        )
      )}
      </div>
    </div>
  );
};

export default App;