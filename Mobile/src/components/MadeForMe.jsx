import { Image, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/theme';
import Label from './Controls/Label';
import Button from '../components/Controls/Button';
import Ionicons from "react-native-vector-icons/Ionicons";

const MadeForMe = ({ item }) => {

    const getAvatarColor = () => {
        const type = item.type?.toLowerCase();
        if (type === 'emergency' || type === 'reminder') return COLORS.danger;
        if (type === 'alert' || type === 'confirmation') return COLORS.secondary;
        return COLORS.info;
    };

    return (
        <View style={[styles.madeForMeCard]}>
            {/* Header */}
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
                <View style={styles.madeForMeMedia}>
                    <Image source={item.image} resizeMode='stretch' style={{ width: 360, height: 400, borderRadius: 5 }} />
                </View>
            )}
            <Button title='Follow Up' icon='thumbs-up' style={{ marginTop: 15, marginLeft: 30 }} />
        </View>
    );
};


export default MadeForMe;

const horizontalPadding = Platform.select({
    android: { paddingHorizontal: 30 },
    ios: { paddingHorizontal: 10 },
});

const styles = StyleSheet.create({

    madeForMeCard: {
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        marginBottom: 12,
        marginHorizontal: 15,
        borderRadius: 10,
        overflow: "hidden",
    },
    madeForMeMedia: {
        backgroundColor: COLORS.border3,
        marginTop: 12,
        marginLeft: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },

    header: {
        flexDirection: "row",
        marginBottom: 8,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: COLORS.secondary,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center'
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
        lineHeight: 17,
        color: COLORS.silver,
        ...horizontalPadding,
    },

})
