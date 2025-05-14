import { useState } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  return (
    <View>
        <GiftedChat messages={messages} />
    </View>
  );
}

export default ChatScreen