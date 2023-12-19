import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                {/* Updated to display the firm's name instead of the consultant's name */}
                <Text style={styles.header}>{consultant.company}</Text>

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
                        placeholderTextColor="#0A84FF"
                        selectionColor="#0A84FF"
                    />
                    <TouchableOpacity onPress={sendMessage}>
                        <Icon name="send" size={24} color="#0A84FF" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Let gennemsigtig baggrund for at tillade billedet at skinne igennem
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#0A84FF',
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
        color: '#0A84FF', // Blå farve til inputteksten
    },
    // Yderligere stilarter efter behov
});

export default ContactScreen;