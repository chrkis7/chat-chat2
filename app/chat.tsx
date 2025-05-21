import { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  }, [])

  return (
    <GiftedChat
        messages={messages}
        onSend={messages => handleSend(messages)}
        user={{ _id: 1 }}
        isKeyboardInternallyHandled={false} // Needed for Android
    />
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
})