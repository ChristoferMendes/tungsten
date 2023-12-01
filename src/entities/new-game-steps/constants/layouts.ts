import { TwoPlayersLayout1 } from "../components/game-layouts/two/two-players-layout-1";
import { TwoPlayersLayout2 } from "../components/game-layouts/two/two-players-layout-2";
import { ThreePlayersLayout1 } from "../components/game-layouts/three/three-players-layout-1";
import { FourPlayersLayout1 } from "../components/game-layouts/four/four-players-layout-1";
import { FourPlayersLayout2 } from "../components/game-layouts/four/four-players-layout-2";
import { FivePlayersLayout1 } from "../components/game-layouts/five/five-players-layout-1";
import { FivePlayersLayout2 } from "../components/game-layouts/five/five-players-layout-2";

export const layouts = {
  2: [TwoPlayersLayout1, TwoPlayersLayout2],
  3: [ThreePlayersLayout1],
  4: [FourPlayersLayout1, FourPlayersLayout2],
  5: [FivePlayersLayout1, FivePlayersLayout2]
}
