import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, Modal, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateProjectScreen = () => {
    const [projectName, setProjectName] = useState('');
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate('Experience', { projectName: projectName });
    };

    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <View style={styles.container}>


                <Text style={styles.header}>Spitzenklasse</Text>

                <Text style={styles.label}>Assignment name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Assignment name"
                    onChangeText={setProjectName}
                    value={projectName}
                />

                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Icon name="arrow-forward" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
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
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Let translucent for the background image to show through
        padding: 20,
    },
    logo: {
        height: 100, // Adjust as per your logo's aspect ratio
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0A84FF',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        backgroundColor: '#FFF',
        borderColor: '#0A84FF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        color: '#0A84FF', // Samme blå farve som anvendt i styles.header
        fontWeight: 'bold', // Gør teksten fed
        marginBottom: 5,

    },
    nextButton: {
        backgroundColor: '#0A84FF',
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});

export default CreateProjectScreen;