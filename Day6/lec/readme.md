# Box Shadow

## Code

- box-shadow: 10px 5px 0 px red;
- box-shadow: x-axis y-ax-s blur color;
- Background-image is more important than color if we added color after image

### Assignment

- linear=gradient or radial-gradient (giving percentage to both of them ??)
- Putting both background-color and background-image together?

### What is CDN and how it works?

A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.

Cdn offers also caching for browsers - accepted automatically

### Mobile-first-design

The priority goes to mobile layout

### Bootstrap

You can link bootstrap using cdn or offline (link min.css and javascript f
ile called bundle) - you can use specific features in bootstrap by linking the specified file to your profile.

### Bootstrap allows arabic

since version five

### Contents of lecture

Bootstrap utilities
Keyframes

### Example for keyframes

animation-name:changeWidth;
animation-duration:2s;
animation-iteration-count:2; or infinite;
animation-direction: alternate;
animation: changeWidth infinite alternate

@keyframes changeWidth{
0%{width: 500px; background-color:red;}
100%{width:100% background-color:teal;}
}

### Flip image

transform:rotateY(180deg);

@keyframes movingTaxi{
    0%{left:0;}
    100%{left:100%;}
}
