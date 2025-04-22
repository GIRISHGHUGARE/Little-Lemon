import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default function WelcomeScreen() {
    const [firstname, onChangeFirstName] = useState('');
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.welcometext}>
                    Welcome to Little Lemon
                </Text>
                <Text style={styles.paratext}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                    We would love to hear more about your experience with us!
                </Text>
                <TextInput
                    placeholder='Firstname'
                    value={firstname}
                    onChangeText={onChangeFirstName}
                    style={styles.firstname}
                >

                </TextInput>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    welcometext: {
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontSize: 38,
    },
    paratext: {
        textAlign: 'center',
        color: 'white',
        margin: 20,
        fontSize: 28,
    },
    firstname: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#F4CE14',
    }
})