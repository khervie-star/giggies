// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/onboarding';
import LoginScreen from './src/screens/auth/loginScreen';
import SignupScreen from './src/screens/auth/signupScreen';
import PrivatePages from './src/navigations/privateNavigaton';
// import HomeScreen from './src/screens/homeScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import GetStarted from './src/screens/auth';

const Stack = createNativeStackNavigator();

function App() {
  const [firstLaunch, setFirstLaunch] = React.useState<boolean | any>(null);
  const [loggedIn, setLoggedIn] = React.useState(true);

  React.useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem('appLaunched');
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem('appLaunched', 'false');
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => ({
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerShown: false,
        })}>
        {/* {loggedIn ? (
         <Stack.Screen name="Main" component={PrivatePages} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={
                {
                    headerStyle: {
                    backgroundColor: "transparent",
                    shadowOpacity: 0,
                    elevation: 0,
                  }
                }
              }
            />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )} */}
        {/* {firstLaunch && (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )} */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={PrivatePages} />
        {/* <Stack.Screen name="Main" component={PrivatePages} /> */}
        {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
