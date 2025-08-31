import React from 'react';
import { Text} from 'react-native';
import { COLORS } from "styles/theme";

const Label = ({ children, style, ...props }) => {
  const defaultStyle = { fontSize: 12, fontFamily: 'Roboto_400Regular', color: COLORS.gray };

  return (
    <Text {...props} style={[defaultStyle, style]} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default Label;
