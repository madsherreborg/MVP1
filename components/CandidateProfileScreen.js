import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';  // Opdateret import
import { useNavigation, useRoute } from '@react-navigation/native';//odateret import
const CandidateProfileScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const combinedData = route.params.fullData; // Modtaget data fra SkillsScreen

    const initialProfileValues = {
        followerOrLeader: 0.5,
        analyticOrCreative: 0.5,
        practicalOrVisionary: 0.5,
        dependentOrTeamPlayer: 0.5,
        patientOrImpulsive: 0.5,
        structuredOrFlexible: 0.5,
        introvertOrExtrovert: 0.5,
        detailedOrBigPicture: 0.5,
        architectOrDeveloper: 0.5,
        iProfileOrTProfile: 0.5,
        participantOrAgileFacilitator: 0.5,
        specialistOrGeneralist: 0.5,
    };

    const [profile, setProfile] = useState(initialProfileValues);

    const updateProfile = (key, value) => {
        setProfile({ ...profile, [key]: value });
    };

    const handleNext = () => {
        const fullData = {
            ...combinedData,
            candidateProfile: profile
        };
        navigation.navigate('AssignmentDescriptions', { fullData });
    };

    const attributes = {
        followerOrLeader: ['Follower', 'Leader'],
        analyticOrCreative: ['Analytic', 'Creative'],
        practicalOrVisionary: ['Practical', 'Visionary'],
        dependentOrTeamPlayer: ['Dependent', 'Team Player'],
        patientOrImpulsive: ['Patient', 'Impulsive'],
        structuredOrFlexible: ['Structured', 'Flexible'],
        introvertOrExtrovert: ['Introvert', 'Extrovert'],
        detailedOrBigPicture: ['Detailed', 'Big Picture'],
        architectOrDeveloper: ['Architect', 'Developer'],
        iProfileOrTProfile: ['I Profile', 'T Profile'],
        participantOrAgileFacilitator: ['Participant', 'Agile Facilitator'],
        specialistOrGeneralist: ['Specialist', 'Generalist'],
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Candidate Profile</Text>

            {Object.keys(initialProfileValues).map((key) => (
                <View key={key} style={styles.sliderContainer}>
                    <Text style={styles.label}>{attributes[key][0]}</Text>
                    <Slider
                        style={styles.slider}
                        value={profile[key]}
                        onValueChange={(value) => updateProfile(key, value)}
                        minimumValue={0}
                        maximumValue={1}
                        step={0.01}
                    />
                    <Text style={styles.label}>{attributes[key][1]}</Text>
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
        marginBottom: 20,
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        width: '25%', // Giver plads til labels på hver side af slideren
    },
    slider: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default CandidateProfileScreen;