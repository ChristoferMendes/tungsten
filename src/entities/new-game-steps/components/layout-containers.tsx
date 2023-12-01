import { HStack, View } from "@gluestack-ui/themed";
import React from "react";

export function LayoutContainers({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  if (count === 2) {
    return <HStack bg="$red300">{children}</HStack>;
  }

  if (count === 4) {
    return (
      <HStack justifyContent="space-around" alignItems="center">
        {children}
      </HStack>
    );
  }

  return <View>{children}</View>;
}
