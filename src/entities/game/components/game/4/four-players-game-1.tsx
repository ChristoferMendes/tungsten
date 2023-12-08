import { HStack } from "@gluestack-ui/themed";
import { Life } from "../../life";
import { useLife } from "~/entities/new-game-steps/store/use-life";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    paddingVertical: 8,
  },
});

export function FourPlayersGame1() {
  const { life } = useLife();

  return (
    <SafeAreaView style={containerStyle.container}>
      <HStack px="$2">
        <Life
          life={life}
          orientation="horizontal"
          w="$full"
          h="$32"
          goTo="bottom"
          bg="$amber500"
          $active-bg="$amber700"
        />
      </HStack>
      <HStack
        flex={1}
        justifyContent="space-around"

        // bg="$amber100"
      >
        <Life
          life={life}
          orientation="vertical"
          goTo="right"
          bg="$red500"
          // w="$20"
          sx={{
            "@base": {
              w: "$20",
            },
            "@xs": {
              w: "$24",
            },
          }}
          $active-bg="$red900"
        />
        <Life
          life={life}
          orientation="vertical"
          goTo="left"
          bg="$purple500"
          $active-bg="$purple900"
          sx={{
            "@base": {
              w: "$20",
            },
            "@xs": {
              w: "$24",
            },
          }}
        />
      </HStack>
      <HStack px="$2">
        <Life
          life={life}
          w="$full"
          orientation="horizontal"
          h="$32"
          goTo="top"
          bg="$green500"
          $active-bg="$green700"
        />
      </HStack>
    </SafeAreaView>
  );
}
