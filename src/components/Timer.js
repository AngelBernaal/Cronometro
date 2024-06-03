import { View, Text, StyleSheet } from "react-native";

export default function Timer({ time }){
    const newTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`
    return(
        <View style={styles.container}>
            <Text style={styles.time}>{newTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      justifyContent: "center",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 8, 
    },

    time: {
      fontSize: 80,
      fontWeight: "bold",
      textAlign: "center",
    }
})