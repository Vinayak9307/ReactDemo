import React from 'react';
import useGetShares from '../hooks/useGetShares';

const GetAllShares = () => {
  const { shares, loading, error } = useGetShares();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching shares: {error.message}</p>;

  return (
    <div>
      <h2>All Shares</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Issue date</th>
          </tr>
        </thead>
        <tbody>
          {shares.map(share => (
            <tr key={share.shareId}>
              <td>{share.shareId}</td>
              <td>{share.shareName}</td>
              <td>{share.market_price}</td>
              <td>{share.issueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllShares;