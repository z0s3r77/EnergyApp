import {View, Text, StyleSheet} from 'react-native';

export const WasherTarget = ({ firstHour, secondHour }) => {
    return (
        <View style={styles.container}>
                <Text style={styles.h1}> {firstHour}h - {secondHour}h</Text>
                <Text style={styles.p}>Horas más baratas</Text>
        </View>
    );
}

export const styles = StyleSheet.create({

    container: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5f9ea0',
        borderRadius: 10,
        marginTop: 10
    },

    h1: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 10

    },
    p: {
        fontSize: 14,
        marginBottom: 10
    }

})

