import { HStack, VStack, View } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Life } from "../../life";
import { useLife } from "~/entities/new-game-steps/store/use-life";

export function FourPlayersGame2() {
  const { life } = useLife();

  return (
    <SafeAreaView>
      <VStack gap="$2">
        <HStack flex={1} gap="$2">
          <Life
            life={life}
            orientation="vertical"
            w="$full"
            h="$full"
            goTo="right"
            bg="$amber500"
            $active-bg="$amber700"
          />
          <Life
            life={life}
            orientation="vertical"
            w="$full"
            h="$full"
            goTo="left"
            bg="$amber500"
            $active-bg="$amber700"
          />
        </HStack>
        <HStack flex={1} gap="$2">
          <Life
            life={life}
            orientation="vertical"
            w="$full"
            h="$full"
            goTo="right"
            bg="$amber500"
            $active-bg="$amber700"
          />
          <Life
            life={life}
            orientation="vertical"
            w="$full"
            h="$full"
            goTo="left"
            bg="$amber500"
            $active-bg="$amber700"
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
