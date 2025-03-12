import { StyleSheet, View, Pressable, Text, Vibration } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function gameScreen() {
    const router = useRouter();

    const [circleColumn, setCircleColumn] = useState([]);
    const [scoreCount, setScoreCount] = useState(0);
    const [highScoreCount, setHighScoreCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        initialFill();
    }, []);

    useEffect(() => {
        let timer;
        if (gameStart && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setGameOver(true);
            setScoreCount('game over');
            setGameStart(false)
        }
        return () => clearInterval(timer);
    }, [gameStart, timeLeft]);

    function initialFill() {
        let newColumn = [];
        for (let i = 0; i < 5; i++) {
            let randomColor = Math.random() < 0.5 ? "blue" : "red";
            newColumn.push({ color: randomColor });
        }
        setCircleColumn(newColumn);
    }

    function processColumn(color) {
        if (circleColumn.length > 0 && circleColumn[circleColumn.length - 1].color === color) {
            setGameStart(true);
            let newColumn = [...circleColumn];
            newColumn.pop();
            let newColor = Math.random() < 0.5 ? "blue" : "red";
            newColumn.unshift({ color: newColor });
            setCircleColumn(newColumn);
            setScoreCount(prevScore => {
                let newScore = prevScore + 1;
                setHighScoreCount(prevHighScore => Math.max(prevHighScore, newScore));
                Vibration.vibrate(100);
                return newScore;
            });
        } else {
            setGameOver(true);
            setGameStart(false);
            setScoreCount('game over');
        }
    }

    function resetGame() {
        setGameOver(false);
        setScoreCount(0);
        setTimeLeft(10);
        setGameStart(false);
        initialFill();
    }

    return (
        <View style={styles.container}>
            <View style={styles.gameInner}>
                <Text style={styles.highScore}>{ gameStart ? timeLeft : 'highscore:' + highScoreCount}</Text>
                <View style={styles.columnContainer}>
                    {circleColumn.map((item, index) => (
                        <View key={index} style={[styles.circle, { backgroundColor: item.color }]} />
                    ))}
                </View>
                <Text style={styles.score}>{scoreCount}</Text>
                <View style={styles.buttonContainer}>
                    <Pressable style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => gameOver ? resetGame() : processColumn("blue")}>
                        <Text style={styles.buttonText}>{gameOver ? 'again' : 'blue'}</Text>
                    </Pressable>
                    <Pressable style={[styles.button, { backgroundColor: 'red' }]} onPress={() => gameOver ? router.push('/') : processColumn("red")}>
                        <Text style={styles.buttonText}>{gameOver ? 'home' : 'red'}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
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
    gameInner: {
        width: '100%',
        height: '80%',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    columnContainer: {
        borderColor: '#cccccc',
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    highScore: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    score: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 70,
    },
    button: {
        width: '40%',
        height: '100%',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
});