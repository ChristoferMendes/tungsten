import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

export function useHandleStepsGoBack(step: string) {
  const currentStep = Number(step);
  const navigation = useNavigation();

  useEffect(() => {
    if (currentStep === 1) {
      return;
    }

    function handleBackPress(e: any) {
      e.preventDefault();
      router.push(`/new-game-steps/${currentStep - 1}`);
    }

    navigation.addListener("beforeRemove", handleBackPress);

    return () => {
      navigation.removeListener("beforeRemove", handleBackPress);
    };
  }, [currentStep]);
}
