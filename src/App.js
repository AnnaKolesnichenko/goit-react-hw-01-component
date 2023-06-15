import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import Transactions from './components/Transactions/Transactions';

import './App.css';
import user from './db/user.json'
import data from './db/data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        avatar={user.avatar} 
        stats={user.stats}
      />

      <Statistics 
        title="Upload Stats"
        stats={data}
      />

      <FriendsList 
        friends={friends}
      />

      <Transactions 
        items={transactions}
      />
    </div>
  );
}

export default App;
