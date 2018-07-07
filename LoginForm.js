import React, { Component } from 'react';   
import {
    StyleSheet, View, TextInput, Text, KeyboardAvoidingView
} from 'react-native';
export default class LoginFrom extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput 
                    placeholder="Username or Email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="Next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="Go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 10,
    },

});