import React, { useState } from "react";
import axios from 'axios';

function Comments() {
  const [formData, setFormData] = useState({
    postId: 1,
    name: '',
    email: '',
    body: ''
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
      const res = await axios.post('https://jsonplaceholder.typicode.com/comments', formData);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Post Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea 
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Comment</button>
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

export default Comments;
