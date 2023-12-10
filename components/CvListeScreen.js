import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CvListeScreen = () => {
    const navigation = useNavigation();
    const consultants = [
        { company: 'Netcompany', name: 'Rasmus', status: 'Open', contact: 'Contact' },
        { company: 'IBM', name: 'Peter', status: 'Open', contact: 'Contact' },
        { company: 'Rambøll', name: 'Casper', status: 'Open', contact: 'Contact' },
        { company: 'Deloitte', name: 'Krog', status: 'Open', contact: 'Contact' },
        { company: 'PWC', name: 'Zultan', status: 'Open', contact: 'Contact' },
        { company: 'KMD', name: 'Gabriella', status: 'Open', contact: 'Contact' },
        { company: 'CGI', name: 'George', status: 'Open', contact: 'Contact' },
        // Tilføj flere konsulenter efter behov
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Spitzenklasse</Text>
            <View style={styles.table}>
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Companies</Text>
                    {consultants.map((item, index) => (
                        <Text key={`company-${index}`} style={styles.cell}>{item.company}</Text>
                    ))}
                </View>

                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Names</Text>
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
            </View>
        </ScrollView>
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
        width: '25%',
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
    },
    cellAction: {
        marginBottom: 10,
        fontSize: 14,
        color: '#0A84FF',
        fontWeight: 'bold',
    }
});

export default CvListeScreen;