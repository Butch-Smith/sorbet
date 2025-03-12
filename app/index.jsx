import { StyleSheet, View, Pressable, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router'

export default function Index() {
    const router = useRouter();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.homeInner}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>sorbet</Text>
                        <Text style={styles.subtitle}>a game by kiwi</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={{ width: '100%' }} onPress={() => router.push('screens/gameSelectScreen')}>
                            <Text style={styles.startButton}>play</Text>
                        </Pressable>
                        <Pressable style={{ width: '100%' }} onPress={() => router.push('screens/howToPlayScreen')}>
                            <Text style={styles.startButton}>how to play</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 50,
        
    },
    subtitle: {
        fontSize: 20,
        color: '#999',
        
    },
    homeInner: {
        width: '100%',
        height: '80%',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 40,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 10,
    },
    startButton: {
        color: 'black',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'lightgray',
        textAlign: 'center',
        fontSize: 20,
    }
});
