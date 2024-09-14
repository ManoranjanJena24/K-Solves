import React from 'react';
import UserList from '../components/UserList';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center text-4xl p-6 font-bold">MERN App</h1>
      <UserList />
    </div>
  );
};

export default HomePage;
