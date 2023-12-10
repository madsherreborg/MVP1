import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const ContactScreen = ({ route }) => {
    const { consultant } = route.params;
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        if (message.trim().length > 0) {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{consultant.name}</Text>

            <ScrollView style={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <Text key={index} style={styles.message}>{msg}</Text>
                ))}
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type a message..."
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    messagesContainer: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#f0f0f0', // Let baggrundsfarve
    },
    message: {
        margin: 5,
        padding: 10,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        borderRadius: 10,
        maxWidth: '80%',
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