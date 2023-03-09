import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';

class App extends React.Component{

  state = { friends };

  render (){
    
  return (
    <Wrapper>
      <Title>Friends List</Title>
    {
      this.state.friends.map(friend => <FriendCard {...friend}></FriendCard>)
    }
    </Wrapper>
  );
}
}
export default App;
