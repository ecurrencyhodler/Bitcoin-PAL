import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'; 
import { faBtc } from '@fortawesome/free-brands-svg-icons'

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

  const UnmatchedResponse = () => (
      <>
          <p>No bitcoin match found. Please consider uploading the relevant document to help train the model.</p>
          <p>We welcome Pull Requests to help make the model better. Here are a few guidelines for submissions:</p>
          <ul>
              <li><b>Bitcoin related:</b> The contribution should be relevant to Bitcoin, its technologies, or related subjects.</li>
              <li><b>Educational or Technical</b>: The content should provide new information, clarify existing concepts, or contain technical details to expand the training data.</li>
              <li><b>Correct</b>: All information provided in the document should be accurate to ensure the model gives correct responses.</li>
              <li><b>Text-based format</b>: The documents must be in a text-based format (like .txt, .docx, .pdf) for them to be understood and processed by the model.</li>
              <li><b>Does Not Exist</b>: The best documents are ones whose subject matter do not currently exist in the source documents.</li>
          </ul>
          <center><a href="https://github.com/ecurrencyhodler/Bitcoin-PAL" className="btn btn-dark" role="button">Submit a PR</a></center>
          <center><p>If your PR is accepted you may be eligible to be paid out in <FontAwesomeIcon icon={faBtc} /> Bitcoin!</p></center>
      </>
  );

  return (
    <div className='app-container'>
      <header className='app-header'>
        <img src="/owl.png" className='app-logo' alt="Owl" />
          <div>
            <h1 className='title'>Bitcoin-PAL</h1>
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
          <FontAwesomeIcon icon={faPaperPlane} />
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
            <h3>Answer:</h3>
            <p>
              {result.answer === 'No bitcoin match found. Please consider uploading the relevant document to help train the model.' 
                ? <UnmatchedResponse /> 
                : result.answer
              }
            </p>
            <h3>Source Documents:</h3>
            <ul>
            { result.source_documents && result.source_documents.map((doc, index) => (
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