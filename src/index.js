import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'components/FriendList/friends.json';
import FriendListItem from 'components/FriendList/FriendList';
import transactions from 'components/TransactionHistory/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendListItem friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
