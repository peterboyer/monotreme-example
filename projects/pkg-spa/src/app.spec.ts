import { App } from "./app";

test("app", () => {
	App();
	expect(document.lastChild).toHaveTextContent('{"value":true}');
});
