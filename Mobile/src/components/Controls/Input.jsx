
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Label from './Label';
import { COLORS } from '../../styles/theme';

const Input = ({
  icon,
  label,
  placeholder,
  style,
  containerStyle,
  labelStyle,
  isPassword,
  isMoney,
  isPhone,
  value = '',
  onFocus,
  onBlur,
  onChangeText,
  readOnly = false, 
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setSecure] = useState(!!isPassword);

  const shouldFloatLabel = isFocused || value?.length > 0;
  const floatLabel = label || placeholder || '';

  // handle formatting for money and phone
  const handleChangeText = (text) => {
    if (readOnly) return;  // Don't update the value if it's readOnly

    let formattedText = text;

    if (isMoney) {
      formattedText = formattedText.replace(/[^0-9.]/g, '');
      if (formattedText.indexOf('.') !== -1) {
        const [integer, decimal] = formattedText.split('.');
        formattedText = `${integer}.${decimal.substring(0, 2)}`;
      }
      if (formattedText.startsWith('.')) {
        formattedText = '0' + formattedText;
      }
    }

    if (isPhone) {
      formattedText = formattedText.replace(/[^0-9+]/g, '');
      if (formattedText.startsWith('+')) {
        formattedText = '+' + formattedText.slice(1).replace(/\+/g, '');
      } else {
        formattedText = formattedText.replace(/\+/g, '');
      }
    }

    onChangeText?.(formattedText);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {shouldFloatLabel && (
        <Label style={[styles.floatingLabel, labelStyle]}>{floatLabel}</Label>
      )}

      <View style={styles.inputWrapper}>
        {icon && (
          <Ionicons name={icon} size={16} color={COLORS.secondary} style={styles.icon} />
        )}

        <TextInput
          {...rest}
          value={value}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          onChangeText={handleChangeText}
          style={[styles.input, style]}
          placeholder={!shouldFloatLabel ? floatLabel : ''}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secure}
          keyboardType={
            isMoney ? 'numeric' : isPhone ? 'phone-pad' : 'default'
          }
          editable={!readOnly}  // Make the TextInput non-editable if readOnly is true
        />

        {isPassword && !readOnly && (  // Only show the password toggle if the field is not read-only
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? 'eye-off' : 'eye'}
              size={18}
              color={COLORS.secondary}
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;






const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    borderColor: COLORS.secondary,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 40,
    width: '100%',
    fontSize: 12,
    color: COLORS.secondary,
  },
  floatingLabel: {
    position: 'absolute',
    top: -20,
    left: 5,
    paddingHorizontal: 4,
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.secondary,
    zIndex: 1,
  },
});
