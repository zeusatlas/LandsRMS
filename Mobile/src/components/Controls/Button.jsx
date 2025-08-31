import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../styles/theme';
import Label from './Label';

const Button = ({
  title = 'Button',
  icon, 
  iconPosition = 'left',
  style,
  textStyle,
  onPress,
  type = 'solid',
  ...props
}) => {
  const isOutline = type === 'outline'
  return (
    <TouchableOpacity {...props} style={[styles.button, isOutline && styles.outlineButton, style]} onPress={onPress} activeOpacity={0.7} >
      <View style={styles.content}>
        {icon && iconPosition === 'left' && (
          <Ionicons
            name={icon}
            size={16}
            color={isOutline ? COLORS.primary : COLORS.white}
            style={styles.icon}
          />
        )}

        <Label style={[styles.text, isOutline && styles.outlineText, textStyle]}>{title}</Label>

        {icon && iconPosition === 'right' && (
          <Ionicons
            name={icon}
            size={16}
            color={isOutline ? COLORS.primary : COLORS.white}
            style={styles.icon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 2,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    color: COLORS.white,
  },
  outlineText: {
    color: COLORS.primary,
  },
});
