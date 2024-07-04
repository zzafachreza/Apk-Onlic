import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { MyHeader, MyRadio } from '../../components';
import { colors, fonts } from '../../utils';

const questions = [
    {
        question: 'Bagian tumbuhan yang berfungsi untuk fotosintesis adalah...',
        options: [
            { label: 'a. Akar', value: 0 },
            { label: 'b. Batang', value: 1 },
            { label: 'c. Daun', value: 2 },
            { label: 'd. Bunga', value: 3 }
        ],
        correctAnswer: 2
    },
    {
        question: 'Alat kelamin jantan pada bunga disebut...',
        options: [
            { label: 'a. Akar', value: 0 },
            { label: 'b. Batang', value: 1 },
            { label: 'c. Daun', value: 2 },
            { label: 'd. Bunga', value: 3 }
        ],
        correctAnswer: 3
    },
    {
        question: 'Proses pembuatan makanan pada tumbuhan disebut...',
        options: [
            { label: 'a. Akar', value: 0 },
            { label: 'b. Batang', value: 1 },
            { label: 'c. Daun', value: 2 },
            { label: 'd. Bunga', value: 3 }
        ],
        correctAnswer: 1
    },
    {
        question: 'Gas yang digunakan tumbuhan untuk fotosintesis adalah...',
        options: [
            { label: 'a. Akar', value: 0 },
            { label: 'b. Batang', value: 1 },
            { label: 'c. Daun', value: 2 },
            { label: 'd. Bunga', value: 3 }
        ],
        correctAnswer: 0
    },
];

export default function TingkatSatu({ navigation }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const backPage = () => {
        navigation.goBack()
    };


    const nextQuestion = () => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        setSelectedOption(null);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        navigation.replace('Quiz')
    };

    return (
        <ImageBackground source={require('../../assets/bgsplash.png')} style={styles.background}>
            <MyHeader judul="Yuk Coba Quiz Menarik!" onPress={backPage}/>
            {showScore ? (
                <View style={styles.scoreContainer}>
                    <Image source={require('../../assets/badge.png')} style={styles.scoreIcon} />
                    <Text style={styles.scoreText}>Skor Quiz</Text>
                    <Text style={styles.levelText}>Tingkat 1</Text>
                    <Text style={styles.score}>{score * 25}</Text>
                    <TouchableOpacity onPress={restartQuiz} style={styles.button}>
                        <Text style={styles.buttonText}>Kerjakan Soal Lagi</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            {currentQuestion + 1}. {questions[currentQuestion].question}
                        </Text>
                        {questions[currentQuestion].options.map((option, index) => (
                            <MyRadio
                                key={index}
                                selected={selectedOption === option.value}
                                onPress={() => setSelectedOption(option.value)}
                                label={option.label}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}
            {!showScore && (
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={nextQuestion} style={styles.button}>
                        <Text style={styles.buttonText}>
                            {currentQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: "100%"
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20
    },
    questionContainer: {
        marginBottom: 0,
        padding: 20,
        width: '100%',
    },
    questionText: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: fonts.primary[400],
        color: colors.primary,
        textAlign: "justify"
    },
    containerButton: {
        padding: 10
    },
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginTop: 0,
        marginBottom: 100
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: fonts.primary[600],
    },
    scoreContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    },
    scoreIcon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    scoreText: {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        color: colors.primary,
        marginBottom: 10,
    },
    levelText: {
        fontSize: 20,
        fontFamily: fonts.primary[400],
        color: colors.primary,
        marginBottom: 10,
    },
    score: {
        fontSize: 48,
        fontFamily: fonts.primary[600],
        color: colors.primary,
    }
});
