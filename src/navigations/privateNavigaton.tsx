import * as React from 'react';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HomeStackScreen,
  ProfileStackScreen,
  SearchStackScreen,
} from './privateNaivigationStackScreens';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon, {Icons} from '../components/atom/icons';
import Colors from '../global/Colors';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: HomeStackScreen,
  },
  {
    route: 'Search',
    label: 'Search',
    type: Icons.Feather,
    icon: 'search',
    component: SearchStackScreen,
  },
  {
    route: 'Add',
    label: 'Add',
    type: Icons.Feather,
    icon: 'plus-square',
    component: SearchStackScreen,
  },
  {
    route: 'Like',
    label: 'Like',
    type: Icons.Feather,
    icon: 'heart',
    component: ProfileStackScreen,
  },
  {
    route: 'Account',
    label: 'Account',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: ProfileStackScreen,
  },
];

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const Tab = createBottomTabNavigator();

const TabButton = (props: {
  item: any;
  onPress: any;
  accessibilityState: any;
}) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
            style={undefined}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function PrivatePages() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
});

//   return (
//     <>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           headerShown: false,
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'settings' : 'settings-outline';
//             } else if (route.name === 'Recent') {
//               iconName = focused ? 'ios-search' : 'ios-search-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//         initialRouteName="HomeStack">
//         {/* <Tab.Screen name="HomeStack" component={HomeStackScreen} />
//         <Tab.Screen name="RecentStack" component={SearchStackScreen} /> */}
//         <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
//       </Tab.Navigator>
//     </>
//   );
// }
