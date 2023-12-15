import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CompareScreen = () => {
    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.text}>Compare Screen</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // eller 'contain' afhængigt af dit behov
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A84FF', // eller en anden farve efter dit valg
    }
});

export default CompareScreen;
