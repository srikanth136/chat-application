import {ChatEngine} from 'react-chat-engine';

 import  ChatFeed  from './components/ChatFeed';
 import LoginForm from './components/LoginForm';
 import './App.css';
 const projectID="dda6a29f-96a0-42b3-b301-210f61c350af"

 const App =() => {
     if(!localStorage.getItem('username')) return <LoginForm />


    return(
        <ChatEngine
            height = '100vh'
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

        />
  );
};

export default App;