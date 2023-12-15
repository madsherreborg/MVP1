import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AssignmentDescriptionsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const fullData = route.params.fullData;

    const [description, setDescription] = useState('');

    const saveAssignment = async () => {
        if (!description.trim()) {
            Alert.alert('Missing Fields', 'Please enter a description.');
            return;
        }

        const assignmentToSave = {
            ...fullData,
            description,
        };

        try {
            const db = getFirestore();
            await addDoc(collection(db, 'assignments'), assignmentToSave);
            Alert.alert('Success', 'Assignment saved successfully');
            navigation.navigate('AssignmentCreated');
        } catch (error) {
            console.error('Error saving assignment:', error);
            Alert.alert('Error', 'Error saving assignment');
        }
    };

    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Spitzenklasse</Text>

                <Text style={styles.boldLabel}>Description:</Text>
                <TextInput
                    style={styles.textArea}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter description"
                    multiline={true}
                    numberOfLines={4}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.prevButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={saveAssignment}>
                        <Icon name="save" size={24} color="#FFF" />
                    </TouchableOpacity>
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
        marginBottom: 20,
        textAlign: 'center',
    },
    boldLabel: {
        fontSize: 16,
        fontWeight: 'bold', // Gør teksten fed
        color: '#0A84FF', // Sætter teksten til sort
        marginBottom: 5,
    },
    input: {
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#0A84FF',
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
    textArea: {
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#0A84FF',
        borderRadius: 5,
        backgroundColor: '#FFF',
        height: 100,
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

export default AssignmentDescriptionsScreen;