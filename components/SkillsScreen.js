import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SkillsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const combinedData = route.params.combinedData;

    const [mustHaveSkills, setMustHaveSkills] = useState(Array(5).fill(''));
    const [niceToHaveSkills, setNiceToHaveSkills] = useState(Array(5).fill(''));
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
    const [selectedSkillType, setSelectedSkillType] = useState('');

    const itSkillsOptions = [
        "JavaScript", "Python", "Java", "C#", "C++",
        "PHP", "Swift", "Ruby", "TypeScript", "Kotlin",
        "Go", "Rust", "Scala", "Perl", "Haskell",
        "SQL", "Dart", "Groovy", "Lua", "MATLAB"
        // Tilføj flere færdigheder efter behov
    ];

    const handleSelectSkill = (index, type) => {
        setSelectedSkillIndex(index);
        setSelectedSkillType(type);
    };

    const updateSkill = (itemValue) => {
        const updatedSkills = selectedSkillType === 'mustHave' ? [...mustHaveSkills] : [...niceToHaveSkills];
        updatedSkills[selectedSkillIndex] = itemValue;
        selectedSkillType === 'mustHave' ? setMustHaveSkills(updatedSkills) : setNiceToHaveSkills(updatedSkills);
        setSelectedSkillIndex(null);
        setSelectedSkillType('');
    };

    const handleNext = () => {
        const fullData = {
            ...combinedData,
            skills: {
                mustHaveSkills,
                niceToHaveSkills
            }
        };
        navigation.navigate('CandidateProfile', { fullData });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Spitzenklasse</Text>
            <Text style={styles.subHeaderBold}>Must have skills prioritized</Text>
            {mustHaveSkills.map((skill, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.itemText}>{index + 1}. {skill || `Skill ${index + 1}`}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleSelectSkill(index, 'mustHave')}>
                        <Icon name="keyboard-arrow-down" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
            ))}
            <Text style={styles.subHeaderBold}>Nice to have skills</Text>
            {niceToHaveSkills.map((skill, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.itemText}>{index + 1}. {skill || `Skill ${index + 1}`}</Text>
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
                    {itSkillsOptions.map((skill, idx) => (
                        <Picker.Item key={idx} label={skill} value={skill} />
                    ))}
                </Picker>
            )}
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0A84FF',
        marginBottom: 10,
        textAlign: 'center',
    },
    subHeaderBold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
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
});

export default SkillsScreen;