import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Tilføj den relevante import

const CvShowScreen = ({ route }) => {
    const { consultant } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.name}>{consultant.name}</Text>
                <Text style={styles.company}>{consultant.company}</Text>
            </View>

            <View style={styles.section}>
                <Icon name="summary" size={24} color="#000080" />
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.sectionContent}>
                    Experienced software engineer with a strong background in developing award-winning strategies for a diverse clientele.
                </Text>
            </View>

            <View style={styles.section}>
                <Icon name="build" size={24} color="#000080" />
                <Text style={styles.sectionTitle}>Skills</Text>
                <Text style={styles.sectionContent}>
                    JavaScript, React, Node.js, Agile Methodologies
                </Text>
            </View>

            <View style={styles.section}>
                <Icon name="work" size={24} color="#000080" />
                <Text style={styles.sectionTitle}>Experience</Text>
                <Text style={styles.sectionContent}>
                    Senior Software Engineer at XYZ Company, 2018-Present
                </Text>
            </View>

            <View style={styles.section}>
                <Icon name="school" size={24} color="#000080" />
                <Text style={styles.sectionTitle}>Education</Text>
                <Text style={styles.sectionContent}>
                    Bachelor of Science in Computer Science, University of Technology
                </Text>
            </View>

            {/* Flere sektioner efter behov */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0F8FF', // Blød blå baggrund
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000080', // Mørkeblå linje
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000080', // Mørkeblå tekst
    },
    company: {
        fontSize: 18,
        color: 'gray',
    },
    section: {
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#000080', // Mørkeblå kant
        paddingLeft: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000080', // Mørkeblå overskrift
    },
    sectionContent: {
        fontSize: 16,
    },
    // Tilføj yderligere stilarter efter behov
});

export default CvShowScreen;