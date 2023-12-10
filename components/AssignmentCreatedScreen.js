import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AssignmentCreatedScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Spitzenklasse</Text>
            <Text style={styles.text}>
                Thanks for creating an assignment. In the next 24 hours you will receive recommended CV's
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.prevButton} onPress={() => navigation.navigate('AssignmentDescriptions')}>
                    <Icon name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('CvListe')}>
                    <Icon name="list" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F0FE',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0A84FF',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        color: '#0A84FF',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
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

export default AssignmentCreatedScreen;