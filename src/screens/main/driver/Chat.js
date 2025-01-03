import { StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import MapHeader from '../../../components/MapHeader'
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import CustomInputToolBar from '../../../components/CustomInputToolBar';
import colors from '../../../assets/colors';
import { responsiveHeight } from '../../../utils';

const Chat = ({route}) => {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')

  const Name = route?.params?.name

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Let me know when reached",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any"
        }
      }
    ])
  }, [])

  const onSend = useCallback(async (newMessage = []) => {
    setMessages(previousState => GiftedChat.append(previousState, newMessage));
    setText('')
  }, []);

  return (
    <View style={styles.container}>
      <MapHeader headerText={Name} />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderInputToolbar={props => (
          <CustomInputToolBar
            {...props}
            text={text}
            onTextChange={text => setText(text)}
            onSend={data => onSend(data)}
          />
        )}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: colors.primary,
                  borderRadius: 15,
                  marginBottom: 10,
                  maxWidth: responsiveHeight(30),
                  minWidth: responsiveHeight(2),
                  padding: 5,
                  top: -responsiveHeight(1),
                  right: responsiveHeight(0.7)
                },
                left: {
                  backgroundColor: colors.bubble_color,
                  borderRadius: 15,
                  maxWidth: responsiveHeight(30),
                  minWidth: responsiveHeight(2),
                  marginBottom: 20,
                  padding: 5,
                  top: -responsiveHeight(0.5),
                  left: -responsiveHeight(4),
                },
              }}
              textStyle={{
                right: {
                  color: colors.secondary,
                },
                left: {
                  color: colors.secondary,
                },
              }}
              timeTextStyle={{
                right: {
                  color: colors.secondary,
                },
                left: {
                  color: colors.secondary,
                },
              }}
            />
          );
        }}
        user={{
          _id: 1
        }}
      />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
})