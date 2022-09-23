import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
// import GradientButton from 'react-native-gradient-buttons';
import LinearGradient from 'react-native-linear-gradient';

function GetStarted({navigation}: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <View style={styles.headerText}>
          <Text style={styles.headerTextBlack}>Think </Text>
          <Text style={[styles.headerTextBlack, styles.headerTextGreen]}>
            Service
          </Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.headerTextBlack}>Think </Text>
          <Text style={[styles.headerTextBlack, styles.headerTextGreen]}>
            Service
          </Text>
        </View>
      </View>
      <Image source={require('../../../assets/giggies_500.png')} />
      <View>
        {/* <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={['#43D4FF', '#38ABFD', '#2974FA']}
            style={styles.gradient}>
            <Text style={styles.text}>Gradient Button</Text>
          </LinearGradient>
        </TouchableOpacity> */}
        <TouchableHighlight
          style={styles.loginbutton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.signupbutton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableHighlight>
        {/* <Image
          style={styles.heroImage}
          source={require('../assets/illustrations/communication_chat.svg')}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
  },
  headerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
  },
  headerTextBlack: {
    color: 'black',
    fontSize: 26,
    lineHeight: 28,
    fontFamily: 'Poppins-Bold',
  },
  headerTextGreen: {
    color: '#43DFA8',
  },
  headerSubText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 0,
  },
  hero: {
    flex: 1,
  },
  heroImage: {
    flex: 1,
    height: 100,
  },
  contentText: {
    fontSize: 65,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 60,
    marginBottom: 40,
  },
  loginbutton: {
    alignSelf: 'stretch',
    color: '#fff',
    backgroundColor: '#C6207Dff',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 50,
    textAlign: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    lineHeight: 26.6,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  signupbutton: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    color: '#952584ff',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 50,
    textAlign: 'center',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#952584ff',
  },
  signupText: {
    color: '#952584ff',
    lineHeight: 26.6,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Bold',
  },
  // gradient: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 5,
  // },
  button: {
    width: '100%',
    height: 45,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default GetStarted;
