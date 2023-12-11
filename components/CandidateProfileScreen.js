import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CandidateProfileScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const combinedData = route.params.fullData;

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

    const updateProfile = (key, value) => {
        setProfile({ ...profile, [key]: value });
    };

    const handleNext = () => {
        const fullData = {
            ...combinedData,
            candidateProfile: profile
        };
        navigation.navigate('AssignmentDescriptions', { fullData }); // Ret navnet her
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Spitzenklasse</Text>

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
        marginBottom: 20,
        textAlign: 'center',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        width: '25%',
        fontSize: 16,
    },
    slider: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
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

export default CandidateProfileScreen;