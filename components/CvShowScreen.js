import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CvShowScreen = ({ route }) => {
    const { consultant } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.name}>{consultant.name}</Text>
                <Text style={styles.company}>{consultant.company}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.sectionContent}>
                    {/* Eksempeltekst - Erstat med reel data */}
                    Experienced software engineer with a strong background in developing award-winning strategies for a diverse clientele.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <Text style={styles.sectionContent}>
                    {/* Eksempeltekst - Erstat med reel data */}
                    JavaScript, React, Node.js, Agile Methodologies
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                <Text style={styles.sectionContent}>
                    {/* Eksempeltekst - Erstat med reel data */}
                    Senior Software Engineer at XYZ Company, 2018-Present
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                <Text style={styles.sectionContent}>
                    {/* Eksempeltekst - Erstat med reel data */}
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
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 18,
        color: 'gray',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sectionContent: {
        fontSize: 16,
    },
    // Tilføj yderligere stilarter efter behov
});

export default CvShowScreen;