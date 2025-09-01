import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Input from '../../components/Controls/Input';
import Button from '../../components/Controls/Button';
import { COLORS } from '../../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Config from '../../helper/Config';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'MainTabs' }],
        });
    };

    const handleFingerprintLogin = () => {
        console.log('Fingerprint login pressed');
    };

    return (
        <View style={styles.container}>

            <LinearGradient colors={[COLORS.secondary, COLORS.primary]} style={styles.headerCard} start={{ x: 0.5, y: 0.85 }} end={{ x: 0.5, y: 1 }} >
                <Image source={require('assets/logo_light.png')} style={styles.logo} resizeMode="contain" />
                <Text style={styles.title}>{Config[0].APP_ALLIASE}</Text>
            </LinearGradient>

            <View style={styles.form}>
                <Text style={styles.subtitle}>Welcome you can login to continue</Text>
                <Input placeholder="Username" icon="person" />
                <Input placeholder="Password" isPassword={true} icon="lock-closed" />

                <View style={styles.buttonRow}>
                    <Button title="Login" onPress={handleLogin} style={{ marginHorizontal: 5 }} />
                    <Button title="Fingerprint" onPress={handleFingerprintLogin} type="outline" icon="finger-print" style={{ marginHorizontal: 5 }} />
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Don’t have an account? <Text style={styles.signupText}>Sign Up</Text>
                </Text>
            </View>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
    },
    headerCard: {
        borderRadius: 5,
        marginHorizontal: 25,
        paddingVertical: 40,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    logo: {
        width: 210,
        height: 60,
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Inter_900Black',
        color: COLORS.white,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.primary,
        marginBottom: 20,
        textAlign: 'center',
    },
    form: {
        width: '100%',
        paddingHorizontal: 25,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    footer: {
        alignItems: 'center',
        marginTop: 30,
    },
    footerText: {
        color: COLORS.gray,
        fontSize: 12,
    },
    signupText: {
        color: COLORS.primary,
        fontWeight: '600',
    },
});
