import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export function GameContainer({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={containerStyle.container}>{children}</SafeAreaView>
  );
}
