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
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>CV List</Text>
            <View style={styles.table}>
                {/* Kolonne 1: Companies */}
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Companies</Text>
                    {consultants.map((item, index) => (
                        <Text key={index} style={styles.cell}>{item.company}</Text>
                    ))}
                </View>

                {/* Kolonne 2: Names */}
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Names</Text>
                    {consultants.map((item, index) => (
                        <Text key={index} style={styles.cell}>{item.name}</Text>
                    ))}
                </View>

                {/* Kolonne 3: Open */}
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Open</Text>
                    {consultants.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('CvShow', { consultant: item })}>
                            <Text style={styles.cell}>{item.status}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Kolonne 4: Contact */}
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Contact</Text>
                    {consultants.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('ContactScreen', { consultant: item })}>
                            <Text style={styles.cell}>Contact</Text>
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
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
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
        marginBottom: 10,
        fontSize: 14, // Tilpasset for at passe på en linje
    },
    cell: {
        marginBottom: 10,
    }
});

export default CvListeScreen;