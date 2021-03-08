import {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from '../../src/components/ChatFeed'

const App= ()=>{
  return (
    <ChatEngine
      height="100vh"
      projectID="5dc467d6-c72c-42fb-b697-ba2e1c940d9f"
      userName="bcoleman"
      userSecret="12341234"
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
      />
  )
}


export default App;
