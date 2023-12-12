import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker'; // Opdateret import

const ExperienceScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [projectData, setProjectData] = useState({ projectName: '' });
    const [demographyAndExperience, setDemographyAndExperience] = useState({
        contractStart: '',
        contractEnd: '',
        location: '',
        language: '',
        educationLevel: '',
        experience: '',
    });

    const [currentField, setCurrentField] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showEducationPicker, setShowEducationPicker] = useState(false);
    const [showExperiencePicker, setShowExperiencePicker] = useState(false);

    useEffect(() => {
        if (route.params?.projectName) {
            setProjectData({ projectName: route.params.projectName });
        }
    }, [route.params?.projectName]);

    const handleSelect = (field) => {
        setCurrentField(field);
        if (field === 'contractStart' || field === 'contractEnd') {
            setShowDatePicker(true);
        } else if (field === 'educationLevel') {
            setShowEducationPicker(true);
            setInputValue(demographyAndExperience.educationLevel);
        } else if (field === 'experience') {
            setShowExperiencePicker(true);
            setInputValue(demographyAndExperience.experience);
        } else {
            setInputValue(demographyAndExperience[field]);
        }
    };

    const handleUpdate = () => {
        setDemographyAndExperience({ ...demographyAndExperience, [currentField]: inputValue });
        setInputValue('');
        setCurrentField('');
        setShowDatePicker(false);
        setShowEducationPicker(false);
        setShowExperiencePicker(false);
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

            {currentField !== '' && currentField !== 'contractStart' && currentField !== 'contractEnd' && (
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

            {/* Modal for Education Level */}
            {showEducationPicker && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showEducationPicker}
                    onRequestClose={() => setShowEducationPicker(false)}>
                    <View style={styles.modalView}>
                        <Picker
                            selectedValue={inputValue}
                            onValueChange={(itemValue) => setInputValue(itemValue)}
                            style={styles.picker}>
                            <Picker.Item label="Bachelor" value="Bachelor" />
                            <Picker.Item label="Master" value="Master" />
                            <Picker.Item label="PhD" value="PhD" />
                        </Picker>
                        <TouchableOpacity style={styles.okButton} onPress={handleUpdate}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}

            {/* Modal for Experience */}
            {showExperiencePicker && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showExperiencePicker}
                    onRequestClose={() => setShowExperiencePicker(false)}>
                    <View style={styles.modalView}>
                        <Picker
                            selectedValue={inputValue}
                            onValueChange={(itemValue) => setInputValue(itemValue)}
                            style={styles.picker}>
                            <Picker.Item label="1-2 years" value="1-2 years" />
                            <Picker.Item label="2-3 years" value="2-3 years" />
                            <Picker.Item label="3-4 years" value="3-4 years" />
                            <Picker.Item label="4-5 years" value="4-5 years" />
                            <Picker.Item label="5+ years" value="5+ years" />
                        </Picker>
                        <TouchableOpacity style={styles.okButton} onPress={handleUpdate}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F0FE',
        padding: 20,
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
    selectedValueText: {
        fontWeight: 'bold',
        color: 'black',
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
    modalView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        width: '100%',
        height: 150,
    },
    okButton: {
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
});

export default ExperienceScreen;