import { useEffect, useState } from "react";
import { layouts } from "~/entities/new-game-steps/constants/layouts";
import { router, useLocalSearchParams } from "expo-router";

export enum CHECK_STATUS {
  CHECKING,
  CHECKED
}

function checkIfLayoutHasOnlyOneAlternative(playersCount: number) {
  const toString = playersCount.toString();

  if (!(toString in layouts)) {
    return false;
  }

  return layouts[playersCount as keyof typeof layouts].length === 1;
}


export function useCheckIfPlayersLayoutHasOnlyOneAlternative(playersCount: number) {
  const [checkStatus, setCheckStatus] = useState(CHECK_STATUS.CHECKING);
  const { step } = useLocalSearchParams();

  useEffect(() => {
    const hasOnlyOneAlternative = checkIfLayoutHasOnlyOneAlternative(playersCount);

    if (!hasOnlyOneAlternative) {
      return setCheckStatus(CHECK_STATUS.CHECKED);
    }

    if (step === '3') {
      router.replace('/new-game-steps/2');
    }

    const layoutKeyWithOnlyOneAlternative = Object.keys(layouts).find((key) => {
      const keySerialized = key as unknown as keyof typeof layouts;

      return layouts[keySerialized].length === 1;
    })

    router.push(`/game/${layoutKeyWithOnlyOneAlternative}`)


    setCheckStatus(CHECK_STATUS.CHECKED);
  }, [step])

  return checkStatus;
}
