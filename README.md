#Firework App

# Table of Contents

- [Stack](#stack)
- [Available Scripts](#available-scripts)
- [Redux](#redux)
- [Formatting code for standardization](#formatting-code-for-standardization)

# Stack

- React
- Redux
- connected-react-router
- Reselect
- ES6
- Promises
- CSS

# Available Scripts

- `npm install` -> Install all packages needed
- `npm start` -> Start project in development mode
- `npm install <package-name>` -> Add a new package
- `npm remove <package-name>` -> Delete a package from package.json

#Redux

-All fetched data from the server should be stored in the Redux store so that it can be fetched once when possible.
We should have three actions firing for each interaction with the API. Example: In a case to select file , we should have a OPEN_FILE_REQUEST action, a OPEN_FILE and an OPEN_FILE_ERROR.

Action Types

Include the path of the folder, then what it is doing and a verb that indicates the status of it. Example:

const TYPE = 'boilerplate/folderName/OPEN_FILE'

Which in a real case scenario could be:

for fetching an individual order
const TYPE = 'boilerplate/WorkPage/OPEN_FILE'

#Formatting code for standardization

The formatting will be performed to all .js, .css and .json.

The following configuration is applied:

- Always add end comma to objects and arrays.
- Always use tabs instead of spaces to indent.
- Always add parenthesis to arrow functions.
- Tab width of 2 spaces.
- Semicolons will be added at the end of every statement.
- Lines with over 80 characters will be wrapped.
- Spaces between brackets will be added in object literals.
