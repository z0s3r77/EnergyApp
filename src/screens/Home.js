import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as Progress from 'react-native-progress';
import {getEnergyPrices} from "../store/slices/thunks";
import {EnergyPriceTarget} from "../components/EnergyPriceTarget";

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getEnergyPrices())

    }, []);

    const {isLoading, maxPrice, minPrice, avgPrice} = useSelector(state => state.precioLuz)

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.h1}>EnergyPrices</Text>

                { isLoading === true ? <Progress.Bar progress={0.3} width={200} indeterminate={true}/> : ''  }

                {minPrice && <EnergyPriceTarget price={minPrice} type={"minPrice"} backgroundColour={"green"}/>}
                {avgPrice && <EnergyPriceTarget price={avgPrice} type={"avgPrice"} backgroundColour={"orange"}/>}
                {maxPrice && <EnergyPriceTarget price={maxPrice} type={"maxPrice"} backgroundColour={"red"}/>}


                <StatusBar style="auto"/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    container2: {
        paddingTop: 20,
        marginLeft: 10
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
        fontSize: 30
    }
});