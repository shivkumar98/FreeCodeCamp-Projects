# 2 jQuery

# Introduction

jQuery is the most widely used JavaScript libraries, it simplifies client-side JavaScript so it outputs consistently for all browsers.

In this section, I will learn how to select, remove, clone and modify different elements using jQuery

<br><hr>

# 2.1 Tutorial Commentary

## Step 1: Learn How Script Tags and Documents Ready Work

Before starting this tutorial we need to add a script element to our HTML.  This is where the browser will run any JavaScript code. We shall add a function which prevents code running before HTML is rendered.

*Inside your script element, add this code: $(document).ready(function() { to your script. Then close it on the following line (still inside your script element) with: });*

I add the following above the comment of the HTML from Bootstrap tutorial:

    <script>
        $(document).ready(function() {});
    </script>

<br><hr>


## Step 2: Target HTML Elements with Selectors Using jQuery

All jQuery functions start with $ - dollar sign operator

Using jQuery to apply the Animate.css bounce class to your button elements.

*Inside the ready function, I use the addClass functiont to add animated and bounce classes:*

    <script>
    $(document).ready(function() {
        $("button").addClass("animated bounce");
    });
    </script>

Now the elements are animated:

<img src="step-02.gif">

<br><hr>

## Step 3: Target Elements by Class Using jQuery

 *To the Well elements, add the classes animated and shake.*

 We can target classes the same way as in CSS, by using the .classname targeter:


    $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
    });

The App now looks like:

<img src="step-03.gif">

<br><hr>

## Step 4: Target Elements by id using jQuery

We can also target elements by their id by using #id

Use jQuery's .addClass() function to add the classes animated and fadeOut to the buttons with id target3

    $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeout")
    });

The App now looks like:


<img src="step-04.gif">

<br><hr>

# Step 5: Delete your jQuery Functions

*Delete all three of these jQuery functions from your document ready function, but leave your document ready function itself intact.*

    <script>
        $(document).ready(function() {
        
        });
    </script>

The App now looks like:

![](2023-01-06-08-18-56.png)

<br><hr>

### Step 6: Target the same Element with Multiple jQuery Selectors

*Using .addClass(), add only one class at a time to the same element, three different ways:*

*Add the animated class to all elements with type button.*

*Add the shake class to all the buttons with class .btn.*

*Add the btn-primary class to the button with id #target1.*


    <script>
        $(document).ready(function() {
            $("button").addClass("animated")
            $(".btn").addClass("shake")
            $("#target1").addClass("btn-primary")
        });
    </script>

The App now looks like:

<img src="step-06.gif">

<br><hr>

## Step 7: Remove Classes from an Element with jQuery

jQuery has a **removeClass()** function!

*Remove the btn-default class from all of our button elements.*

    <script>
        $(document).ready(function() {
            $("button").addClass("animated bounce");
            $(".well").addClass("animated shake");
            $("#target3").addClass("animated fadeOut");
            $("button").removeClass("btn-default")
        });
    </script>

The App now looks like:

![](2023-01-06-08-29-35.png)

<br><hr>

## Step 8: Change the CSS of an Element Using jQuery

The jQuery **.css()** function allows you to change the CSS of an element

*Delete your jQuery selectors, leaving an empty document ready function.*

*Select target1 and change its color to red.*

    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red")
        });
    </script>

The App now looks like:

![](2023-01-06-08-35-38.png)

<br><hr>

## Step 9: Disable an Element Using jQuery

We can modify other properties of elements using the **.prop()** function.

We can disable a button so it greys out after being clicked with the following syntax:

    $("button").prop("disabled", true);

*Disable only the target1 button.*

    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
    });
    </script>

The App now looks like:

![](2023-01-08-12-46-18.png)

<br><hr>

## Step 10: Change Text Inside an Element Using jQuery

jQuery has a **.html()** function which lets you modify the contents within an element - everything will be completely replaced!


*Change the button with id target4 by emphasizing its text.*

    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target4").html("<em>#target4</em>");
    });
    </script>

The App now looks like:

![](2023-01-08-12-50-10.png)

<br><hr>

## Step 11: Remove an Element Using jQuery

jQuery has the **.remove()** function which removes an HTML element entirely

*Remove the #target4 element from the page*

    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
        });
    </script>

The App now looks like:

![](2023-01-08-12-53-46.png)

<br><hr>

## Step 12: Use appendTo to Move Elements with jQuery

The **appendTo()** function allows you to select HTML elements and append them to another element.

*Move your target2 element from your left well to your right well*

    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well")
        });
    </script>

The App now looks like:

![](2023-01-08-12-57-01.png)

<br><hr>

## Step 13: Clone an Element Using jQuery

The **clone()** function makes a copy of an element.

For example, if we wanted to copy target2 from our left-well to our right well, we would write:

    $("#target2").clone().appendTo("#right-well");

*Clone your target5 element and append it to your left well*

    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
        });
    </script>

The App now looks like:

![](2023-01-08-13-02-21.png)

<br><hr>

## Step 14: Target the Parent of an Element using jQuery

Every HTML element has a parent which it **inherits** its properties from.

The jQuery function **parent()** allows you to access the parent of whichever element is selected.

*Give the parent of the #target1 element a background-color of red*

    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red")
        });
    </script>

The App now looks like:

![](2023-01-08-13-13-00.png)

<br><hr>

## Step 15: Target the Children of an Element Using jQuery

HTML elements which are one level belone of another are called **children** of the element.

The jQuery function **children()** lets you access the children of selected element.

*Give all the children of your right-well elements the color orange*

    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red");
            $("#right-well").children().css("color", "orange");
        });
    </script>

The App now looks like:

![](2023-01-08-13-17-27.png)

<br><hr>

## Step 16: Target a Specific Child of an Element Using jQuery

jQuery can use CSS selectors to target specific elements. E.g. target:nth-child(n) lets you target nth element with the target class of element or type.

For example, if we wanted to give the third element in each well the bounce class:

    $(".target:nth-child(3)").addClass("animated bounce");

*Make the second child in each of your well elements bounce*

    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red");
            $("#right-well").children().css("color", "orange");
            $(".target:nth-child(2)").addClass("animated bounce");
        });
    </script>

The App now looks like:

![](step-16.gif)