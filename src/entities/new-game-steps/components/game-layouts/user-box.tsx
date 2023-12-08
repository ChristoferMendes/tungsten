import { Box } from "@gluestack-ui/themed";
import React from "react";
import { DimensionValue } from "react-native";

type BoxProps = React.ComponentProps<typeof Box> & {
  orientation: "vertical" | "horizontal";
};

function getW(orientation: "vertical" | "horizontal", wFromProps?: any) {
  if (wFromProps) {
    return wFromProps;
  }

  return orientation === "vertical" ? "$12" : "$32";
}

function getH(orientation: "vertical" | "horizontal", hFromProps?: any) {
  if (hFromProps) {
    return hFromProps;
  }

  return orientation === "vertical" ? "$24" : "$12";
}

export function UserBox({ children, orientation, ...props }: BoxProps) {
  const w = getW(orientation, props.w);
  const h = getH(orientation, props.h);

  return (
    <Box
      bg={props?.bg ?? "$rose900"}
      w={w}
      h={h}
      display={props?.display ?? "flex"}
      justifyContent={props?.justifyContent ?? "center"}
      alignItems={props?.alignItems ?? "center"}
      rounded={props.rounded ?? "$md"}
      {...props}
    >
      {children}
    </Box>
  );
}
