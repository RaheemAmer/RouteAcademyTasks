# Final-week css notes

- font-face => (family and url) ```@font-face{font-family:font-name; src:url(./.tff)}```
- each font extension indicates how it works on different browsers
- selecting attributes with attribute selector ```img[id], section[id]```
- start with (^)
- Attribute in html, ```data-interval="3```
- Scroll-behavior,```scroll-behavior:smooth;``` but has major problems in browsers compatibility, so we use nice scroll by jquery
- translate-middle-y in bootstrap does -50%
- use ```position:static on``` indicators in bootstrap to not affect responsive and move it according to your needs
- putting image in indicators in bootstrap, position of image is not right because => what is ```text-indent``` space before anything, blank space before start, override by giving value of zero
- zero is the only measurement unit that's considered unitless
- carousel-fade instead of carousel-slide
- nav and tabs, bg-primary and bg-opacity-10
- form-controls for form inputs
- ```<video controls loop autoplay width:"600" height="600"><source src="3.mp4" type="video/mp41"></video>```
- ability to create a tag(any-tag) or attributes(js and css can work with it), ```display:inline```, has problems with seo, used to make components