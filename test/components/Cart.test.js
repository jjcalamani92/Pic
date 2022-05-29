import { render, screen } from "@testing-library/react";
import { Cart } from "../../components";
test("on initial render, Cart", () => {
	render(<Cart />);
	screen.debug();
});
