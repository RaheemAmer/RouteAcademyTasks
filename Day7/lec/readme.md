# Note

- vendor prefix
- autoprefixer css
- css minify
- !important (only to override something like bootstrap)

create file called after moving my css in autoprefixer css and then minify(avoid vs code extension make auto prefix to all)
Everything in bootstrap is made in !important

- inherit (inherit value from parent)
(
    :root{ (root works inside the whole website )
    --mainColor: teal;
}
background-color: var(--mainColor, red;)
)

Don't use html as root has more priority than html or other tags as they work fine but not recommended

- CSS units:

px
percentage
em => time = takes initial values from parent
rem => root time - takes initial values from parent which is html tag
vw => viewport width
vh => viewport height
vmin => viewport minimum

- min height will help in i-frames and other stuff (add overflow-auto to it)
- bos-sizing works for padding not margin (use width: calc(100%-number - margin))
- pseudo classes, selection, first-letter, first-type and so on
- p:not(.testing or className)
- test p (all children even if it's inside another div a7fad abna2 anything), direct child only (>),  next thing (+) mfesh fasel, telda (~) kol el elements ele b3de even if there were a space
- html5, semantic element, seo only understand tags not classes (nav, header, footer, article(sora wa t7tha klam, aside(side nav, sections(sections in web), figure and figcaption, main which is inside section)))
- Declaration of html version is required for seo- will not affect code but seo check
- meta = data about data (info about the website)
- meta name = description content / keyword / viewport / charset encoding system for characters (utf 8 or 16)
- meta name = viewport content = width=device-width, initial-scale=1.0, meta author
- link rel="shortcut/icon" href="img" type="image/x-icon"
