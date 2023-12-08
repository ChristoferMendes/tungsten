import { HStack, VStack, View } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Life } from "../../life";
import { useLife } from "~/entities/new-game-steps/store/use-life";
import { StyleSheet } from "react-native";

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

export function FourPlayersGame2() {
  const { life } = useLife();

  return (
    <SafeAreaView style={containerStyle.container}>
      <VStack flex={1} gap="$4" px="$2">
        <HStack justifyContent="space-between">
          <Life
            life={life}
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
                h: "$96",
              },
            }}
          />
          <Life
            life={life}
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
        <HStack justifyContent="space-between">
          <Life
            life={life}
            orientation="vertical"
            // h="$96"
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
                h: "$96",
              },
            }}
          />
          <Life
            life={life}
            orientation="vertical"
            // h="$96"
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
      </VStack>
    </SafeAreaView>
  );
}
