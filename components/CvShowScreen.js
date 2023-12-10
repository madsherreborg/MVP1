import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Husk at importere ikonet

const CvShowScreen = ({ route }) => {
    const { consultant } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.name}>{consultant.name}</Text>
                <Text style={styles.company}>{consultant.company}</Text>
            </View>

            <View style={styles.section}>
                <Icon name="timeline" size={24} color="#000080" style={styles.sectionIcon} />
                <View style={styles.textBox}>
                    <Text style={styles.sectionTitle}>Professional Summary</Text>
                    <Text style={styles.sectionContent}>
                        Experienced software engineer with a strong background in developing award-winning strategies for a diverse clientele.
                    </Text>
                </View>
            </View>

            <View style={styles.section}>
                <Icon name="code" size={24} color="#000080" style={styles.sectionIcon} />
                <View style={styles.textBox}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <Text style={styles.sectionContent}>
                        JavaScript, React, Node.js, Agile Methodologies
                    </Text>
                </View>
            </View>

            <View style={styles.section}>
                <Icon name="work" size={24} color="#000080" style={styles.sectionIcon} />
                <View style={styles.textBox}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    <Text style={styles.sectionContent}>
                        Senior Software Engineer at XYZ Company, 2018-Present
                    </Text>
                </View>
            </View>

            <View style={styles.section}>
                <Icon name="school" size={24} color="#000080" style={styles.sectionIcon} />
                <View style={styles.textBox}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <Text style={styles.sectionContent}>
                        Bachelor of Science in Computer Science, University of Technology
                    </Text>
                </View>
            </View>

            {/* Tilføj flere sektioner efter behov her */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E8F0FE', // Opdateret baggrundsfarve
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
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionIcon: {
        marginRight: 10,
    },
    textBox: {
        flex: 1, // Sørg for at tekstboksen fylder tilgængelig plads
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