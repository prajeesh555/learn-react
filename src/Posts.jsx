import React, { useState } from 'react';
import axios from 'axios';

function PostExample() {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 1
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea 
            name="body" 
            value={formData.body} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PostExample;