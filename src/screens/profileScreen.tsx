import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon, {Icons} from '../components/atom/icons';

function ProfileScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          // flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
        }}>
        <View style={styles.userDetails}>
          <View style={styles.userAvatar}>
            <Image
              style={styles.avatarImage}
              source={require('../../assets/images/user.jpeg')}
            />
          </View>
          <View style={styles.userNames}>
            <Text style={styles.name}>Mohammed Name</Text>
            <Text style={styles.bio}>Web developer</Text>
          </View>
          <View>
            <Icon
              type={Icons.MaterialCommunityIcons}
              name="account-edit-outline"
              size={24}
              color={'green'}
              style={undefined}
            />
          </View>
        </View>
        <View>
          <View style={styles.personalDetails}>
            <View>
              <Icon
                type={Icons.FontAwesome}
                name="phone"
                size={24}
                color={'green'}
                style={undefined}
              />
            </View>
            <Text style={styles.listText}>+234-818-074-6707</Text>
          </View>
          <View>
            <View style={styles.listIcon}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="email-outline"
                size={24}
                color={'green'}
                style={undefined}
              />
            </View>
            <Text style={styles.listText}>herviek2001@gmail.com</Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>

      <View style={styles.personalDetails}>
        <View style={styles.listIcon}>
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="frequently-asked-questions"
            size={24}
            color={'green'}
            style={undefined}
          />
        </View>
        <Text style={styles.listText}>FAQs</Text>
      </View>
      <View style={styles.personalDetails}>
        <View style={styles.listIcon}>
          <Icon
            type={Icons.MaterialIcons}
            name="help-outline"
            size={24}
            color={'green'}
            style={undefined}
          />
        </View>
        <Text style={styles.listText}>Help</Text>
      </View>
      <View style={styles.personalDetails}>
        <View style={styles.listIcon}>
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="shield-account-outline"
            size={24}
            color={'green'}
            style={undefined}
          />
        </View>
        <Text style={styles.listText}>My Account</Text>
      </View>
      <View style={styles.personalDetails}>
        <View style={styles.listIcon}>
          <Icon
            type={Icons.MaterialIcons}
            name="settings"
            size={24}
            color={'green'}
            style={undefined}
          />
        </View>
        <Text style={styles.listText}>Settings</Text>
      </View>

      <View style={styles.community}>
        <Ionicons
          name="headset"
          size={24}
          color={'#7988D9'}
          style={styles.communityIcon}
        />
        <Text style={styles.communityText}>
          Feel free to ask, we're ready to help
        </Text>
      </View>

      <TouchableOpacity style={styles.logout}>
        <Icon
          type={Icons.MaterialCommunityIcons}
          name="logout"
          size={24}
          color={'#fff'}
          style={undefined}
        />
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 24,
  },
  userAvatar: {
    borderRadius: 12,
    width: 75,
    height: 75,
    marginRight: 12,
  },
  avatarImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    flex: 1,
  },
  userNames: {
    flex: 5,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 6,
    color: '#122546',
  },
  bio: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#657885',
  },

  divider: {
    borderBottomColor: 'green',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 16,
  },
  personalDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },

  listIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
    borderRadius: 5,
    backgroundColor: '#F6F8FE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  actionIcon: {},
  listText: {
    color: '#012751',
    flex: 1,
  },

  community: {
    padding: 16,
    marginVertical: 32,
    backgroundColor: '#ECF0FE',
    // opacity: "0.5",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 12,
  },
  communityIcon: {
    marginHorizontal: 5,
  },
  communityText: {
    color: '#7988D9',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'VarelaRound_400Regular',
  },
  logout: {
    backgroundColor: 'red',
  },
});

export default ProfileScreen;
