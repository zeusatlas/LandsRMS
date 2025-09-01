import React, { useRef, useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

// ✅ Universal ads array (local + remote, same structure)
const adsImages = [
    // Local assets
    Image.resolveAssetSource(require("assets/ads.jpeg")),
    Image.resolveAssetSource(require("assets/ads1.jpg")),
    Image.resolveAssetSource(require("assets/ads3.jpeg")),
    Image.resolveAssetSource(require("assets/ads4.jpeg")),
    Image.resolveAssetSource(require("assets/ads5.jpg")),
    Image.resolveAssetSource(require("assets/ads6.png")),
    Image.resolveAssetSource(require("assets/ads7.jpg")),

    // Remote URLs (you can add/remove freely later)
    //   { uri: "https://picsum.photos/800/350?random=1" },
    //   { uri: "https://picsum.photos/800/350?random=2" },
];

const AdsSlider = () => {
    const pagerRef = useRef(null);
    const [page, setPage] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const nextPage = (page + 1) % adsImages.length;
            pagerRef.current?.setPage(nextPage);
            setPage(nextPage);
        }, 3000);

        return () => clearInterval(interval);
    }, [page]);

    return (
        <PagerView ref={pagerRef} style={styles.adsPager} initialPage={0}  onPageSelected={(e) => setPage(e.nativeEvent.position)}>
            {adsImages.map((src, index) => (
                <View key={index} style={styles.adsPage}>
                    <Image source={src} style={styles.adsImage} resizeMode="stretch" />
                </View>
            ))}
        </PagerView>
    );
};

export default AdsSlider;

const styles = StyleSheet.create({
    adsPager: {
        height: 150,
        width: "100%",
    },
    adsPage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    adsImage: {
        width: "100%",
        height: "100%",
        borderRadius: 4,
    },
});
