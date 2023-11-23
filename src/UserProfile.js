// src/UserProfile.js
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {user && (
        <div className="bg-white max-w-md w-full rounded-lg overflow-hidden shadow-lg">
          <img className="w-full h-48 object-cover" src={user.picture.large} alt="User" />
          <div className="p-6">
            <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
            <p className="text-gray-700 text-base">{user.email}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{`${user.location.city}, ${user.location.country}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
