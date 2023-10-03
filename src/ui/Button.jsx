import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';

export default function CircularButton(props) {
    const { onPress, title = 'Save' } = props;

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20, // Ajusta la posición vertical según tus necesidades
        right: 20, // Ajusta la posición horizontal según tus necesidades
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50, // Establece el ancho y alto para hacerlo circular
        height: 50,
        borderRadius: 25, // La mitad del ancho o alto para hacerlo circular
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});