import { Button, ButtonText, Text, View } from "@gluestack-ui/themed";
import { useLife } from "../store/use-life";
import For from "../../../components/for";
import { router } from "expo-router";
import { Heart } from "lucide-react-native";

const lifeOptions = [20, 30, 40];

export function FirstStep() {
  const { setLife } = useLife();

  function onLifeChange(life: number) {
    router.push("/new-game-steps/2");
    setLife(life);
  }

  return (
    <View
      h="$full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={"$12"}
    >
      <Text
        color="$white"
        textAlign="center"
        fontSize={"$2xl"}
        lineHeight={"$2xl"}
        fontWeight="bold"
      >
        STARTING LIFE
      </Text>
      <View display="flex" flexDirection="row" gap={"$12"}>
        <For each={lifeOptions}>
          {(item) => (
            <Button
              onPress={() => onLifeChange(item)}
              w="$24"
              h="$16"
              variant="outline"
              borderColor="$rose800"
              display="flex"
              flexDirection="column"
              $active-bg="$rose700"
            >
              <ButtonText
                fontSize={"$3xl"}
                lineHeight={"$2xl"}
                color="$rose900"
                fontFamily="$mono"
              >
                {item}
              </ButtonText>
            </Button>
          )}
        </For>
      </View>
    </View>
  );
}
