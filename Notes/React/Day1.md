# JavaScript Revision:

### 3 main points:
1. Es6 modules
2. Es6 destructuring array
3. Es6 New Array Methods (filter, map, reduce)

<hr>

#### 1. Es6 Modules:
- If you want to attach the file or a function, use the keywords export or export default - import the file or function to use it
- Default functions or files are imported with no curly brackets, they are immune to be duplicated
- You can change name of file or function you're importing, this will help you in creating a cool naming convention system to your app [It will act as a pointer to the targeted file or function]
<pre>
import {someThing} from '/.';
import someThing2 from './';
export someThing;
export default someThing2;
</pre>

<hr>

#### 2. Es6 Destructuring Arrays:
- Instead of building a complicated way for i/o operations, we can use destructuring to make the code less and more efficient
- You can't declare two objects with same name, it will cause a duplication erroor
<pre>
let user = {
name: "Raheem Amer",
age: 24
}

instead we use this => let [name, age] = user;

that's the cooler version of  => let name = user.name;

also => console.log(name); instead of console.log(user.name);
</pre>

<hr>

#### 3. Es6 New Array Methods (filter, map, reduce):
<h5>Standard Way</h5>
<pre>
let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let results = [];
for (i=0; i < nums.length;i++){
    if (nums[i]>30){
    results.push(nums[i]);
    }
}
console.log(results);
</pre>

<h5>Filter</h5>

- Takes an array and sort it according to my conditions 
- Return array with less number of indexes and values than the original
- Even if there is no proper output, it will print an empty array
<pre>
let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let results = nums.filter(function(num){
    return num>30;
})
console.log(nums);

or with arrow function - single line function

let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let results = nums.filter((num) => num>30);
console.log(nums); 
</pre>

<h5>Map</h5>

- Takes an array and sort it according to my conditions 
- Return array with same number of indexes and values like the original
- Even if there is no proper output, it will print an empty array
- It's used as an Accumulator

<pre>
let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let results = nums.map((num) => num+=10);
console.log(results);
</pre>

<h5>Reduce</h5>

- Takes an array and sort it according to my conditions 
- One elemnt only is returned
<pre>
let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let results = nums.reduce((sum,num) => sum+=num);
console.log(results);
</pre>

<hr>

<h2>React 101</h2>

- To work with react, we have to download a Create React App which sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
- Create a react project using create react app
- Npx is an npm package runner that can execute any package that you want from the npm registry without even installing that package

<pre>
[Write this in the terminal]

npm i create-react-app
create-react-app project-demo

[Shorter way]

npx create-react-app project-demo
</pre>

<h3>Notes</h3>

- React is a component-based architecture
- Two ways to create a component -> (Class) - (Functiom)
- Each component has (Data + view) -> (State to store local component data) - (Render to convert jsx and render it into a viewable page)
- Not every component has a state - there are stateless component (Ex: landing pages, etc.)
- Any React app has (Public - Src - Node Modules - Package.json[reference for packages installed] and Package-lock.json [keep track of the exact version of every package that is installed] - gitignore - Readme)
- In Rendering, make sure to insert all the tags inside a one block element [div or React.Fragment or <>]
- Use Emmet abreviations like rcc and rfc
- Beware of changes in the syntax like (class => className)

<hr>

<h3>Important</h3>

1. Public (  Robots.txt [text file created by the designer to prevent the search engines and bots to crawl up their sites. It contains the list of allowed and disallowed sites and whenever a bot wants to access the website] - Favicon - Manifiest.json [Pwa for desktop and mobile] - Logos - index.html [Main Html tag that has a div with id root] )
2. Src (Some utilities like reportWebVitals for performance analysis - setupTest and App.test for testing using jest or others - ) - (Index.css for local and App.css for global) - (Logo) - (Index.js and App.js) -> (App.js is your App component, whereas index.js is the "entry point" for your application. The index.js contains the logic for rendering your App component and provides it with any necessary props (either directly, or via contexts) App and Index are just names. You use them how you want. Most Apps that I've worked on only have one or the other.)

 
<h3>Questions:</h3>

- What is React.strictmode?
- How to call a component inside a component?
- Best project folder structure!
- How React is different from vanilla javascript?
