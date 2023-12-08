import { Text, VStack } from "@gluestack-ui/themed";
import { usePlayersCount } from "~/entities/new-game-steps/store/use-players-count";
import { layouts } from "~/entities/new-game-steps/constants/layouts";
import {
  useCheckIfPlayersLayoutHasOnlyOneAlternative,
  CHECK_STATUS,
} from "~/entities/new-game-steps/hooks/use-check-if-players-layout-has-only-one-alternative";
import { LayoutContainers } from "./layout-containers";

function getLayoutForPlayersCount(playersCount: number) {
  const toString = playersCount.toString();
  const hasLayout = toString in layouts;

  if (!hasLayout) {
    return [];
  }

  return layouts[playersCount as keyof typeof layouts];
}

export function ThirdStep() {
  const { count } = usePlayersCount();
  const components = getLayoutForPlayersCount(count);
  const status = useCheckIfPlayersLayoutHasOnlyOneAlternative(count);

  if (status === CHECK_STATUS.CHECKING) {
    return null;
  }

  return (
    <VStack flex={1} pt="$56">
      <Text
        color={"white"}
        fontSize={"$4xl"}
        fontWeight="$bold"
        lineHeight={"$7xl"}
        textAlign="center"
      >
        TABLE LAYOUT
      </Text>
      <LayoutContainers count={count}>
        {components.map((Component, index) => (
          <Component key={index} />
        ))}
      </LayoutContainers>
    </VStack>
  );
}
