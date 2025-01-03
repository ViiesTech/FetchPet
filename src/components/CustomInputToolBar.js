import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { responsiveHeight, responsiveWidth } from '../utils';
import colors from '../assets/colors';
import SVGIcons from './SVGIcons';
import icons from '../assets/icons';

const CustomInputToolbar = ({ onSend, text, onTextChange }) => {

    const onSendIcon = async () => {
        const newMessage = [
            {
                _id: new Date().getTime(),
                text: text.trim(),
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'hello world',
                },
            },
        ];
        onSend(newMessage);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textInput}>
                <View style={styles.inputView}>
                    <TextInput
                        style={{ color: colors.black }}
                        placeholderTextColor={'grey'}
                        placeholder="Type a message..."
                        value={text}
                        multiline={true}
                        onChangeText={onTextChange}
                    />
                    {text?.length < 1 && (
                        <TouchableOpacity style={{paddingRight: responsiveHeight(1.5)}} onPress={() => onSendIcon()}>
                            <SVGIcons image={icons.attachment} />
                        </TouchableOpacity>
                    )}
                </View>
                {text?.length > 0 && (
                    <TouchableOpacity onPress={() => onSendIcon()}>
                        <SVGIcons image={icons.send} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomInputToolbar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        bottom: responsiveHeight(2),
        paddingVertical: 0,
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(100),
        backgroundColor: colors.toolbar_color,
        padding: responsiveHeight(1),
        paddingHorizontal: responsiveHeight(2),
    },
    inputView: {
        backgroundColor: colors.secondary,
        width: responsiveWidth(82),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: responsiveHeight(5),
        color: colors.black
    }
});
