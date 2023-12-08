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
  if (is(count, 2, 4, 5, 6)) {
    return (
      <HStack justifyContent="space-around" alignItems="center">
        {children}
      </HStack>
    );
  }

  return <HStack>{children}</HStack>;
}
