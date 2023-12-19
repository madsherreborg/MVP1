import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

const SkillsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const combinedData = route.params.combinedData;

    const [mustHaveSkills, setMustHaveSkills] = useState(Array(3).fill(''));
    const [niceToHaveSkills, setNiceToHaveSkills] = useState(Array(3).fill(''));
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
    const [selectedSkillType, setSelectedSkillType] = useState('');
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const [category, setCategory] = useState('');
    const [isCategoryPickerVisible, setIsCategoryPickerVisible] = useState(false);

    const itSkillsOptions = ["JavaScript", "Python", "Java", "C#", "C++", "PHP"];
    const industryKnowledgeOptions = ["Biotech/Medtech", "Bygge- og Anlæg", "Design og Møbelindustri", "Energi", "IT & Kommunikation", "Landbrug", "Maritin", "Transport", "Logistik", "Finansielle Sektor"];
    const categoryOptions = ["Cloud Computing", "Business Intelligence", "Salesforce Cloud", "Cyber Security", "Coding", "Software Development", "UI/UX Design", "Data Management"];

    const handleSelectSkill = (index, type) => {
        setSelectedSkillIndex(index);
        setSelectedSkillType(type);
        setIsPickerVisible(index !== null);
    };

    const updateSkill = (itemValue) => {
        const updatedSkills = selectedSkillType === 'mustHave' ? [...mustHaveSkills] : [...niceToHaveSkills];
        updatedSkills[selectedSkillIndex] = itemValue;
        selectedSkillType === 'mustHave' ? setMustHaveSkills(updatedSkills) : setNiceToHaveSkills(updatedSkills);
        setSelectedSkillIndex(null);
        setSelectedSkillType('');
        setIsPickerVisible(false);
    };

    const handleNext = () => {
        const fullData = {
            ...combinedData,
            category,
            skills: {
                mustHaveSkills,
                niceToHaveSkills
            }
        };
        navigation.navigate('CandidateProfile', { fullData });
    };

    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Spitzenklasse</Text>

                <TouchableOpacity style={styles.selectButton} onPress={() => setIsCategoryPickerVisible(true)}>
                    <Text style={styles.selectButtonText}>{category || "Select Category"}</Text>
                    <Icon name="keyboard-arrow-down" size={20} color="#0A84FF" style={styles.selectButtonIcon} />
                </TouchableOpacity>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isCategoryPickerVisible}
                    onRequestClose={() => setIsCategoryPickerVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={category}
                                onValueChange={(itemValue) => setCategory(itemValue)}
                                style={{ width: '100%' }}>
                                {categoryOptions.map((option, idx) => (
                                    <Picker.Item key={idx} label={option} value={option} />
                                ))}
                            </Picker>
                            <TouchableOpacity style={styles.doneButton} onPress={() => setIsCategoryPickerVisible(false)}>
                                <Text style={styles.doneButtonText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Text style={styles.subHeaderBold}>Must have skills prioritized</Text>
                {mustHaveSkills.map((skill, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={skill ? styles.itemTextBold : styles.itemText}>
                            {index + 1}. {skill || `Skill ${index + 1}`}
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleSelectSkill(index, 'mustHave')}>
                            <Icon name="keyboard-arrow-down" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                ))}

                <Text style={styles.subHeaderBold}>Industry Knowledge</Text>
                {niceToHaveSkills.map((skill, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={skill ? styles.itemTextBold : styles.itemText}>
                            {index + 1}. {skill || `Skill ${index + 1}`}
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleSelectSkill(index, 'niceToHave')}>
                            <Icon name="keyboard-arrow-down" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                ))}

                {selectedSkillIndex !== null && (
                    <Picker
                        selectedValue={selectedSkillType === 'mustHave' ? mustHaveSkills[selectedSkillIndex] : niceToHaveSkills[selectedSkillIndex]}
                        style={styles.picker}
                        onValueChange={(itemValue) => updateSkill(itemValue)}>
                        {(selectedSkillType === 'mustHave' ? itSkillsOptions : industryKnowledgeOptions).map((skill, idx) => (
                            <Picker.Item key={idx} label={skill} value={skill} />
                        ))}
                    </Picker>
                )}

                <View style={[styles.buttonContainer, { marginTop: isPickerVisible ? 40 : 20 }]}>
                    <TouchableOpacity style={styles.prevButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Icon name="arrow-forward" size={24} color="#FFF" />
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
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0A84FF',
        marginBottom: 10,
        textAlign: 'center',
    },
    selectButton: {
        height: 40,
        backgroundColor: '#FFF',
        borderColor: '#0A84FF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectButtonText: {
        fontSize: 16,
        color: '#0A84FF',
        marginRight: 200, // Tilføj margin til højre for at skabe afstand mellem tekst og ikon
    },
    selectButtonIcon: {
        // Yderligere styling for ikonet, hvis nødvendigt
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pickerContainer: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    doneButton: {
        backgroundColor: '#0A84FF',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 10,
    },
    doneButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subHeaderBold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A84FF',
        marginBottom: 10,
        textAlign: 'center', // Tilføj denne linje for at centrere teksten
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    itemText: {
        flex: 1,
        fontSize: 16,
    },
    itemTextBold: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0A84FF'
    },
    button: {
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: '100%',
        height: 180,
        backgroundColor: '#FFF',
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
    // Eventuelle yderligere styles kan tilføjes her
});

export default SkillsScreen;