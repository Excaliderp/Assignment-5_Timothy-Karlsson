Hi Timothy!

Excellent work!

Only found one issue on the mobile projects page, but it's a pretty quick fix. Everything else is A+ so no need to resubmit.

Absolutely outstanding project organisation and code style, file names notwithstanding. Smart, efficient, super readable code. It really is nice to look at and easy to follow.

Great job. Välgokänt!

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅

  H1 on every page ✅

  Mail to Contact form ✅

  Links to specific projects opening in new windows ✅

CSS
  External CSS ✅

  General style sheets for common elements ✅
    css.css? You are killing me! If see js.js I'm going to scream

  Typography style sheet ✅

  Locally installed font ✅
  
  Separate stylesheets for each page ✅

  RWD
    Desktop ✅
    Mobile ✅ ❌
      Carousel isn't full width on the projects page, and it has a higher z-index so it is on top of the mobile menu

JS
  AAARGGGHHHHH!

  jQuery plugin (such as a carousel) ✅ 

  JS/jQuery multi level menu (min 2 levels) ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ✅ 

  CSS prefixing where required ✅

  jQuery effects ✅

  Semantic element naming  ✅

  Code style
    HTML:  ✅
      A few empty lines and the nav-buttons have weird indenting:
         <div class="nav-button">About me<a href="html/about.html"><span class="link"></span>
           </a>
         </div>

         Should be

         <div class="nav-button">About me
           <a href="html/about.html"><span class="link"></span></a>
         </div>

         But would this work with less css:
 
         <div class="nav-button">
           <a href="html/about.html" class="link">About me</a>
         </div>

         Or even just:

         <a href="html/about.html" class="nav-button">About me</a>
         ?

      I'm just glad I didn't see an html.html

    CSS: ✅
      +1 for --base-size. Smart.
    JS: ✅
      Very nice.