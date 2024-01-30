import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextSemiBold from '../../components/UI/TextSemiBold';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextLight from '../../components/UI/TextLight';
import WithBorderButton from '../../components/UI/WithBorderButton';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { useRootModel } from '../../models/RootStore';
import { LogoIcon } from '../../assets/icons';

/**
 * AskPolicy screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const AskPolicyScreen = ({ navigation }) => {
  const {
    user: { setOnBoarding },
  } = useRootModel();
  const onYes = () => {
    navigation.navigate('PolicyIDScreen');
  };

  const onNo = () => {
    setOnBoarding(true);
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainStack' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <LogoIcon size={58} />
        <TextSemiBold style={styles.title}>Do you have an existing policy?</TextSemiBold>
        <TextLight style={styles.description}>
          NAGICO collects personal information to provide insurance services. For more
          details,&nbsp;
          <TextLight style={styles.link}>view our privacy policy</TextLight>
        </TextLight>
        <View style={styles.buttonsBlock}>
          <WithBorderButton title='No' style={styles.button} onPress={onNo} />
          <PrimaryButton title='Yes' style={styles.button} onPress={onYes} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: SIZE.mediumIndent,
    justifyContent: 'center',
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginTop: SIZE.minIndent,
  },
  description: {
    marginTop: SIZE.mediumIndent,
  },
  buttonsBlock: {
    flexDirection: 'row',
    marginTop: SIZE.mediumIndent,
    justifyContent: 'space-between',
  },
  button: {
    flexBasis: '46%',
  },
  link: {
    textDecorationLine: 'underline',
  },
  indent: {
    marginLeft: SIZE.minIndent,
  },
});

export default AskPolicyScreen;
