import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GameSelectButton from '../components/GameSelectButton'
import { useRouter } from 'expo-router'

export default function gameSelectScreen() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.selectInner}>
                <Text style={styles.title}>Select the mode you want to play</Text>
                <View style={styles.buttonContainer}>
                    <GameSelectButton title={'normal'} destination={() => router.push('screens/gameScreen')} description={'just the normal game. take your time and get as far as you can get'} />
                    <GameSelectButton title={'timed'} destination={() => router.push('screens/timedGameScreen')} description={'like normal, but timed, so there\'s actual insentive to go fast'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    selectInner: {
        width: '100%',
        height: '80%',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 60,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        width: '100%',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 60
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 10,
        marginBottom: 'auto'
    },
})