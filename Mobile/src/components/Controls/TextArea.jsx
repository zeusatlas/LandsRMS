import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Label from './Label';
import { COLORS } from '../../styles/theme';

const TextArea = ({
  icon,
  label,
  placeholder,
  style,
  containerStyle,
  labelStyle,
  value,
  onFocus,
  onBlur,
  onChangeText,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChangeText = (text) => {
    setInputValue(text);
    onChangeText?.(text);
  };

  const shouldFloatLabel = isFocused || inputValue.length > 0;
  const floatLabel = label || placeholder || '';

  return (
    <View style={[styles.container, containerStyle]}>
      {shouldFloatLabel && (
        <Label style={[styles.floatingLabel, labelStyle]}>{floatLabel}</Label>
      )}

      <View style={styles.inputWrapper}>
        {icon && (
          <Ionicons
            name={icon}
            size={16}
            color={COLORS.secondary}
            style={styles.icon}
          />
        )}

        <TextInput
          {...rest}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          style={[styles.input, style]}
          placeholder={!shouldFloatLabel ? floatLabel : ''}
          placeholderTextColor={COLORS.gray}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    height: 100,
    width: '100%',
    fontSize: 12,
    color: COLORS.secondary,
    textAlignVertical: 'top',
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
