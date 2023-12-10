import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExperienceScreen = () => {
    const navigation = useNavigation();
    const [demographyAndExperience, setDemographyAndExperience] = useState({
        deadline: '',
        location: '',
        startDate: '',
        duration: '',
        language: '',
        educationLevel: '',
        experience: '',
    });

    const handleSelect = (field, value) => {
        setDemographyAndExperience({ ...demographyAndExperience, [field]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Demography & Experience</Text>
            <View style={styles.listContainer}>
                {/* Liste over punkter */}
                {Object.entries(demographyAndExperience).map(([key, value], index) => (
                    <View key={key} style={styles.listItem}>
                        <Text style={styles.itemText}>{index + 1}. {key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleSelect(key, 'Example Value')} // Ændre til faktisk funktionalitet
                        >
                            <Text>Select</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={() => navigation.goBack()} />
                <Button title="Next" onPress={() => navigation.navigate('Skills')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    listContainer: {
        marginBottom: 20,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemText: {
        marginRight: 10,
        fontSize: 16,
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#E5E5E5',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ExperienceScreen;