import React, { useState } from 'react';

const Update = () => {
  const [shareId, setShareId] = useState('');
  const [shareData, setShareData] = useState({
    name: '',
    value: '',
  });

  const handleInputChange = (e) => {
  };

  const handleSubmit = (e) => {

  };

  return (
    <div>
      <h2>Update Share</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Share ID:
            <input
              type="text"
              value={shareId}
              onChange={(e) => setShareId(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={shareData.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Value:
            <input
              type="number"
              name="value"
              value={shareData.value}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Update Share</button>
      </form>
    </div>
  );
};

export default Update;