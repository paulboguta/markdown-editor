import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";
import { CurrentDocument } from "./CurrentDocument";
import { Document } from "./CurrentDocument.styles";
import { CurrentDocumentModal } from "./CurrentDocumentModal";

describe("test current document modal/info", () => {
  describe("test current document info", () => {
    it("should render button, heading and .md", () => {
      render(
        <Provider store={store}>
          <CurrentDocument />
        </Provider>
      );
      const button = screen.getByRole("button");
      const heading = screen.getByText("Document Name");
      const md = screen.getByText(".md");

      expect(button).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(md).toBeInTheDocument();
    });
    it("should handle onclick", () => {
      const onClick = jest.fn();
      render(<Document onClick={onClick} />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("test current document name change modal", () => {
    it("should render heading, input and 2 buttons (close, submit)", () => {
      const onClick = jest.fn();
      render(
        <Provider store={store}>
          <CurrentDocumentModal onClickClose={onClick} />
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
});
