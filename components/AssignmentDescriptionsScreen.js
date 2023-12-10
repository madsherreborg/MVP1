import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AssignmentDescriptionsScreen = () => {
    const navigation = useNavigation();
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Assignment Description</Text>

            <Text style={styles.label}>Topic:</Text>
            <TextInput
                style={styles.input}
                value={topic}
                onChangeText={setTopic}
                placeholder="Enter topic"
            />

            <Text style={styles.label}>Description:</Text>
            <TextInput
                style={styles.textArea}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter description"
                multiline={true}
                numberOfLines={4}
            />

            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={() => navigation.goBack()} />
                <Button title="Next" onPress={() => navigation.navigate('AssignmentCreated')} />
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
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    textArea: {
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        height: 100, // Juster efter behov
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default AssignmentDescriptionsScreen;