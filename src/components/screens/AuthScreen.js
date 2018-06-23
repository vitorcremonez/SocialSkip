import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    TextInput,
    StyleSheet,
    Button,
    Image,
    KeyboardAvoidingView,
} from 'react-native';

import Logo from '../../assets/images/logo-white.png';

class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInputEmail: '',
            textInputPassword: '',
        };
    }

    render() {
        return (
            <View style={{backgroundColor: '#E91431', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior={"padding"}>
                    <Image
                        style={{width: null, height: 32, margin: 10, resizeMode: Image.resizeMode.contain}}
                        source={Logo}
                    />
                    <View style={{width: 300}}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Email"}
                            autoCapitalize={'none'}
                            returnKeyType={'next'}
                            value={this.state.textInputEmail}
                            onChangeText={textInputEmail => this.setState({textInputEmail})}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Password"}
                            autoCapitalize={'none'}
                            returnKeyType={'next'}
                            secureTextEntry={true}
                            value={this.state.textInputPassword}
                            onChangeText={textInputPassword => this.setState({textInputPassword})}
                        />
                        <Button
                            title={'Sign In'}
                            color={'white'}
                            onPress={() => alert('sign in')}
                        />
                    </View>

                    <View style={{alignItems:'center', margin: 20, marginTop: 50}}>
                        <Text style={{color:'rgba(255,255,255,0.5)'}}>
                            Don't have an account yet?
                        </Text>
                        <Button
                            title={'sign up'}
                            color={'rgba(255,255,255,0.5)'}
                            onPress={() => alert('sign up')}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = {
    textInput: {
        width: null,
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 3,
    },
};

export default AuthScreen;