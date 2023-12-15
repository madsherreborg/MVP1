import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CvListeScreen = () => {
    const navigation = useNavigation();
    const consultants = [
        { company: 'Mckinsey', name: 'Rasmus', status: 'Open', contact: 'Contact', percentage: 90 },
        { company: 'IBM', name: 'Peter', status: 'Open', contact: 'Contact', percentage: 85 },
        { company: 'Rambøll', name: 'Casper', status: 'Open', contact: 'Contact', percentage: 83 },
        { company: 'Deloitte', name: 'Krog', status: 'Open', contact: 'Contact', percentage: 78 },
        { company: 'PWC', name: 'Zultan', status: 'Open', contact: 'Contact', percentage: 75 },
        { company: 'KMD', name: 'Gabriella', status: 'Open', contact: 'Contact', percentage: 69 },
        { company: 'CGI', name: 'George', status: 'Open', contact: 'Contact', percentage: 65 },
        // Tilføj flere konsulenter efter behov
    ];

    // Bestem farve baseret på procenttal
    const getPercentageColor = (percentage) => {
        if (percentage > 80) return 'green';
        if (percentage >= 50) return 'yellow';
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
                        <Text style={styles.columnHeader}>Name</Text>
                        {consultants.map((item, index) => (
                            <Text key={`name-${index}`} style={styles.cell}>{item.name}</Text>
                        ))}
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>Open</Text>
                        {consultants.map((item, index) => (
                            <TouchableOpacity key={`open-${index}`} onPress={() => navigation.navigate('CvShow', { consultant: item })}>
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
                        <Text style={styles.columnHeader}>Match</Text>
                        {consultants.map((item, index) => (
                            <Text key={`percentage-${index}`} style={[styles.cell, { color: getPercentageColor(item.percentage) }]}>
                                {`${item.percentage}%`}
                            </Text>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.compareButton} onPress={() => navigation.navigate('Compare')}>
                <Text style={styles.compareButtonText}>Compare</Text>
            </TouchableOpacity>
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
    compareButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 5,
        elevation: 3,
    },
    compareButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CvListeScreen;
