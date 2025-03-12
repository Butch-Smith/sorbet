import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'

export default function howToPlayScreen() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.howToInner}>
                <Text style={styles.title}>welcome to sorbet!</Text>
                <Text style={styles.subText}>in this game you'll sort circles by pressing their respective buttons</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>if the bottom circle is <Text style={styles.redText}>red</Text>, you gotta press the <Text style={styles.redText}>red</Text> button</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>if the bottom circle is <Text style={styles.blueText}>blue</Text>, you gotta press the <Text style={styles.blueText}>blue</Text> button</Text>
                </View>
                <Text style={styles.subText}>the game ends when you press the wrong button. have fun!</Text>
                <Pressable style={{ width: '100%' }} onPress={() => router.back()}>
                    <Text style={styles.startButton}>back</Text>
                </Pressable>
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
    title: {
        width: '100%',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18
    },
    howToInner: {
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
    textContainer: {
        width: '100%'
    },
    redText: {
        color: 'red'
    },
    blueText: {
        color: 'blue'
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
})