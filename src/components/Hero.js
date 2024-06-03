import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const opciones = ["😋", "😌", "😄"]

export default function Hero({page, setPage, setTime}){

function onClick(indice){
    const newPage = indice === 0 ? 25 : indice === 1 ?  5 : 15;
    setPage(indice);
    setTime(newPage * 60);
}

    return(
        <View style={{flexDirection: "row"}}>
            {
                opciones.map((opciones, indice) => (
                    <TouchableOpacity key={indice} onPress={() => onClick(indice)} style={[styles.opciones, page !== indice &&{borderColor: "transparent"}]}>            
                        <Text style={{fontWeight: "bold"}}>{opciones}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    opciones: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 90,
        padding: 5,
        width: "33%",
        borderColor: "white", 
        marginVertical: 20,
    }
})