import { GameContainer } from "../game-container";
import { Life } from "../../life";
import { HStack, Text, VStack } from "@gluestack-ui/themed";

export function FivePlayersGame1() {
  return (
    <GameContainer>
      <VStack space="sm">
        <HStack justifyContent="space-around">
          <Life
            orientation="vertical"
            goTo="right"
            bg="$amber500"
            $active-bg="$amber700"
            sx={{
              "@base": {
                w: 82,
                h: 360,
              },
              "@xs": {
                w: "$24",
                h: "$64",
              },
            }}
          />
          <Life
            orientation="vertical"
            goTo="left"
            bg="$red700"
            $active-bg="$red800"
            sx={{
              "@base": {
                w: 82,
              },
              "@xs": {
                w: "$24",
              },
            }}
          />
        </HStack>
        <HStack justifyContent="space-around">
          <Life
            orientation="vertical"
            goTo="right"
            bg="$amber500"
            $active-bg="$amber700"
            sx={{
              "@base": {
                w: 82,
                h: 360,
              },
              "@xs": {
                w: "$24",
                h: "$64",
              },
            }}
          />
          <Life
            orientation="vertical"
            goTo="left"
            bg="$red700"
            $active-bg="$red800"
            sx={{
              "@base": {
                w: 82,
              },
              "@xs": {
                w: "$24",
              },
            }}
          />
        </HStack>
        <HStack px="$1.5">
          <Life
            bg={"$cyan600"}
            $active-bg="$cyan800"
            w={"$full"}
            h={"$56"}
            goTo="top"
          />
        </HStack>
      </VStack>
    </GameContainer>
  );
}
