import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/authHelpers';

const BrandDashboard = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    // Example: call Profile Service to get influencer list
    axios.get('http://localhost:5001/api/profile/influencers', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
    .then((res) => {
      setInfluencers(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <h1>Brand Dashboard</h1>
      <h2>Search & Discover Influencers</h2>
      {/* Possibly a search form, filter by niche, etc. */}
      <ul>
        {influencers.map((inf) => (
          <li key={inf.id}>
            {inf.username} - {inf.followerCount} followers
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandDashboard;
 