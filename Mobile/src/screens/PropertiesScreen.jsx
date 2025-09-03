import React, { useRef, useState, useEffect, useCallback } from "react";
import { View, Animated, Dimensions, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GLOBAL_STYLES, COLORS } from "../styles/theme";
import Label from "../components/Controls/Label";
import Button from "../components/Controls/Button";
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useSharedValue, withTiming, Easing, } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';


const { width } = Dimensions.get("window");

const PROPERTIES = [
  {
    id: 1,
    title: "3 ACRES NEW ACHIMOTA",
    subtitle: "Ownership & Registration",
    desc: "Manage ownership details for your 3-acre land in New Achimota, including registration records, survey plans, and official land titles.",
    image: "https://www.graphic.com.gh/images/2024/aug/24/aaalands.jpg",
  },
  {
    id: 2,
    title: "450 ACRES VINEYARD ANNEX",
    subtitle: "Leases & Transactions",
    desc: "Review lease agreements, track transactions, and check payment history for your 450 acres at Vineyard Annex.",
    image: "https://ghenvironment.com/public/Images/1721231654-maxresdefault.jpg.jpg",
  },
  {
    id: 3,
    title: "200 ACRES KUMASI APUTO",
    subtitle: "Survey & GIS Data",
    desc: "Access GIS survey data, digital boundary maps, and location details for your 200 acres in Kumasi Aputo.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqeeWZJBXksXsIp9Gy5HpHo85Qmb1o2GKUJ1DQaXgTwPxk1A8v9_km8sP1dj2xgn8wrg&usqp=CAU",
  },
];

export default function PropertiesScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentCard, setCurrentCard] = useState(PROPERTIES[0]);

  // Listen to changes in the scrollX value
  useEffect(() => {
    const listenerId = scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      if (index >= 0 && index < PROPERTIES.length) {
        setCurrentCard(PROPERTIES[index]);
      }
    });
    // Clean up the listener when the component unmounts
    return () => {
      scrollX.removeListener(listenerId);
    };
  }, []);

  const translateY = useSharedValue(50);
  const opacity = useSharedValue(0);
  const bottomSheetRef = useRef(null);
  const snapPoints = [200, 400];

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  useFocusEffect(
    useCallback(() => {
      translateY.value = withTiming(0, { duration: 400, easing: Easing.out(Easing.exp) });
      opacity.value = withTiming(1, { duration: 400 });

      return () => {
        translateY.value = 50;
        opacity.value = 0;
        bottomSheetRef.current?.close();
      };
    }, [])
  );


  return (
    <Animated.ScrollView style={GLOBAL_STYLES.container} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      
      <View>
        <Label style={styles.title}>My Acquired Properties</Label>
        <Label style={styles.desc}>Slide left and right to switch between your aquired properties, in your name.</Label>
      </View>

      <View style={styles.sliderContainer}>
        <Animated.FlatList
          data={PROPERTIES}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item }) => (
            <View style={styles.sliderItem}>
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <LinearGradient colors={["rgba(0,0,0,0.7)", "transparent"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 40 }} style={styles.gradient} >
                  <Label style={styles.itemTitle}>{item.title}</Label>
                  <Label style={styles.subtitle}>{item.subtitle}</Label>
                  <Label style={styles.desc}>{item.desc}</Label>
                  <Button title="Assignment" style={styles.button} icon="chevron-forward-sharp" onPress={handleOpenBottomSheet} />
                </LinearGradient>
              </View>
            </View>
          )}
        />
      </View>
      
      <View style={styles.detailsCard}>
        <Label style={styles.title} >Property Details</Label>
        <Label >{currentCard.desc}</Label>
        <View style={styles.hr}></View>

        <Label >Estimated statistics on the sais properties own by you, statistics made for this year.</Label>
      </View>

      <View style={styles.statCard}>
        <Label style={styles.title} >Statistical Evaluation</Label>
        <Label >Estimated statistics on the sais properties own by you, statistics made for this year.</Label>
        <View style={styles.hr}></View>

      </View>


      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={-1} enablePanDownToClose={true} style={GLOBAL_STYLES.bottomSheet}>
        <BottomSheetScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={GLOBAL_STYLES.bottomSheetContent}>
            <Label style={{ fontSize: 18, fontWeight: 'bold' }}>Bottom Sheet Content</Label>
            <Label>Here you can add any content you want.</Label>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>

    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({

  sliderContainer: {
    height: 200,
    marginBottom: 10,
  },
  sliderItem: {
    width,
    paddingRight: 10,
  },
  card: {
    borderRadius: 4,
    overflow: "hidden",
    height: "100%",
    borderBottomWidth: 2,
    borderColor: COLORS.tertiary,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradient: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
  },

  itemTitle: {
    color: COLORS.success,
    fontSize: 18,
    fontFamily: 'Roboto_900Black'
  },
  
  title: {
    color: COLORS.gray,
    fontSize: 16,
    fontFamily: 'Roboto_900Black',
    marginBottom: 5
  },

  subtitle: {
    color: COLORS.white,
    fontSize: 14,
  },
  desc: {
    color: COLORS.silver,
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(46, 158, 117, 0.4)",
  },
  statCard: {
    height: 300,
    marginBottom: 25,
    backgroundColor: COLORS.whitesmoke,
    padding: 16,
  },
  detailsCard: {
    flex: 1,    
    backgroundColor: COLORS.white,
    padding: 16,
    marginBottom: 10,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.border3,
    marginVertical: 4
  }
  
});