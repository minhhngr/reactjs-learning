# PORTFOLIO MQ TEAM DOCUMENT

## Configuration Environment

If you use VSCode, you should install extention "ES7 React/Redux/GraphQL/React-Native snippets" to support React shortcut code.\
Refer: <https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets>

### Installation React app use commands:

Install: `npx create-react-app .` \
Run app: `yarn start`

### Creating React components

Create file jsx and sass to build each component \
If you get error message "Cannot find module 'sass'", run commands below: \
`npm cache clear --force` \
`npm install sass`

### React snap-scroll effect

Refer: <https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type>

Usage: When you want to scroll a whole content section in once \
Apply: Use CSS property **scroll-snap-type**

### React Sass global variables

Refer: <https://sass-lang.com/documentation/variables>

Usage: When you want to use global variables, just import global sass file into your current sass file \
Apply: Create global sass file and define your variables

## Use material-icons

Refer: <https://material-ui.com/components/material-icons/>

### With NPM

`npm install @material-ui/core`

`npm install @material-ui/icons`

### With Yarn

`yarn add @material-ui/core`

`yarn add @material-ui/icons`

## React portfolio page

### React adding dynamic active class

- Declare and use data in react \
  Refer: <https://reactjs.org/docs/lists-and-keys.html> \
  Usage: can declare direct in function component or import from js file (use direct with small data and import from js file with medium data)

  Apply direct in function: 
  - Declare: 
  ```javascript
  const data = [{array1(id, title, desc, img, icon, ...)}, {array2}, ...]
  ```
  - Using: 
  ```javascript
  {data.map ((d) => ({d.id}, {d.title}, {d.desc}, ...)}
  ```

  Apply with js file: - Create a js file (data.js) 
  - Declare: 
  ```javascript
  export const featuredPortfolio = [{array1(id, title, desc, img, icon, ...)}, {array2}, ...]
  ```
  - Import data from file: 
  ```javascript
  import {featuredPortfolio} from "<path_to_file>/data"
  ```
  - Using: 
  ```javascript
  {data.map ((d) => ({d.id}, {d.title}, {d.desc}, ...)}
  ```

- Use child component \
  Refer: <https://reactjs.org/docs/components-and-props.html> \
  Usage: when you want to create an repeated component (Eg: li tag in ul or ol list, an item in product list) \
  Apply:

  - Create child component folder
  - Import component into parents component: 
  ```javascript
  import PortfolioList from "<path_to_component>/PortfolioList"
  ```
  - Use child component as a tag: 
  ```javascript
  <PortfolioList />
  ```

- Use props to pass data to child components \
  Usage: all data in parents component need to pass to child components to show it up \
  Apply:
  - Put data into prop of child from parents: \
   ```javascript
   <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} />
   ```
  - Declare data in child function and use it as normal data:
   ```javascript
   export default function PortfolioList({ id, title, active, setSelected }) {
   return (
      <li
         className={active ? "portfolioList active" : "portfolioList"}
         onClick={() => setSelected(id)}
      >
         {title}`
      </li>
   );
   }
   ```

- useState of react hooks \
  Refer: <https://reactjs.org/docs/hooks-state.html> \
  Usage: when you want to change the value of the variable or array \
  Apply:
  - Import useState function of react: import { useState } from "react"
  - Declare variable or array with format: \
  `const [<name>, set<Name>] = useState(<default_value>)` \
    Eg: 
    ```javascript
    const [selected, setSelected] = useState("featured")
    ```
  - Use `<name>` to show default value
  - Use `set<Name>` to change the value of the variable or array

### React dynamic data with useEffect hook

- useEffect of react hooks \
  Refer: <https://reactjs.org/docs/hooks-effect.html> \
  Usage: useEffect is a function which will run after the first render and everytime it updated. Use this when you want to fetch dynamic data \
  Apply:
  - Import useEffect function of react: 
  ```javascript
  import { useEffect } from "react"
  ```
  - Use as a function:
   ```javascript
   useEffect(() => {
      switch (selected) {
         case "featured":
               setData(featuredPortfolio);
               break;

         ...

         default:
               setData(featuredPortfolio);
      }
   }, [selected])
   ```
