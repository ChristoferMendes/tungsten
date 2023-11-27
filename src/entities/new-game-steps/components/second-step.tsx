import { Text, View } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export function SecondStep() {
  return (
    <View>
      <Text>Second step</Text>
      <Link href="/new-game-steps/3">Go to third step</Link>
    </View>
  );
}
