import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as Progress from 'react-native-progress';
import {getEnergyPrices} from "../store/slices/thunks";
import {EnergyPriceTarget} from "../components/EnergyPriceTarget";
import {WasherTarget} from "../components/WasherTarget";
import Button from "../ui/Button";

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getEnergyPrices())

    }, []);

    const {firstMinPrice, lastMinPrice, isLoading, maxPrice, minPrice, avgPrice} = useSelector(state => state.precioLuz)

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.h1}>Luz Hoy</Text>
                    <Text style={styles.day}>Mar 16</Text>
                </View>

                {isLoading === true ?
                    <Progress.Bar style={styles.center} progress={0.3} width={300} height={10} color={"green"}
                                  indeterminate={true}/> :

                    <ScrollView style={styles.container3}>

                        <View>
                            {firstMinPrice && <WasherTarget firstHour={firstMinPrice} secondHour={lastMinPrice}/>}
                        </View>

                        <View style={{marginTop: 20}}>
                            <Text style={styles.h2}> Precios </Text>
                            {minPrice &&
                                <EnergyPriceTarget price={minPrice} type={"minPrice"} backgroundColour={"green"}/>}
                            {avgPrice &&
                                <EnergyPriceTarget price={avgPrice} type={"avgPrice"} backgroundColour={"orange"}/>}
                            {maxPrice && <EnergyPriceTarget price={maxPrice} type={"maxPrice"} backgroundColour={"red"}/>}
                        </View>



{/*
                        //TODO mostrar el precio actual
*/}
                        <View style={{marginTop: 15}}>
                            <Text style={styles.h2}> Precio actual </Text>
                            {minPrice &&
                                <EnergyPriceTarget price={minPrice} type={"minPrice"} backgroundColour={"blue"}/>}
                        </View>

                        <View>
{/*
                            <Button/>
*/}
                        </View>

                    </ScrollView>

                }
                <StatusBar style="auto"/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', // Coloca los elementos en línea
        justifyContent: 'space-between', // Distribuye los elementos de manera uniforme en el espacio disponible
        alignItems: 'center',
        paddingHorizontal: 20, // Ajusta el espacio horizontal entre los elementos// Alinea los elementos verticalmente al centro
        marginBottom: 20, // Espacio inferior para separar el header del contenido
    },
    center: {
        justifyContent: "center"
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    container2: {
        paddingTop: 20,
        marginLeft: 10
    },
    container3: {
        paddingTop: 10,
        marginHorizontal: 10
    },
    scrollView: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    text: {
        fontSize: 42,
    },
    h1: {
        fontSize: 42,
        fontWeight: "400"
    },
    day: {
        fontSize: 42,
        fontWeight: "400",
        fontStyle: "italic"
    },
    h2: {
        fontSize: 30,
        fontWeight: "500"
    }
});