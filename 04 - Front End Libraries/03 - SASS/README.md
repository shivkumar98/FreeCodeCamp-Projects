 # SASS

 # Summary

 # Introduction

 Sass (Syntactically Awesome StyleSheets) is a language extension of CSS. It adds features which aren't available in basic CSS

 # Tutorial Commentary

 ## 1: Store Data With Sass Variables

  The code for this step was initialised as:

    <style type='text/scss'>


        .header{
            text-align: center;
        }
        .blog-post, h2 {
            color: red;
        }
        </style>

    <h1 class="header">Learn Sass</h1>
    <div class="blog-post">
        <h2>Some random title</h2>
        <p>This is a paragraph with some random text in it</p>
    </div>
    <div class="blog-post">
        <h2>Header #2</h2>
        <p>Here is some more random text.</p>
    </div>
    <div class="blog-post">
        <h2>Here is another header</h2>
        <p>Even more random text within a paragraph</p>
    </div>

And the page looks like:

![](2023-01-10-13-39-51.png)

 Sass allows you to declare and store variables using $ before variable name

 *Create a variable for the text color and apply it to the properties of .blog-post*

    <style type='text/scss'>
        $text-color: red;
        .header{
            text-align: center;
        }
        .blog-post, h2 {
            color: $text-color;
        }
    </style>

<hr>

## 2: Nest CSS with Sass

The code was initialised as:

    <style type='text/scss'>
        .blog-post {

        }
        h1 {
            text-align: center;
            color: blue;
        }
        p {
            font-size: 20px;
        }
    </style>

    <div class="blog-post">
        <h1>Blog Title</h1>
        <p>This is a paragraph</p>
    </div>

Sass allows for nesting of CSS rules!

*Re-organize the CSS rules for both children of .blog-post element*

    <style type='text/scss'>
        .blog-post {
            h1 {
            text-align: center;
            color: blue;
            }
            p {
                font-size: 20px;
            }
        }
        
    </style>

## 3: Create Usable CSS Mixins

A mixin is a group of CSS declarations which can be reused

Suppose we had a div with the following properties:

    div {
        -webkit-box-shadow: 0px 0px 4px #fff;
        -moz-box-shadow: 0px 0px 4px #fff;
        -ms-box-shadow: 0px 0px 4px #fff;
        box-shadow: 0px 0px 4px #fff;
    }

We can abstract out the repetition:

    @mixin box-shadow($x, $y, $blur, $c){
        -webkit-box-shadow: $x $y $blur $c;
        -moz-box-shadow: $x $y $blur $c;
        -ms-box-shadow: $x $y $blur $c;
    }

We can then add the mixin with specified parameters using @include:

    div {
        @include box-shadow(0px, 0px, 4px, #fff);
    }

*Write a mixin for border-radius with $radius parameter. Then givde the #awesome element a border of 15px;*

    <style type='text/scss'>
        @mixin border-radius($radius){
        -webkit-border-radius: $radius;
        -moz-border-radius: $radius;
        -ms-border-radius: $radius;
        border-radius: $radius;
    }


    #awesome {
        width: 150px;
        height: 150px;
        background-color: green;
        @include border-radius(15px);
    }
    </style>

    <div id="awesome"></div>

Output:

![](2023-01-10-13-58-07.png)

## 4: Use @if and @else to Add Logic To Your Styles

*Create a mixin called border-stroke that takes a parameter $val. The mixinwill check for the following conditions:*

- *light - 1px solid black*
- *medium - 3px solid black*
- *heavy* - 6px solid black*
- *otherwise set border to none*


        <style type='text/scss'>

        @mixin border-stroke($val){
            @if $val == light {
            border: 1px solid black;
            } @else if $val == medium {
            border: 3px solid black;
            } @else if $val == heavy {
            border: 6px solid black;
            } @else {
            border: none;
            }
        }


        #box {
            width: 150px;
            height: 150px;
            background-color: red;
            @include border-stroke(medium);
        }
        </style>

        <div id="box"></div>

Output:

![](2023-01-10-14-07-39.png)

## 5: Use @for to Create a Sass Loop

There are two types of for-loops which can be created:

1. "start through end" - includes the end number
2. "start to end" - excludes end number

E.g.:

    @for $i from 1 through 12 {
        .col-#{$i} { width: 100%/12 * $i; }
    }

*Write @for directive that takes a variable $j that goes from 1 to 6 and creates 5 classs called .text-1, ... text-5 with font-size of 15px times index*

    <style type='text/scss'>

    @for $j from 1 to 6{
        .text-#{$j}{
        font-size: 15px * $j;
        }
    }

    </style>

    <p class="text-1">Hello</p>
    <p class="text-2">Hello</p>
    <p class="text-3">Hello</p>
    <p class="text-4">Hello</p>
    <p class="text-5">Hello</p>

Output:

![](2023-01-28-09-08-48.png)