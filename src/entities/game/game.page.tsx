import {
  Box,
  Button,
  ButtonText,
  Text,
  VStack,
  HStack,
} from "@gluestack-ui/themed";
import { View } from "@gluestack-ui/themed";
import Colors from "~/constants/Colors";
import { useLife } from "../new-game-steps/store/use-life";
import { Life } from "./components/life";
import { useLocalSearchParams } from "~/hooks/use-local-search-params";
import { TwoPlayersGame2 } from "./components/game/2/two-players-game-2";
import { TwoPlayersGame1 } from "./components/game/2/two-players-game-1";
import { ThreePlayersGame1 } from "./components/game/3/three-players-game-1";
import { FourPlayersGame1 } from "./components/game/4/four-players-game-1";
import { FourPlayersGame2 } from "./components/game/4/four-players-game-2";
import { FivePlayersGame1 } from "./components/game/5/five-players-game-1";
import { FivePlayersGame2 } from "./components/game/5/five-players-game-2";

const gameCount = {
  2: [TwoPlayersGame1, TwoPlayersGame2],
  3: [ThreePlayersGame1],
  4: [FourPlayersGame1, FourPlayersGame2],
  5: [FivePlayersGame1, FivePlayersGame2],
  // 6: [Five, Five],
};

function getGame(count: number, layout: number) {
  return gameCount[count as keyof typeof gameCount][layout - 1];
}

export function GamePage() {
  const { count, layout } = useLocalSearchParams<{
    count: number;
    layout: number;
  }>();
  const Game = getGame(count, layout);

  return (
    <View bgColor={Colors.zinc["900"]}>
      <VStack h="$full" alignItems="center">
        <Game />
      </VStack>
    </View>
  );
}
