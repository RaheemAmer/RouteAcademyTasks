# Javascript notes

- Tim-Berners-Lee the godfather of the web(w3c, html, www)
- first browser mosaic to have an image which was the logo - 1993 [graduation-project]
- then came netscape [1994-2008], browsers took features from it, some of the developers went to firefox
- Netscape bought mosaic, team and product, netscape is the first browser to have html formatting tag, tags like [center]
- 1995 Netscape chose Brendan Rich[javascript-founder]
- java[syntax], scheme[functional-programming-language], self[oop-prototype-based] => mocha then liveScript then (j-script - microsoft) [sun micro-systems and netscape decided to name it javascript]
- because of the microsoft j-script, tech industry wanted to standardize the fundamentals to the web, then went to w3c, iee and later on went to Ecma [standardized-c#], then they decided to name it ECMAScript[javaScript-for-marketing]
- (ES1) -> 1997, (ES2) -> 1998, (ES3) -> 1999, (ES5) -> 2009, (ES6) -> 2015,  (ES7) -> 2016 [ES4-got-turned-down-due-to-various-problems][transpiling]
- ES1, ES2 and ES3 all of them work on any browser, ES5 is semi-safe for browser compatibility, [ES-is-called-for-any-version-after-2015][Before-2015-the-market-calls-it-javaScript]
- there was many languages attempted to act as an alternative to javaScript such as [coffeeScript-dart]
- Microsoft made a language called typescript = javascript with features
- We write script in the last-line, works line by line which makes javasScript is implemented before entering the html, seo is better and performance
- ```document.getElementById('test').innerHTML="test"```
- ```window.alert("hello js")```
- ```console.log("hello js")```
- JavaScript has something called ```Auto Semi Colon Insertion```, semi-colon differs each line from another, minify also javaScript
- Javascript-Variables => ```var userName = 'Raheem';``` this is called declaring(Declaration) with an assigning value(Assignment)
- Naming variables, doesn't start with number or special characters($, _ are only allowed), have space, [camelCase]
- Test type of variables using method(typeOf), ```var x;``` type of x is undefined
- both null and undefined have no value
- check typeOf null=> [object] (Read-more-about-it)
- Js is a loosely typed and dynamic language

## loosely typed vs strongly typed

- Doesn't obligate you to declare the type of variable, it's known from it's value

## dynamic language

- Allows you to change data-type even after decalring and assigning a value

## Primitive Data Types are

- [string][(anything between quote)]
- [null]
- [undefined]
- [number]
- [big-int]
- [symbol]
- [boolean]

## Non - Primitive Data Types are

- [object]
- [(linear)=>(static(array), dynamic(linked-list, stack, queue))]
- [(Non-linear)=>(tree, graph)]
