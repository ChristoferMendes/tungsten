import { HStack, View } from "@gluestack-ui/themed";
import { Redirect } from "expo-router";
import React from "react";

function is(count: number, ...numbers: number[]) {
  return numbers.includes(count);
}

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

  if (is(count, 4, 5)) {
    return (
      <HStack justifyContent="space-around" alignItems="center">
        {children}
      </HStack>
    );
  }

  return <HStack>{children}</HStack>;
}
