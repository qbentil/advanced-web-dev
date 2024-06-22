import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  // const linkElement = screen.getByText(/Hello World/i);
  // expect(linkElement).toBeInTheDocument();
});
