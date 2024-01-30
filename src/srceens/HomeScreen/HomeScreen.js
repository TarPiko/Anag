import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextSemiBold from '../../components/UI/TextSemiBold';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PolicyCard from './components/PolicyCard';
import GetQuote from './components/GetQuote';
import RoadsideHelp from './components/RoadsideHelp';
import ScanIDCard from './components/ScanIDCard';
import { useRootModel } from '../../models/RootStore';
import TextLight from '../../components/UI/TextLight';
import AddPolicyModal from '../../components/modals/AddPolicyModal';
import AddButton from '../../components/UI/AddButton';

/**
 * Home screen. The main of DashboardStack
 * @returns {JSX.Element}
 */
const HomeScreen = ({ navigation }) => {
  const {
    user: { userInfo, isAuth, quotes },
  } = useRootModel();

  const [isVisible, setIsVisible] = useState(false);

  const policyList = quotes.filter(item => item.isPolicy === true);

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const addPolicy = () => {
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title}>
          Hello{isAuth && `, ${userInfo.firstName}`}!
        </TextSemiBold>
        <View style={styles.subTitle}>
          {isAuth ? (
            <TextLight style={styles.lastLogin}>
              Last Login:{` ${new Date(userInfo.lastLogged).toLocaleString()}`}
            </TextLight>
          ) : (
            <>
              <TextRegular style={styles.font16}>Don’t have an account?</TextRegular>
              <Pressable onPress={handleSignUp}>
                <TextSemiBold style={[styles.font16, styles.signUp]}>Sign Up</TextSemiBold>
              </Pressable>
            </>
          )}
        </View>
        {policyList.map((item, i) => (
          <PolicyCard key={`${item.policyNumber}_${i}`} policy={item} />
        ))}
        <AddButton title='Add policy' onPress={addPolicy} style={styles.button} />
        <View style={styles.border} />
        <GetQuote />
        <RoadsideHelp />
        <ScanIDCard />
        <AddPolicyModal setIsVisible={setIsVisible} isVisible={isVisible} />
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
  subTitle: {
    flexDirection: 'row',
    marginTop: SIZE.minIndent,
  },
  font16: {
    fontSize: normalizeFontSize(16),
  },
  signUp: {
    color: COLORS.green,
    marginLeft: SIZE.minIndent,
  },
  lastLogin: {
    fontSize: normalizeFontSize(12),
    marginBottom: SIZE.minIndent,
  },
  border: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.border,
  },
  button: {
    marginVertical: SIZE.minIndent,
  },
});

export default observer(HomeScreen);
