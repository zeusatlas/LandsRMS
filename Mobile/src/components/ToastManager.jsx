import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import Toasts from '../utils/Toast';
import Label from './Controls/Label';

const { width } = Dimensions.get('window');

const ToastManager = () => {
  const [toast, setToast] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Toasts.setRef({
      show: ({ type, title, message, position = 'top', duration = 4000, onClose }) => {
        setToast({ type, title, message, position });
  
        translateY.setValue(position === 'bottom' ? 50 : -50);
        opacity.setValue(0);
  
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }),
        ]).start();
  
        setTimeout(() => {
          Animated.parallel([
            Animated.timing(opacity, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: position === 'bottom' ? 50 : -50,
              duration: 400,
              useNativeDriver: true,
            }),
          ]).start(() => {
            setToast(null);
            if (typeof onClose === 'function') {
              onClose();
            }
          });
        }, duration);
      },
    });
  }, []);
  

  if (!toast) return null;

  return (
    <Animated.View
      style={[ styles.toastContainer, toast.position === 'bottom' ? styles.bottom : styles.top,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={[styles.toastBox, styles[toast.type]]}>
        <Label style={styles.title}>{toast.title}</Label>
        {!!toast.message && <Text style={styles.subtitle}>{toast.message}</Text>}
      </View>
    </Animated.View>
  );
};

export default ToastManager;

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  top: {
    top: 50,
  },
  bottom: {
    bottom: 50,
  },
  toastBox: {
    padding: 14,
    borderRadius: 2,
    maxWidth: width - 40,
    backgroundColor: COLORS.white,
    borderBottomWidth: 4,
    borderWidth: 0.1
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.fb_dark,
    fontSize: 12,
    marginBottom: 2,
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 10,
  },
  info: {
    borderBottomColor: COLORS.info,
  },
  success: {
    borderBottomColor: COLORS.success,
  },
  error: {
    borderBottomColor: COLORS.danger,
  },
});
