import { shared } from "./index";

test("shared", () => {
	expect(shared).toStrictEqual({ value: true });
});
