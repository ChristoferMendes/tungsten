import { View } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import { FirstStep } from "./components/first-step";
import { SecondStep } from "./components/second-step";
import Colors from "../../constants/Colors";
import { useHandleStepsGoBack } from "./hooks/use-handle-steps-go-back";
import { ThirdStep } from "~/entities/new-game-steps/components/third-step";

const steps = {
  "1": FirstStep,
  "2": SecondStep,
  "3": ThirdStep,
};

export function NewGameStepsPage() {
  const { step } = useLocalSearchParams<{ step: keyof typeof steps }>();
  useHandleStepsGoBack(step);

  const Stepper = steps[step];

  return (
    <View bgColor={Colors.zinc["900"]}>
      <View h={"$full"}>
        <Stepper />
      </View>
    </View>
  );
}
