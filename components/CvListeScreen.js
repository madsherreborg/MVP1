import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CvListeScreen = () => {
    const navigation = useNavigation();
    const consultants = [
        { company: 'Mckinsey', status: 'Open', contact: 'Contact', percentage: 90, skills: '80%' },
        { company: 'IBM', status: 'Open', contact: 'Contact', percentage: 85, skills: '75%' },
        { company: 'Rambøll', status: 'Open', contact: 'Contact', percentage: 83, skills: '70%' },
        { company: 'Deloitte', status: 'Open', contact: 'Contact', percentage: 78, skills: '65%' },
        { company: 'PWC', status: 'Open', contact: 'Contact', percentage: 75, skills: '60%' },
        { company: 'KMD', status: 'Open', contact: 'Contact', percentage: 69, skills: '55%' },
        { company: 'CGI', status: 'Open', contact: 'Contact', percentage: 65, skills: '50%' },
        // Add more consultants as needed
    ];

    const getSkillsColor = (percentage) => {
        if (percentage > 70) return 'green';
        if (percentage > 40) return 'yellow';
        return 'red';
    };

    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Spitzenklasse</Text>
                <View style={styles.table}>
                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>Firm</Text>
                        {consultants.map((item, index) => (
                            <Text key={`company-${index}`} style={styles.cell}>{item.company}</Text>
                        ))}
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>CV</Text>
                        {consultants.map((item, index) => (
                            <TouchableOpacity key={`cv-${index}`} onPress={() => navigation.navigate('CvShow', { consultant: item })}>
                                <Text style={styles.cellAction}>{item.status}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>Contact</Text>
                        {consultants.map((item, index) => (
                            <TouchableOpacity key={`contact-${index}`} onPress={() => navigation.navigate('ContactScreen', { consultant: item })}>
                                <Text style={styles.cellAction}>Contact</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>Profile</Text>
                        {consultants.map((item, index) => (
                            <TouchableOpacity
                                key={`profile-${index}`}
                                onPress={() => navigation.navigate('ProfileDetails', { percentage: item.percentage })}
                            >
                                <Text style={[styles.cell, { color: getSkillsColor(parseInt(item.percentage)) }]}>
                                    {`${item.percentage}%`}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>Skills</Text>
                        {consultants.map((item, index) => (
                            <TouchableOpacity
                                key={`skills-${index}`}
                                onPress={() => navigation.navigate('SkillsDetails', { skills: item.skills })}
                            >
                                <Text style={[styles.cell, { color: getSkillsColor(parseInt(item.skills.replace('%', ''))) }]}>
                                    {item.skills}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
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
    table: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '20%',
    },
    columnHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
    },
    cell: {
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0A84FF',
    },
    cellAction: {
        marginBottom: 10,
        fontSize: 14,
        color: '#0A84FF',
        fontWeight: 'bold',
    },
    // Removed styles for compareButton and compareButtonText
});

export default CvListeScreen;
