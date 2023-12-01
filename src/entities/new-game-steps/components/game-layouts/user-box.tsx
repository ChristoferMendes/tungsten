import { Box } from "@gluestack-ui/themed";
import React from "react";

type BoxProps = React.ComponentProps<typeof Box> & {
  orientation: "vertical" | "horizontal";
};

export function UserBox({ children, orientation, ...props }: BoxProps) {
  const w = orientation === "vertical" ? "$12" : "$32";
  const h = orientation === "vertical" ? "$24" : "$12";

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
