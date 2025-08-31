import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Label from './Label';
import { COLORS } from '../../styles/theme';

const Switch = ({
  icon,
  label = 'Toggle',
  containerStyle,
  labelStyle,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const switchAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    const toValue = isSwitchOn ? 0 : 1;
    Animated.timing(switchAnim, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsSwitchOn(!isSwitchOn);
  };

  const translateX = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  const backgroundColor = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.silver, COLORS.basic],
  });

  return (
    <View style={[styles.switchContainer, containerStyle]}>
      {icon && (
        <Ionicons name={icon} size={16} color={COLORS.secondary} style={styles.icon} />
      )}
      <Label style={[styles.switchLabel, labelStyle]}>{label}</Label>
      <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
        <Animated.View style={[styles.switch, { backgroundColor }]}>
          <Animated.View style={[styles.switchCircle, { transform: [{ translateX }] }]} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  icon: {
    marginRight: 6,
  },
  switchLabel: {
    fontSize: 14,
    color: COLORS.secondary,
    marginRight: 10,
  },
  switch: {
    width: 50,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 3,
  },
  switchCircle: {
    width: 19,
    height: 19,
    borderRadius: 9.5,
    backgroundColor: 'white',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
