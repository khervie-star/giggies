import * as React from 'react';
import {SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen, {SocialButton} from 'react-native-login-screen';

function Login({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen
        logoImageSource={require('../../../assets/icon.png')}
        onLoginPress={() => {
          navigation.navigate('Main');
        }}
        onSignupPress={() => {}}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
        signupText="Create account"
        loginButtonStyle={{backgroundColor: '#952584ff'}}
        signupTextStyle={{
          color: '#421263ff',
          fontWeight: 'bold',
          fontSize: 16,
        }}
        signupStyle={{
          marginTop: 12,
        }}>
        <SocialButton
          text="Continue with Google"
          imageSource={require('../../../assets/icons/google.png')}
          onPress={() => {}}
        />
        <SocialButton
          text="Continue with Facebook"
          imageSource={require('../../../assets/icons/facebook.png')}
          onPress={() => {}}
        />
      </LoginScreen>
    </SafeAreaView>
  );
}

export default Login;
