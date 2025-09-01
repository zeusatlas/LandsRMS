
import { Image, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/theme';
import Label from './Controls/Label';
import Ionicons from "react-native-vector-icons/Ionicons";
import IonAnt from "react-native-vector-icons/AntDesign";

const AnnouncementCard = ({ item }) => {

    const getAvatarColor = () => {
        const type = item.type?.toLowerCase();
        if (type === 'emergency' || type === 'reminder') return COLORS.danger;
        if (type === 'alert' || type === 'confirmation') return COLORS.secondary;
        return COLORS.info;
    };

    return (
        <View style={styles.announcementCard}>
            <View style={styles.header}>
                <View style={[styles.avatar, { backgroundColor: getAvatarColor() }]}>
                    {item.from?.toLowerCase() === "system" ? (
                        <Ionicons name='notifications' size={24} color={COLORS.white} />
                    ) : (
                        <Image source={require('assets/logo_main.png')} resizeMode='center' style={{ width: 58 }} />
                    )}
                </View>
                <View>
                    <Label style={styles.name}>{item.name}</Label>
                    <Label style={styles.meta}>
                        {item.username} • {item.date}
                    </Label>
                </View>
            </View>
            <Label style={styles.content}>{item.content}</Label>

            {item.image && (
                <View style={styles.media}>
                    <Image source={item.image} resizeMode='contain' style={{ height: 450 }} />
                </View>
            )}

            <View style={styles.mainActionControl}>
                <View style={styles.sideActions}>
                    <View style={styles.mainActionControlItem}>
                        <Ionicons name="heart-outline" style={[styles.actionIcon, { fontSize: 17 }]} />
                        <Label style={styles.mainActionText}>8K</Label>
                    </View>
                    <View style={styles.mainActionControlItem}>
                        <IonAnt name="dislike2" style={styles.actionIcon} />
                        <Label style={styles.mainActionText}>30K</Label>
                    </View>
                </View>
                <View style={styles.sideActions}>
                    <View style={styles.mainActionControlItem}>
                        <Ionicons name="bookmarks-outline" style={styles.actionIcon} />
                        <Label style={styles.mainActionText}>30K</Label>
                    </View>
                </View>
            </View>
            <Label style={styles.description}>{item.content}</Label>
        </View>
    );
};

export default AnnouncementCard;

const horizontalPadding = Platform.select({
    android: { paddingHorizontal: 15 },
    ios: { paddingHorizontal: 10 },
});


const styles = StyleSheet.create({

    announcementCard: {
        backgroundColor: COLORS.white,
        paddingVertical: 15,
        marginBottom: 8,
    },
    header: {
        flexDirection: "row",
        marginBottom: 8,
        ...horizontalPadding,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: COLORS.border3,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
    },
    meta: {
        fontSize: 14,
        color: COLORS.silver,
    },
    content: {
        fontSize: 14,
        lineHeight: 16,
        ...horizontalPadding,
        color: COLORS.silver,
    },
    media: {
        height: 450,
        backgroundColor: COLORS.border3,
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    description: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: "Roboto_400Regular",
        ...horizontalPadding,
    },
    mainActionControl: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        ...horizontalPadding,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border2,
    },
    sideActions: {
        flexDirection: "row",
    },
    mainActionText: {
        fontSize: 12,
        marginRight: 10,
        marginLeft: -4,
        fontFamily: "Roboto_400Regular",
    },
    mainActionControlItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },
    actionIcon: {
        color: COLORS.gray,
        fontSize: 15,
    },

})