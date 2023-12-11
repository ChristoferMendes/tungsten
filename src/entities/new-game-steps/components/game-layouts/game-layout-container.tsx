import { router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export function GameLayoutContainer({
  children,
  game,
  layout,
}: {
  children: React.ReactNode;
  game: number;
  layout: number;
}) {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/game/${game}?layout=${layout}`)}
    >
      {children}
    </TouchableOpacity>
  );
}
