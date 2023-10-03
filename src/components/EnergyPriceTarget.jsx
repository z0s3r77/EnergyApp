import {StyleSheet, Text, View} from "react-native";
import {convertToKWh} from "../functions/convertToKwh";


export const EnergyPriceTarget = ({price,type, backgroundColour,title}) => {
    return (
        <>
            <View key={type} style={[styles.container2, { backgroundColor: backgroundColour}]}>
                <View style={styles.container4}>
                    <Text style={styles.h2}> {title}  {convertToKWh(price.price)} €/kWh </Text>
                    <View style={styles.container5}>
{/*
                        <Text style={styles.h3}>Hour: {price.hour}</Text>
*/}
                    </View>
                </View>
            </View>
        </>
    )
}

export const styles = StyleSheet.create({
    container4: {
        flexDirection: 'column', // Coloca los elementos en línea
        justifyContent: 'space-between', // Distribuye los elementos de manera uniforme en el espacio disponible
        alignItems: 'center',
        paddingHorizontal: 20, // Ajusta el espacio horizontal entre los elementos// Alinea los elementos verticalmente al centro
        marginBottom: 20,
    },
    container5: {
        marginHorizontal: 15,

    },
    container2: {
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 10,
    },
    scrollView: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    text: {
        fontSize: 42,
    },
    h1: {
        fontSize: 42
    },
    h2: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10,
        color: "white"
    },
    h3: {
        fontSize: 20
    }
});
