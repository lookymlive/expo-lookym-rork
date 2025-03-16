import BtnLoginGoogle from "@/components/BtnLoginGoogle";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
     < Text style={{textAlign: "center", color: "white"}}>Login with Google</Text>
    <BtnLoginGoogle />  
    </View>
  );
}

