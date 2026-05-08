import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BattleShip, SetupTest } from "./components/battleship";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SetupTest />
		<BattleShip />
	</StrictMode>,
);
