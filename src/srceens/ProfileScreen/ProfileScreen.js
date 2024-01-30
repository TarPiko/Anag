import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import TextRegular from '../../components/UI/TextRegular';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextSemiBold from '../../components/UI/TextSemiBold';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { HelpIcon, LogOutIcon, QrCodeIcon } from '../../assets/icons';
import { useRootModel } from '../../models/RootStore';

/**
 * Profile screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const ProfileScreen = ({ navigation }) => {
  const {
    user: { setIsAuth, userInfo },
  } = useRootModel();
  const onIdCard = () => {
    navigation.navigate('IDCardStack', { screen: 'IDCardScreen' });
  };

  const onLogOut = () => {
    setIsAuth(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'WelcomeScreen' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title}>My Profile</TextSemiBold>
        <View style={styles.topIndent}>
          <TextRegular>First Name</TextRegular>
          <TextSemiBold style={styles.largeText}>{userInfo.firstName}</TextSemiBold>
        </View>
        <View style={styles.topIndent}>
          <TextRegular>Last Name</TextRegular>
          <TextSemiBold style={styles.largeText}>{userInfo.lastName}</TextSemiBold>
        </View>
        <View style={styles.topIndent}>
          <TextRegular>Email</TextRegular>
          <TextSemiBold style={styles.largeText}>{userInfo.email}</TextSemiBold>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.link} activeOpacity={0.8} onPress={onIdCard}>
          <QrCodeIcon color={COLORS.green} />
          <TextSemiBold style={styles.leftIndent}>My ID Card</TextSemiBold>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.link} activeOpacity={0.8}>
          <HelpIcon />
          <TextSemiBold style={styles.leftIndent}>Help center</TextSemiBold>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.link} activeOpacity={0.8} onPress={onLogOut}>
          <LogOutIcon />
          <TextSemiBold style={styles.leftIndent}>Log Out</TextSemiBold>
        </TouchableOpacity>
        <TextRegular style={styles.topIndent}>Version 0.1.0</TextRegular>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    paddingHorizontal: SIZE.mediumIndent,
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginTop: SIZE.mediumIndent,
  },
  topIndent: {
    marginTop: SIZE.mediumIndent,
  },
  leftIndent: {
    marginLeft: SIZE.minIndent / 2,
  },
  largeText: {
    fontSize: normalizeFontSize(18),
    marginTop: SIZE.minIndent / 2,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SIZE.mediumIndent,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default observer(ProfileScreen);
