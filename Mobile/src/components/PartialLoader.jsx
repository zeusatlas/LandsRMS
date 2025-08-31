import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing, Dimensions } from 'react-native';
import { COLORS } from '../styles/theme';

const PartialLoader = () => {
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
    <View style={styles.overlay}>
      <Animated.View style={[styles.orbit, { transform: [{ rotate: rotation }] }]}>
        <View style={[styles.dot, styles.redDot, { transform: [{ translateY: -20 }] }]} />
        <View style={[styles.dot, styles.blueDot, { transform: [{ rotate: '120deg' }, { translateY: -15 }] }]} />
        <View style={[styles.dot, styles.greenDot, { transform: [{ rotate: '240deg' }, { translateY: -15 }] }]} />
      </Animated.View>
    </View>
  );
};

export default PartialLoader;

const DOT_SIZE = 16;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbit: {
    width: 80,
    height: 80,
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
