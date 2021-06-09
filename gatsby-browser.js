const React = require("react");
const Application = require("/src/modules/Application").default;

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return <Application {...props}>{element}</Application>
};
