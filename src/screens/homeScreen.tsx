import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ProductCard} from '../components/molecules/productCard';
import {Shapes} from 'react-native-background-shapes';
import Icon, {Icons} from '../components/atom/icons';
import Colors from '../global/Colors';
// import TextInput from 'react-native-text-input-interactive';

function HomeScreen({navigation}) {
  const [searchText, onChangeEmail] = React.useState('');

  return (
    <>
      <ScrollView>
        <Shapes
          primaryColor="#C6207D"
          secondaryColor="#952584ff"
          height={2.5}
          borderRadius={20}
          style={{marginBottom: 50}}
          figures={[
            {name: 'cutDiamond', position: 'center', size: 60},
            {name: 'donut', position: 'flex-start', axis: 'top', size: 80},
            {name: 'circle', position: 'center', axis: 'right', size: 100},
          ]}
        />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.location}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="map-marker-circle"
                color={Colors.white}
                style={undefined}
                size={18}
              />
              <Text style={styles.locationText}>Ibadan, Oyo</Text>
            </View>
            <View>
              <Icon
                type={Icons.MaterialIcons}
                name="notifications-none"
                color={Colors.white}
                style={undefined}
              />
            </View>
          </View>

          <View style={styles.headerDesc}>
            <Text style={[styles.headerText, styles.bold]}>Services</Text>
            <Text style={styles.headerText}>to suit your </Text>
            <Text style={[styles.headerText, styles.bold]}>needs</Text>
          </View>

          <View style={styles.search}>
            <Ionicons
              name="search"
              color={'#012751'}
              style={styles.headerIcon}
              size={24}
            />
            <TextInput
              style={{flex: 1}}
              onChangeText={onChangeEmail}
              value={searchText}
              placeholder="Find service"
            />
          </View>

          <ScrollView style={styles.filterbar}>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
            <View style={styles.filterCard}>
              <Text>Nearest</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    marginHorizontal: 5,
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerDesc: {
    marginVertical: 20,
  },
  headerText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 32,
    fontFamily: 'Montserrat-Regular',
    flex: 1,
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    shadowColor: 'rgba(17, 12, 46, 0.15)',
  },

  bold: {
    fontFamily: 'Montserrat-Bold',
  },

  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: 24,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    elevation: 20,
  },
  filterbar: {
    display: 'flex',
    flexDirection: 'column',
  },
  filterCard: {
    width: 120,
    height: 70,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 12,
    margin: 8,
    flexDirection: 'column',
    textAlign: 'center',
  },
  cardFlex: {
    flexGrow: 1,
    // flexShrink: 1,
    flexBasis: 'auto',
    backgroundColor: 'green',
    height: '100%',
    marginHorizontal: 2,
    borderRadius: 12,
  },
  clientAvatar: {
    height: 120,
    width: '100%',
  },
  heroImage: {
    flex: 1,
  },
  card: {
    borderWidth: 2,
  },
});

export default HomeScreen;
