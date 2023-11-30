import { View, Text } from "@gluestack-ui/themed";
import { usePlayersCount } from "~/entities/new-game-steps/store/use-players-count";
import { TwoPlayersLayout1 } from "~/entities/new-game-steps/components/game-layouts/two/two-players-layout-1";
import { TwoPlayersLayout2 } from "~/entities/new-game-steps/components/game-layouts/two/two-players-layout-2";

const layouts = {
  2: [TwoPlayersLayout1, TwoPlayersLayout2]
}

function getLayoutForPlayersCount(count: number) {
  const toString = count.toString()
  const hasLayout = toString in layouts;

  if (!hasLayout) {
    return [];
  }

  return layouts['2'];
}

export function ThirdStep() {
  const { count } = usePlayersCount();
  const components = getLayoutForPlayersCount(count);

  return (
    <View>
      <Text>Third step</Text>
    </View>
  )
}
