import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Platform, SafeAreaView, View } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "./src/components/Hero";
import Timer from "./src/components/Timer";
import { Audio } from "expo-av";
import { TouchableOpacity } from "react-native";


const color = ["#90b2d5", "#c0ddd9", "#566b95"];

export default function App() {

  function onClick(){
    Sound()
    setActive(!active)
  }

  async function Sound(){
    const { sound } = await Audio.Sound.createAsync(require("./assets/sound.mp3"));
    await sound.playAsync()

  }

  const [work, setWork] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [page, setPage] = useState("😋" | "😌" | "😄");
  const [active, setActive] = useState(false)

  useEffect(() => {
    let interval = null
  
    if(active){
      interval = setInterval (() => {
        setTime(time - 1)
      }, 1000)
    }else{
      clearInterval(interval)
    }
  
    if(time === 0){
      setActive(false);
      setWork(prev => !prev);
      setTime(work ? 300 : 1500);
    }

    return() => clearInterval(interval)
  }, [active, time])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color[page] }]}>
      <View style={{ paddingTop: Platform.OS === "android" && 30, paddingHorizontal: 20, flex: 1
       }}>
        <Text style={styles.text}>Cronometro</Text>
        <Hero page={page} setPage={setPage} setTime={setTime} />
        <Timer time={time} />
        <TouchableOpacity style={styles.boton} onPress={onClick}>
          <Text style={{color: "white", fontWeight: "bold"}}>
            {active ? "Stop" : "Start"}
          </Text>
        </TouchableOpacity>
        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 38,
    fontWeight: "bold",
    paddingTop: 20,
  },
  boton: {
    padding: 20,
    marginTop: 8,
    borderRadius: 20,
    backgroundColor: "black",
    alignItems: "center",
  }
});
