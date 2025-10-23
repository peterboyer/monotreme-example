import { shared } from "@org/lib-core";

export function App() {
	const div = document.createElement("div");
	div.textContent = JSON.stringify(shared);
	document.body.append(div);
}
