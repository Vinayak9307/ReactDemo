import React, { useState } from 'react';

const Delete = () => {
  const [shareId, setShareId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {

  };

  return (
    <div>
      <h2>Delete Share</h2>
      <input
        type="text"
        placeholder="Enter Share ID"
        value={shareId}
        onChange={(e) => setShareId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Share</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Delete;