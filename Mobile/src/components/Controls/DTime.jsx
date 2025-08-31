import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Label from './Label';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../../styles/theme';

const DTime = ({
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
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(value ? new Date(value) : new Date());

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      setShowPicker(false);
      return;
    }

    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${displayHours}:${displayMinutes} ${ampm}`;

    setInputValue(formattedTime);
    onChangeText?.(formattedTime);
  };

  const shouldFloatLabel = isFocused || inputValue.length > 0;
  const floatLabel = label || placeholder || '';

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

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

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={togglePicker}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[styles.input, style]}
          {...rest}
        >
          <Label style={{ color: COLORS.secondary }}>
            {inputValue || placeholder || 'Select Time'}
          </Label>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            is24Hour={false}
            onChange={handleDateChange}
            style={styles.picker}
          />
        )}
      </View>
    </View>
  );
};

export default DTime;

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
    width: '100%',
    fontSize: 12,
    color: COLORS.secondary,
    paddingVertical: 10,
  },
  picker: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#fff',
    borderRadius: 6,
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
