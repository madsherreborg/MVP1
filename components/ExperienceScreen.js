import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ExperienceScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const projectData = route.params.projectData; // Modtaget data fra CreateProjectScreen

    const [demographyAndExperience, setDemographyAndExperience] = useState({
        startDate: '',
        deadline: '',
        location: '',
        language: '',
        educationLevel: '',
        experience: '',
    });

    const [currentField, setCurrentField] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleSelect = (field) => {
        setCurrentField(field);
        if (field === 'startDate' || field === 'deadline') {
            setShowDatePicker(true);
        } else {
            setInputValue(demographyAndExperience[field]); // Sæt nuværende værdi for at redigere
        }
    };

    const handleUpdate = () => {
        setDemographyAndExperience({ ...demographyAndExperience, [currentField]: inputValue });
        setInputValue(''); // Nulstil inputValue
        setCurrentField(''); // Nulstil currentField
        setShowDatePicker(false);
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || demographyAndExperience[currentField];
        setShowDatePicker(Platform.OS === 'ios');
        setDemographyAndExperience({ ...demographyAndExperience, [currentField]: currentDate.toISOString().split('T')[0] });
    };

    const handleNext = () => {
        const combinedData = {
            ...projectData,
            demographyAndExperience
        };
        navigation.navigate('Skills', { combinedData });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Demography & Experience</Text>

            {currentField !== '' && currentField !== 'startDate' && currentField !== 'deadline' && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder={`Enter ${currentField}`}
                    />
                    <Button title="Update" onPress={handleUpdate} />
                </View>
            )}

            {showDatePicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date(demographyAndExperience[currentField] || new Date())}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            )}

            <View style={styles.listContainer}>
                {Object.entries(demographyAndExperience).map(([key, value], index) => (
                    <View key={key} style={styles.listItem}>
                        <Text style={styles.itemText}>{index + 1}. {key.charAt(0).toUpperCase() + key.slice(1)}: {value}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleSelect(key)}
                        >
                            <Text>Select</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={() => navigation.goBack()} />
                <Button title="Next" onPress={handleNext} />
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
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ExperienceScreen;