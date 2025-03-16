
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Google from "expo-auth-session/providers/google";

export default function BtnLoginGoogle() {
 
 const [request, response, promptAsync] = Google.useAuthRequest({
   
   androidClientId: "",
   iosClientId: "",
  
 })
  return (
    <Pressable style={styles.btn}
      onPress={() => {
        promptAsync().catch((e) => {
          console.error("Error al iniciar sesión con Google:", e);
        });
      }}
    >
     
      <Text style={{textAlign: "center", color: "white"}}>Login with Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  }
);
