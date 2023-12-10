import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SkillsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const combinedData = route.params.combinedData; // Modtaget data fra ExperienceScreen

    const [mustHaveSkills, setMustHaveSkills] = useState(Array(5).fill(''));
    const [niceToHaveSkills, setNiceToHaveSkills] = useState(Array(5).fill(''));

    const updateSkill = (index, type, value) => {
        if (type === 'mustHave') {
            let updatedSkills = [...mustHaveSkills];
            updatedSkills[index] = value;
            setMustHaveSkills(updatedSkills);
        } else {
            let updatedSkills = [...niceToHaveSkills];
            updatedSkills[index] = value;
            setNiceToHaveSkills(updatedSkills);
        }
    };

    const handleSelectSkill = (index, type) => {
        // Du kan erstatte denne Alert med din egen inputmekanisme
        Alert.prompt(
            'Enter Skill',
            '',
            text => updateSkill(index, type, text)
        );
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default SkillsScreen;