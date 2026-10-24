import { useParams } from "react-router-dom";

const chat = () => {
  const param = useParams();

  console.log(param.chatId);

    return (
      <div>Chat</div>
    )
}


export default Chat;