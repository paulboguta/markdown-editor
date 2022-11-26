import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";
import { CreateDocForm } from "./CreateDocForm";

describe("test create document form", () => {
  it("should render heading, input and 2 buttons (close, submit)", () => {
    render(
      <Provider store={store}>
        <CreateDocForm />
      </Provider>
    );
    const heading = screen.getByText("New document name:");
    const input = screen.getByRole("textbox");
    const buttons = screen.getAllByRole("button");
    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });
});
