import {Text, View} from "react-native";
import {styles} from "../styles/styles";
import {convertToKWh} from "../functions/convertToKwh";

export const EnergyPriceTarget = ({price,type, backgroundColour}) => {
    return (
        <>
            <View key={type} style={[styles.container2, { backgroundColor: backgroundColour}]}>
                <View>
                    <Text style={styles.h2}> Min Price</Text>
                    <Text>Date: {price.date}</Text>
                    <Text>Hour: {price.hour}</Text>
                    <Text>Price: {convertToKWh(price.price)} €/kWh </Text>
                </View>
            </View>
        </>
    )
}
