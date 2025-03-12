import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function GameSelectButton({ title, description, destination }) {
    const [modalState, setModalState] = useState(false)
    function openModal() {
        setModalState(!modalState)
    }

    return (
        <Pressable style={{ width: '100%' }} onPress={openModal}>
            <View style={styles.gameButton}>
                <Text style={styles.title}>{title}</Text>
                <Text style={[styles.description, modalState ? { display: 'unset' } : { display: 'none' }]}>{description}</Text>
                <Pressable style={modalState ? { display: 'unset' } : { display: 'none' }} onPress={destination}>
                    <View style={[styles.innerButton, modalState ? { display: 'unset' } : { display: 'none' }]}>
                        <Text style={[styles.buttonText, modalState ? { display: 'unset' } : { display: 'none' }]}>start</Text>
                    </View>
                </Pressable>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    gameButton: {
        width: '100%',
        color: 'black',
        padding: 10,
        borderRadius: 5,
        gap: 10,
        backgroundColor: '#e8e8e8',
        textAlign: 'center',
        fontSize: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    buttonText: {
        fontSize: 20,
        padding: 10,
        borderRadius: 5,
    },
    innerButton: {
        backgroundColor: 'lightgray',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center'
    }
})