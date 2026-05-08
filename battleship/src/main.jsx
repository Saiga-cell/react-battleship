import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SetupTest } from "./components/battleship";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SetupTest />
	</StrictMode>,
);
