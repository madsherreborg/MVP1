import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Husk at importere ikonet

const ContactScreen = ({ route }) => {
    const { consultant } = route.params;
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        if (message.trim().length > 0) {
            setMessages([...messages, { text: message, sender: 'user' }]);
            setMessage('');
        }
    };

    const isUserMessage = (msg) => msg.sender === 'user';

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{consultant.name}</Text>

            <ScrollView style={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <View key={index} style={[styles.message, isUserMessage(msg) ? styles.userMessage : styles.otherMessage]}>
                        <Text>{msg.text}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type a message..."
                />
                <TouchableOpacity onPress={sendMessage}>
                    <Icon name="send" size={24} color="#0A84FF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#E8F0FE', // Brug samme baggrundsfarve som CvListeScreen
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#0A84FF', // Spitzenklasse blå
    },
    messagesContainer: {
        flex: 1,
        marginBottom: 10,
    },
    message: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    userMessage: {
        backgroundColor: '#0A84FF', // Spitzenklasse blå
        alignSelf: 'flex-end',
        color: 'white',
    },
    otherMessage: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    // Yderligere stilarter efter behov
});

export default ContactScreen;