import { useState, useEffect } from 'react';

const useGetShares = () => {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShares = async () => {
      try {
        const response = await fetch('http://localhost:8080/shares'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setShares(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchShares();
  }, []);

  return { shares, loading, error };
};

export default useGetShares;