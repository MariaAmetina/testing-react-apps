import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";

describe("Greeting component", () => {
  //в "" название компонента
  //в describe() можно объединить разные тесты для компонентов
  test("renders Hello World as a text", () => {
    //дальше в "" что делает, чтобы получалось адекватное предложение по смыслу
    //Arrange
    render(<Greeting />);

    //Act
    //...here is nothing for now

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  //test();
});
