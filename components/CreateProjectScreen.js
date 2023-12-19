import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

const CreateProjectScreen = () => {
    const [projectName, setProjectName] = useState('');
    const [region, setRegion] = useState('');
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate('Experience', { projectName: projectName, region: region });
    };

    const displayRegion = () => {
        if (region === '') {
            return 'Select Timezone';
        }
        return region;
    }

    return (
        <ImageBackground source={require('../assets/inno.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.header}>Spitzenklasse</Text>

                <Text style={styles.label}>Assignment name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Assignment name"
                    onChangeText={setProjectName}
                    value={projectName}
                />

                <TouchableOpacity style={styles.selectButton} onPress={() => setIsPickerVisible(true)}>
                    <Text style={styles.selectButtonText}>{displayRegion()}</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isPickerVisible}
                    onRequestClose={() => setIsPickerVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={region}
                                onValueChange={(itemValue) => setRegion(itemValue)}
                                style={{ width: '100%' }}>
                                <Picker.Item label="Europe (CET)" value="Europe" />
                                <Picker.Item label="USA (GMT)" value="USA" />
                                <Picker.Item label="Asia (UTC)" value="Asian" />
                                <Picker.Item label="Domestic" value="Domestic" />
                            </Picker>
                            <TouchableOpacity
                                style={styles.doneButton}
                                onPress={() => setIsPickerVisible(false)}>
                                <Text style={styles.doneButtonText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={styles.nextButtonContainer}>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Icon name="arrow-forward" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
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
    label: {
        fontSize: 16,
        color: '#0A84FF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        backgroundColor: '#FFF',
        borderColor: '#0A84FF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectButton: {
        height: 40,
        backgroundColor: '#FFF',
        borderColor: '#0A84FF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectButtonText: {
        fontSize: 16,
        color: '#0A84FF',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pickerContainer: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    doneButton: {
        backgroundColor: '#0A84FF',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 10,
    },
    doneButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nextButtonContainer: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    nextButton: {
        backgroundColor: '#0A84FF',
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});
export default CreateProjectScreen