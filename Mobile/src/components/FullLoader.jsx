import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import { COLORS } from '../styles/theme';

const FullLoader = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.orbit, { transform: [{ rotate: rotation }] }]}>
        <View style={[styles.dot, styles.redDot, { transform: [{ translateY: -10 }] }]} />
        <View style={[styles.dot, styles.blueDot, { transform: [{ rotate: '120deg' }, { translateY: -10 }] }]} />
        <View style={[styles.dot, styles.greenDot, { transform: [{ rotate: '240deg' }, { translateY: -10 }] }]} />
      </Animated.View>
    </View>
  );
};

export default FullLoader;

const DOT_SIZE = 13;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbit: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    opacity: 0.9,
  },
  redDot: {
    backgroundColor: COLORS.basic,
  },
  blueDot: {
    backgroundColor: COLORS.secondary,
  },
  greenDot: {
    backgroundColor: COLORS.danger,
  },
});