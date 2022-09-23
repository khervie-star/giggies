/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Button} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Square = ({isLight, selected}: any) => {
  let backgroundColor, width;
  if (isLight) {
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    width = selected ? 16 : 6;
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    width = selected ? 16 : 6;
  }
  return (
    <View
      style={{
        width,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 8,
      }}
    />
  );
};

const Done = ({navigation, ...props}: any) => (
  <Button
    buttonStyle={{
      width: 250,
      height: 70,
      backgroundColor: '#fff',
      borderRadius: 25,
      padding: 10,
    }}
    containerStyle={{margin: 15}}
    disabledStyle={{
      borderWidth: 2,
      borderColor: '#00F',
    }}
    disabledTitleStyle={{color: '#00F'}}
    loadingProps={{animating: true}}
    loadingStyle={{}}
    icon={<Ionicons name="arrow-forward" size={15} color="#000" />}
    iconContainerStyle={{background: '#000'}}
    iconRight
    onPress={() => navigation.navigate('Login')}
    title="Get started"
    titleProps={{}}
    titleStyle={{
      marginHorizontal: 5,
      color: '#121212',
      fontWeight: '700',
      fontSize: 18,
    }}
    {...props}
  />
);

const Skip = ({...props}) => (
  <Button
    buttonStyle={{
      width: 120,
      backgroundColor: 'transparent',
      borderRadius: 50,
      padding: 10,
    }}
    containerStyle={{margin: 5}}
    disabledStyle={{
      borderWidth: 2,
      borderColor: '#00F',
    }}
    disabledTitleStyle={{color: '#00F'}}
    loadingProps={{animating: true}}
    loadingStyle={{}}
    title="Skip"
    titleProps={{}}
    titleStyle={{
      marginHorizontal: 5,
      color: '#121212',
      fontWeight: '700',
      fontSize: 18,
    }}
    {...props}
  />
);

const Next = ({...props}: any) => (
  <Button
    buttonStyle={{
      width: 120,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 50,
    }}
    containerStyle={{marginBottom: 0, marginRight: 10}}
    disabledStyle={{
      borderWidth: 2,
      borderColor: '#00F',
    }}
    disabledTitleStyle={{color: '#00F'}}
    loadingProps={{animating: true}}
    loadingStyle={{}}
    title="Next"
    titleProps={{}}
    titleStyle={{
      marginHorizontal: 5,
      color: '#121212',
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily: 'Poppins',
    }}
    {...props}
  />
);

const OnboardingScreen = ({navigation}: any) => {
  return (
    <Onboarding
      DotComponent={Square}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      skipToPage={2}
      DoneButtonComponent={Done}
      onDone={() => navigation.navigate('GetStarted')}
      titleStyles={{
        color: '#565656',
        fontSize: 26,
        fontFamily: 'Montserrat-Bold',
      }}
      subTitleStyles={{
        color: '#959595',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        lineHeight: 24,
      }}
      bottomBarHeight={100}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../assets/illustrations/output-onlinepngtools.png')}
            />
          ),
          title: 'Saves Time',
          subtitle:
            'Hiring a giggie service saves you the time and stress of finding professional service to suit your needs. We&apos;ve got you covered.',
        },
        {
          backgroundColor: '#fafafa',
          image: (
            <Image
              source={require('../../../assets/illustrations/output-onlinepngtools.png')}
            />
          ),
          title: 'Time',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
          backgroundColor: '#fbfbfb',
          image: (
            <Image
              source={require('../../../assets/illustrations/triangle.png')}
            />
          ),
          title: 'Header Three',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
