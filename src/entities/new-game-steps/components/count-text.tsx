import { Text } from "@gluestack-ui/themed";

export function CountText({ children }: { children: string }) {
  return (
    <Text
      position="absolute"
      top={-40}
      rounded={"$full"}
      fontSize={"$xl"}
      color="$black"
      bg="$white"
      px={"$2"}
      lineHeight={"$xl"}
    >
      {children}
    </Text>
  );
}
