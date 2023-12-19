import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SkillsDetailsScreen = () => {
    // Mock data for skill percentages comparison
    const skillsComparison = {
        JavaScript: { consultant: 70, employer: 100 },
        Python: { consultant: 65, employer: 80 },
        Java: { consultant: 60, employer: 60 },
    };

    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.header}>Skills Comparison</Text>
                {Object.entries(skillsComparison).map(([skill, { consultant, employer }]) => (
                    <View key={skill} style={styles.skillRow}>
                        <Text style={styles.skillText}>{skill}</Text>
                        <View style={styles.skillBarContainer}>
                            <Text style={styles.label}>Employer Need:</Text>
                            <View style={styles.skillBarBackground}>
                                <View style={[styles.skillBar, styles.employerBar, { width: `${employer}%` }]} />
                            </View>
                            <Text style={styles.skillPercentageOutside}>{employer}%</Text>
                        </View>
                        <View style={styles.skillBarContainer}>
                            <Text style={styles.label}>Consultant Has:</Text>
                            <View style={styles.skillBarBackground}>
                                <View style={[styles.skillBar, styles.consultantBar, { width: `${consultant}%` }]} />
                            </View>
                            <Text style={styles.skillPercentageOutside}>{consultant}%</Text>
                        </View>
                    </View>
                ))}
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
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0A84FF',
        marginBottom: 20,
        textAlign: 'center',
    },
    skillRow: {
        marginBottom: 20,
    },
    skillText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0A84FF',
        marginBottom: 4,
    },
    skillBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    label: {
        fontSize: 14,
        color: '#0A84FF',
        width: '25%',
    },
    skillBarBackground: {
        height: 20,
        flex: 1,
        backgroundColor: '#CCCCCC',
        borderRadius: 10,
        marginRight: 5,
    },
    skillBar: {
        height: '100%',
        borderRadius: 10,
    },
    employerBar: {
        backgroundColor: '#0000FF', // Blue color for employer's skill level
    },
    consultantBar: {
        backgroundColor: '#00FF00', // Green color for consultant's skill level
    },
    skillPercentageOutside: {
        fontSize: 14,
        color: '#FFFFFF', // White color for better visibility
        width: '10%',
        textAlign: 'right',
    },
});

export default SkillsDetailsScreen;
