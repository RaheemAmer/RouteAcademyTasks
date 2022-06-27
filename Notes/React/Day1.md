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
