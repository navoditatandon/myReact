const parent = React.createElement(
    "div",
    { id: "parent" },
    [   React.createElement(
        "div",
        { id: "child"},
        [React.createElement(
            "h1",
            {},
            'I am in h1 tag'
        ),
        React.createElement(
            "h2",
            {},
            'I am in h2 tag'
        )]
    ),
    React.createElement(
        "div",
        { id: "child2"},
        [React.createElement(
            "h1",
            {},
            'I am in h1 tag'
        ),
        React.createElement(
            "h2",
            {},
            'I am in h2 tag'
        )]
    )
    ]
);

// const heading = React.createElement("h1", {id: "heading", xyz : "abc"}, "Hello World from React!");
console.log(parent); //object printed
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);