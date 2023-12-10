import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AssignmentCreatedScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Thanks for Creating a Project. In the next 24 hours you will receive CVs
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={() => navigation.navigate('AssignmentDescriptions')} />
                <Button title="Show CVs" onPress={() => navigation.navigate('CvListe')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    }
});

export default AssignmentCreatedScreen;