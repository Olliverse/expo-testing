import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';
import Button from '../custom/Button';
import {useThemeState} from '../../contexts/ThemeContext';
import {useI18NState} from '../../contexts/I18NContext';
import {db} from '../../firebaseConfig';
import {useUser} from "../../contexts/UserContext";

export default function FormExamplePage() {
    const [service, setService] = useState('');
    const [password, setPassword] = useState('');
    const [passwordEntries, setPasswordEntries] = useState([]);
    const {theme} = useThemeState();
    const {i18n} = useI18NState();
    const {user} = useUser();

    useEffect(() => {
        if (user?.uid) {
            fetchPasswordEntries();
        }
    }, [user]);

    const handleSubmit = async () => {
        if (!user?.uid) {
            return;
        }

        if (!service || !password) {
            Alert.alert('Error', i18n.t('error-fill-both'));
            return;
        }

        try {
            await addDoc(collection(db, 'passwords'), {
                uid: user.uid,
                service: service,
                password: password,
                created_at: new Date()
            });
            Alert.alert('Success', i18n.t('success-add-pw'));
            setService('');
            setPassword('');
            fetchPasswordEntries();
        } catch (error) {
            console.error('Error adding password entry: ', error);
            Alert.alert('Error', i18n.t('error-add-pw'));
        }
    };

    const fetchPasswordEntries = async () => {
        try {
            const q = query(collection(db, 'passwords'), where('uid', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const entries = querySnapshot.docs.map(doc => (
                {id: doc.id, uid: user.uid, ...doc.data()}
            ));
            setPasswordEntries(entries);
        } catch (error) {
            console.error('Error fetching password entries: ', error);
            Alert.alert('Error', i18n.t("error-fetch"));
        }
    };

    if (!user?.uid) {
        return (
            <Text style={[styles.message, {color: theme.text}]}>
                {i18n.t("password-manager-login-required")}
            </Text>
        );
    } else {
        return (
            <ScrollView style={styles.container}>
                <Text style={[styles.header, {color: theme.text}]}>PW-Manager (Form Use-Case)</Text>
                <Text style={[styles.title, {color: theme.text}]}>{i18n.t('add-password')}</Text>
                <TextInput
                    style={[styles.input, {borderColor: theme.borderColor, color: theme.text}]}
                    placeholder={i18n.t('service-name')}
                    value={service}
                    onChangeText={setService}
                />
                <TextInput
                    style={[styles.input, {borderColor: theme.borderColor, color: theme.text}]}
                    placeholder={i18n.t('password')}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button label={i18n.t('save-password')} callback={handleSubmit}/>

                <Text style={[styles.title, {color: theme.text, marginTop: 20}]}>{i18n.t('saved-passwords')}</Text>
                {passwordEntries.map(entry => (
                    <View key={entry.id} style={styles.passwordEntry}>
                        <Text style={[styles.serviceName, {color: theme.text}]}>{entry.service}</Text>
                        <Text style={[styles.password, {color: theme.text}]}>
                            {i18n.t('password')}: ********
                        </Text>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 30
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    passwordEntry: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    serviceName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    password: {
        fontSize: 14,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});

