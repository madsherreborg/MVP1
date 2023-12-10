import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

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
        if (selectedSkillType === 'mustHave') {
            const updatedSkills = [...mustHaveSkills];
            updatedSkills[selectedSkillIndex] = itemValue;
            setMustHaveSkills(updatedSkills);
        } else {
            const updatedSkills = [...niceToHaveSkills];
            updatedSkills[selectedSkillIndex] = itemValue;
            setNiceToHaveSkills(updatedSkills);
        }
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
            <Text style={styles.header}>Profile Title</Text>

            <Text style={styles.subHeader}>Must have skills prioritized</Text>
            {mustHaveSkills.map((skill, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.itemText}>{index + 1}. {skill || `Skill ${index + 1}`}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleSelectSkill(index, 'mustHave')}>
                        <Text>Select</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <Text style={styles.subHeader}>Nice to have skills</Text>
            {niceToHaveSkills.map((skill, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.itemText}>{index + 1}. {skill || `Skill ${index + 1}`}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleSelectSkill(index, 'niceToHave')}>
                        <Text>Select</Text>
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
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    itemText: {
        marginRight: 10,
        fontSize: 16,
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#E5E5E5',
        padding: 8,
        borderRadius: 5,
    },
    picker: {
        width: '100%',
        height: 180,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default SkillsScreen;