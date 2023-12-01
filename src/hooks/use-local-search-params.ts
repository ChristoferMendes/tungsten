import { useLocalSearchParams as expoUseLocalSearchParams } from "expo-router";

export function useLocalSearchParams<T>() {
  const data = expoUseLocalSearchParams();

  const numberSearchParamsSerialized = Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      const isNumber = !isNaN(Number(value));

      return [key, isNumber ? Number(value) : value];
    })
  );
  console.log(numberSearchParamsSerialized);

  return numberSearchParamsSerialized as T;
}
