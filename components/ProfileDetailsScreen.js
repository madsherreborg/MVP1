import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SkillsDetailsScreen = ({ route }) => {
    // Add your implementation here
    return (
        <ImageBackground
            source={require('../assets/compare.png')}
            style={styles.backgroundImage}
            resizeMode="contain"  // This will ensure the image fits within the view without being cropped
        >
            <View style={styles.contentContainer}>
                <Text style={styles.text}></Text>
                {/* Add more content as needed */}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',  // Ensure the width is 100% of the screen
        height: '100%', // Ensure the height is 100% of the screen
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white', // Choose a color that makes the text stand out on your background
        // Add more text styling as needed
    },
});

export default SkillsDetailsScreen;
