import { User } from "lucide-react-native";

export function UserIcon({
  rotate,
}: {
  rotate: "left" | "right" | "top" | "bottom";
}) {
  function getRotation() {
    switch (rotate) {
      case "left":
        return [{ rotate: "-90deg" }] as any;
      case "right":
        return [{ rotate: "90deg" }] as any;
      case "top":
        return [{ rotate: "0deg" }] as any;
      case "bottom":
        return [{ rotate: "180deg" }] as any;
    }
  }

  return <User color={"white"} transform={getRotation()} />;
}
