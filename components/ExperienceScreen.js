import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, Modal, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const ExperienceScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [projectData, setProjectData] = useState({ projectName: '' });
    const [demographyAndExperience, setDemographyAndExperience] = useState({
        contractStart: '',
        contractEnd: '',
        Adresse: '',
        language: '',
        educationLevel: '',
        experience: '',
        wageRange: [100, 1000],
        urgency: '', // Tilføjet urgency til state
    });

    const [currentField, setCurrentField] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showEducationPicker, setShowEducationPicker] = useState(false);
    const [showExperiencePicker, setShowExperiencePicker] = useState(false);
    const [showUrgencyPicker, setShowUrgencyPicker] = useState(false); // Tilføjet for urgency

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
        } else if (field === 'urgency') {
            setShowUrgencyPicker(true); // Viser urgency picker
            setInputValue(demographyAndExperience.urgency);
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
        setShowUrgencyPicker(false); // Lukker urgency picker
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || demographyAndExperience[currentField];
        setShowDatePicker(Platform.OS === 'ios');
        setDemographyAndExperience({ ...demographyAndExperience, [currentField]: currentDate.toISOString().split('T')[0] });
    };

    const handleWageChange = (values) => {
        setDemographyAndExperience({ ...demographyAndExperience, wageRange: values });
    };

    const handleNext = () => {
        const combinedData = {
            ...projectData,
            demographyAndExperience
        };
        navigation.navigate('Skills', { combinedData });
    };

    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.header}>Spitzenklasse</Text>
                <Text style={styles.subHeader}>Demography & Experience</Text>

                {/* Input og Opdateringsknap */}
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

                {/* DatePicker */}
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date(demographyAndExperience[currentField] || new Date())}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                    />
                )}

                {/* Liste af felter */}
                <View style={styles.listContainer}>
                    {Object.entries(demographyAndExperience).map(([key, value], index) => (
                        <View key={key} style={styles.listItem}>
                            <Text style={styles.itemText}>{index + 1}. {key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
                            <TouchableOpacity
                                style={styles.selectButton}
                                onPress={() => handleSelect(key)}
                            >
                                <Text style={[styles.buttonText, value ? styles.selectedValueText : null]}>
                                    {key === 'wageRange' ? `${value[0]} - ${value[1]} kr/hr` : value || 'Select'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Education Picker */}
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

                {/* Experience Picker */}
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

                {/* Urgency Picker */}
                {showUrgencyPicker && (
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showUrgencyPicker}
                        onRequestClose={() => setShowUrgencyPicker(false)}>
                        <View style={styles.modalView}>
                            <Picker
                                selectedValue={inputValue}
                                onValueChange={(itemValue) => setInputValue(itemValue)}
                                style={styles.picker}>
                                <Picker.Item label="Low (10 days)" value="Low" />
                                <Picker.Item label="Medium (5 days)" value="Medium" />
                                <Picker.Item label="High (24 hours)" value="High" />
                            </Picker>
                            <TouchableOpacity style={styles.okButton} onPress={handleUpdate}>
                                <Text style={styles.buttonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                )}

                {/* Lønområde MultiSlider */}
                <View style={styles.sliderContainer}>
                    <Text style={styles.subHeader}>Wage/hour</Text>
                    <MultiSlider
                        values={demographyAndExperience.wageRange}
                        sliderLength={280}
                        onValuesChange={handleWageChange}
                        min={100}
                        max={3000}
                        step={1}
                    />
                    <Text>Wage Range: {demographyAndExperience.wageRange[0]} - {demographyAndExperience.wageRange[1]} kr/hr</Text>
                </View>

                {/* Næste og Forrige knapper */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.prevButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Icon name="arrow-forward" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
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
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
        fontWeight: 'bold', // Gør teksten fed
        color: '#0A84FF', // Sætter teksten til sort
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
        fontWeight: 'bold', // Gør teksten fed
        color: 'black', // Sætter teksten til sort
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: 'black',
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
    sliderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    wageText: { // Ny style for teksten under slideren
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
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
    // Yderligere styles for dine inputfelter, knapper, modaler osv.
});

export default ExperienceScreen;