import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExperienceScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const projectData = route.params.projectData;

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
            setInputValue(demographyAndExperience[field]);
        }
    };

    const handleUpdate = () => {
        setDemographyAndExperience({ ...demographyAndExperience, [currentField]: inputValue });
        setInputValue('');
        setCurrentField('');
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
            <Text style={styles.header}>Spitzenklasse</Text>
            <Text style={styles.subHeader}>Demography & Experience</Text>

            {currentField !== '' && currentField !== 'startDate' && currentField !== 'deadline' && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder={`Enter ${currentField}`}
                    />
                    <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                        <Icon name="update" size={24} color="#FFF" />
                    </TouchableOpacity>
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
                        <Text style={styles.itemText}>{index + 1}. {key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
                        <TouchableOpacity style={styles.selectButton} onPress={() => handleSelect(key)}>
                            <Text style={[styles.buttonText, value ? styles.selectedValueText : null]}>{value || 'Select'}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.prevButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Icon name="arrow-forward" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F0FE',
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0A84FF',
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
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
        flex: 1,
        marginRight: 10,
        fontSize: 16,
    },
    selectButton: {
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#0A84FF',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    updateButton: {
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    prevButton: {
        backgroundColor: '#0A84FF',
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#0A84FF',
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedValueText: {
        fontWeight: 'bold',
        color: 'black', // Sort tekst for valgte værdier
    },
});

export default ExperienceScreen;