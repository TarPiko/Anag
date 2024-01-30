import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextRegular from '../UI/TextRegular';
import SelectDropdown from 'react-native-select-dropdown';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import { ArrowDownIcon } from '../../assets/icons';

const DropdownBlock = ({ label, data, style, onSelect, dropdownRef = null }) => {
  return (
    <View style={[styles.container, style]}>
      <TextRegular style={styles.label}>{label}</TextRegular>
      <SelectDropdown
        ref={dropdownRef}
        data={data}
        onSelect={onSelect}
        buttonTextAfterSelection={selectedItem => selectedItem}
        rowTextForSelection={item => item}
        buttonStyle={styles.buttonStyle}
        renderDropdownIcon={() => (
          <View style={{ marginRight: SIZE.minIndent }}>
            <ArrowDownIcon color={COLORS.green} />
          </View>
        )}
        rowTextStyle={styles.textStyle}
        buttonTextStyle={styles.textStyle}
        dropdownStyle={styles.dropdownStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginBottom: SIZE.minIndent,
  },
  buttonStyle: {
    backgroundColor: COLORS.light,
    borderRadius: 50,
    width: '100%',
    height: 54,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  textStyle: {
    fontFamily: 'Poppins-Regular',
  },
  dropdownStyle: {
    borderRadius: 12,
  },
});

export default DropdownBlock;
