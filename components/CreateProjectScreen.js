import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateProjectScreen = () => {
    const [projectData, setProjectData] = useState({
        name: '',
        description: '',
        // Tilføj yderligere projekt felter efter behov
    });

    const navigation = useNavigation();

    const handleNext = () => {
        // Tilføj eventuel validering af data her, hvis nødvendigt
        navigation.navigate('Experience', { projectData }); // Send data til ExperienceScreen
    };

    const handleInputChange = (name, value) => {
        setProjectData({ ...projectData, [name]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Spitzenklasse</Text>

            <Text style={styles.label}>Assignment name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Assignment name"
                onChangeText={(text) => handleInputChange('name', text)}
                value={projectData.name}
            />
            <Text style={styles.label}>Short description:</Text>
            <TextInput
                style={styles.textArea}
                placeholder="Assignment description"
                onChangeText={(text) => handleInputChange('description', text)}
                value={projectData.description}
                multiline
            />
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Icon name="arrow-forward" size={24} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F0FE', // En lys blå farve
        padding: 20,
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
        marginBottom: 10,
        padding: 10,
    },
    textArea: {
        backgroundColor: '#FFF',
        borderColor: '#0A84FF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        minHeight: 100,
        textAlignVertical: 'top',
    },
    label: {
        fontSize: 16,
        color: '#333333',
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
    },
});

export default CreateProjectScreen;