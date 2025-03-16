
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BtnLoginGoogle() {
  return (
    <Pressable
     style={styles.btn}>
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
