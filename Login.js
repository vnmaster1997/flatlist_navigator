import React, {Component} from 'react';
import{
    StyleSheet, View, Image, Text, TouchableOpacity
} from 'react-native';
import LoginForm from './LoginForm';
// import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component{

    _handleLogin = () => {
        this.props.navigation.navigate('RootStack');
    }

    render() {
        return(
            <View style={styles.containter}>
                <View style={styles.logoContainer} >
                    <Image 
                        style={styles.logo}
                        source={require('./img/Octocat.png')}
                    />

                    <Text style={styles.title}>
                        welcome to User App
                    </Text>
                </View>
                <View>
                <View style={styles.formContainer} >
                    <LoginForm />
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this._handleLogin()}>
                        <Text style={styles.butonText} >LOGIN</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: '#3498db',       
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        opacity: 0.9
    },
    buttonContainer: {
        backgroundColor: '#aad4ff',
        paddingVertical: 15
    },
    butonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
})