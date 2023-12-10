import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
            <Text style={styles.label}>Projektnavn:</Text>
            <TextInput
                style={styles.input}
                placeholder="Assignment name"
                onChangeText={(text) => handleInputChange('name', text)}
                value={projectData.name}
            />
            <Text style={styles.label}>Beskrivelse:</Text>
            <TextInput
                style={styles.input}
                placeholder="Assignment description"
                onChangeText={(text) => handleInputChange('description', text)}
                value={projectData.description}
                multiline
            />
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default CreateProjectScreen;