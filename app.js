const nested_divs = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is h1 tag"),
    React.createElement("h2", { id: "heading" }, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "This is h1 tag"),
    React.createElement("h2", { id: "heading" }, "This is h2 tag"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested_divs);
