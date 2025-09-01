import { SafeAreaView, TouchableOpacity, View, StyleSheet, StatusBar, Platform } from "react-native";
import React, { useState, useCallback } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, useAnimatedScrollHandler } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import Label from "../components/Controls/Label";
import { COLORS, GLOBAL_STYLES } from "../styles/theme";
import MadeForMe from "../components/MadeForMe";
import AnnouncementCard from "../components/AnnouncementCard";
import AdsSlider from "../components/AdsSlider";
import NOTIFICATION_DATA from "../models/Notification";




const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showFABs, setShowFABs] = useState(false);

  // FAB animations
  const translateY = useSharedValue(50);
  const opacity = useSharedValue(0);
  const fabOpacity = useSharedValue(0);
  const fabTranslateY = useSharedValue(20);

  // Sticky tab bar animation
  const tabBarTranslateY = useSharedValue(-60);
  const lastOffsetY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentY = event.contentOffset.y;
      if (currentY > lastOffsetY.value + 5) {
        tabBarTranslateY.value = withTiming(0, { duration: 250 });
      } else if (currentY < lastOffsetY.value - 5) {
        tabBarTranslateY.value = withTiming(-70, { duration: 250 });
      }
      lastOffsetY.value = currentY;
    },
  });

  const tabBarStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: tabBarTranslateY.value }],
  }));

  useFocusEffect(
    useCallback(() => {
      translateY.value = withTiming(0, { duration: 400, easing: Easing.out(Easing.exp) });
      opacity.value = withTiming(1, { duration: 400 });
      return () => {
        translateY.value = 50;
        opacity.value = 0;
        fabOpacity.value = 0;
        fabTranslateY.value = 20;
        setShowFABs(false);
      };
    }, [])
  );

  const mainFABStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const extraFABStyle = useAnimatedStyle(() => ({
    opacity: fabOpacity.value,
    transform: [{ translateY: fabTranslateY.value }],
    gap: 12,
  }));

  const toggleFABs = () => {
    setShowFABs((prev) => !prev);
    fabOpacity.value = withTiming(showFABs ? 0 : 1, { duration: 300 });
    fabTranslateY.value = withTiming(showFABs ? 20 : 0, {
      duration: 300,
      easing: Easing.out(Easing.ease),
    });
  };

  return (
    <SafeAreaView style={GLOBAL_STYLES.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <View style={styles.container}>
        {/* Sticky Tab Bar */}
        <Animated.View style={[styles.tabBarContainer, tabBarStyle]}>
          <TouchableOpacity style={[styles.tabButton, activeTab === "general" && styles.activeTab]} onPress={() => setActiveTab("general")} >
            <Label style={[styles.tabLabel, activeTab === "general" && styles.activeLabel]}>
              General Public
            </Label>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === "personal" && styles.activeTab]} onPress={() => setActiveTab("personal")} >
            <Label style={[styles.tabLabel, activeTab === "personal" && styles.activeLabel]}>
              Made for Me
            </Label>
          </TouchableOpacity>
        </Animated.View>

        {/* Scrollable Content (Ads + List) */}
        <Animated.ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} scrollEventThrottle={16} onScroll={scrollHandler} >
          <View style={{ marginHorizontal: 10 }}>
            <AdsSlider />
          </View>

          {activeTab === "general"
            ? NOTIFICATION_DATA.map((item) => <AnnouncementCard key={item.id} item={item} />)
            : NOTIFICATION_DATA.slice(0, 5).map((item) => <MadeForMe key={item.id} item={item} />)}
        </Animated.ScrollView>
      </View>

      {/* Floating Action Buttons */}
      <Animated.View style={[GLOBAL_STYLES.fabContainer, mainFABStyle]}>
        <Animated.View style={extraFABStyle}>
          <TouchableOpacity style={GLOBAL_STYLES.fab}>
            <Ionicons name="people-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={GLOBAL_STYLES.fab}>
            <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity style={GLOBAL_STYLES.fabs} onPress={toggleFABs}>
          <Ionicons name={showFABs ? "close" : "list"} size={18} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: { marginHorizontal: -20 },
      ios: { marginHorizontal: 0 },
    }),
  },
  tabBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.white,
    zIndex: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: "15%",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  tabLabel: {
    fontSize: 14,
    fontFamily: "Inter_900Black",
    color: COLORS.gray,
  },
  activeLabel: {
    color: COLORS.primary,
  },
});
