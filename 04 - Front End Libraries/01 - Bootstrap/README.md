# 1 Use Responsive Design with BootStrap Fluid Containers

## Table of Contents:


[**1.1 Building a Cat App**](#11-building-a-cat-app)
 * [Step 1: Nesting all elements into a container-fluid div](#--step-1--nesting-all-elements-into-a-container-fluid-div--)
 * [Step 2: Make Images Mobile Responsive](#--step-2--make-images-mobile-responsive--)
  * [Step 3: Center Text With Bootstrap](#--step-3--center-text-with-bootstrap--)
  * [Step 4: Create a Bootstrap Button](#--step-4--create-a-bootstrap-button--)
  * [Step 5: Create a Block Element Bootstrap Button](#--step-5--create-a-block-element-bootstrap-button--)
  * [Step 6: Taste the Bootstrap Button Color Rainbow](#--step-6--taste-the-bootstrap-button-color-rainbow--)
  * [Step 7: Call out Optional Actions with btn-info](#--step-7--call-out-optional-actions-with-btn-info--)
  * [Step 8: Warn Your Users of a Dangerous Action](#--step-8--warn-your-users-of-a-dangerous-action--)
  * [Step 9: Use the Bootstrap Grid to Put Elements Side By Side](#--step-9--use-the-bootstrap-grid-to-put-elements-side-by-side--)
  * [Step 10: Ditch Custom CSS for BootStrap](#--step-10--ditch-custom-css-for-bootstrap--)
  * [Step 11: Use a span to Target Inline Elements](#step-11--use-a-span-to-target-inline-elements)
  * [Difference between inline and block](#difference-between-inline-and-block)
  * [Step 12: Create a Custom Heading](#--step-12--create-a-custom-heading--)
  * [Step 13: Add Font Awesome Icons to our Buttons](#--step-13--add-font-awesome-icons-to-our-buttons--)
  * [Step 14: Add Font Awesome Icons to all of our Buttons](#--step-14--add-font-awesome-icons-to-all-of-our-buttons--)
  * [Step 15: Responsively Style Radio Buttons](#--step-15--responsively-style-radio-buttons--)
  * [Code At This Point](#--code-at-this-point--)
  * [Step 16: Responsively Style Checkboxes](#--step-16--responsively-style-checkboxes--)
  * [Step 17: Style Text Inputs as Form Controls](#--step-17--style-text-inputs-as-form-controls--)
  * [Step 18: Line up Form Elements Responsively with Bootstrap](#--step-18--line-up-form-elements-responsively-with-bootstrap--)

[**1.2 Creating Something from Scratch**](#12-creating-something-from-scratch-)
  * [Step 1: Create a Bootstrap Headline](#--step-1--create-a-bootstrap-headline--)
  * [Step 2: House our page within a Bootstrap contained-fluid div](#--step-2--house-our-page-within-a-bootstrap-contained-fluid-div--)
  * [Step 3: Create a Bootstrap Row](#--step-3--create-a-bootstrap-row--)
  * [Step 4: Split Your Bootstrap Row](#--step-4--split-your-bootstrap-row--)
  * [Step 5: Create Bootstrap Wells](#--step-5--create-bootstrap-wells--)
  * [Step 6: Add Elements within Your Bootstrap Wells](#--step-6--add-elements-within-your-bootstrap-wells--)
  * [Step 7: Apply the Default Bootstrap Button Style](#--step-7--apply-the-default-bootstrap-button-style--)
  * [Step 8: Create a Class to Target with jQuery Selectors](#--step-8--create-a-class-to-target-with-jquery-selectors--)
  * [Step 9: Add id Attributes to Bootstrap Elements](#--step-9--add-id-attributes-to-bootstrap-elements--)
  * [Step 10: Label Bootstrap Wells](#--step-10--label-bootstrap-wells--)
  * [Step 11: Give Each Element a Unique id](#--step-11--give-each-element-a-unique-id--)
  * [Step 12: Label; Bootstrap Buttons](#--step-12--label--bootstrap-buttons--)
  * [Step 13: Use Comments to Clarify Code](#--step-13--use-comments-to-clarify-code--)


<br><hr>

# Introduction

In the HTML and CSS section we built a Cat Photo App

We shall remake this with Bootstrap responsive CSS framework.

Bootstrap will figure out how wide the screen is and resize HTML elements.

We can add this frameword by adding the following link to the top of the code:

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

<br><hr>

# 1.1 Building a Cat App

The Cat Photo App has the following HTML:

    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <h2 class="red-text">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

    <p>Things cats love:</p>
    <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
    </form>

And the app looks like:


![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-24-33.png)

<br><hr>

## **Step 1: Nesting all elements into a container-fluid div**

The **container-fluid** is a container class which takes width of entire viewport

The code now looks like:

    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>
    <div class="container-fluid">
    
    <h2 class="red-text">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

    <p>Things cats love:</p>
    <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
    </form>
    </div>

<br><hr>

## **Step 2: Make Images Mobile Responsive**

We shall add a new image below the existing one with a link: https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg

Bootstrap has a class which makes the image the exact width of screen: **img-responsive**

I add a new image below the pre-existing one:

    <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive">

The app now looks like:
    
![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-30-56.png)

<br><hr>

## **Step 3: Center Text With Bootstrap**

Bootstrap has a **text-center** class which centers text.

I center the heading using the above class:

    <h2 class="red-text text-center">CatPhotoApp</h2>

The app now looks like:


![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-38-23.png)

<br><hr>

## **Step 4: Create a Bootstrap Button**

We can create multiple types of buttons as shown in the documentation:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-39-49.png)

I create a new button below the large kitten photo with default styling:

    <button class="btn btn-default">Like</button>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-44-12.png)

<br><hr>

## **Step 5: Create a Block Element Bootstrap Button**

Buttons with btn and btn-default classes will only be as wide as the text.

We can use **btn-block** so butoton will take up full horizontal space.

I add this class to the button:

    <button class="btn btn-default btn-block">Like</button>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-48-11.png)

<br><hr>

## **Step 6: Taste the Bootstrap Button Color Rainbow**

The **btn-primary** is often used as the main color for highlighting actions.

I replace the btn-default class with btn-primary:

    <button class="btn btn-primary btn-block">Like</button>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-53-37.png)

<br><hr>

## **Step 7: Call out Optional Actions with btn-info**

The **btn-info** class is used for optional actions which user can take.

I create a new button below like button:

    <button class="btn btn-block btn-primary">Like</button>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-56-44.png)

<br><hr>

## **Step 8: Warn Your Users of a Dangerous Action**

The **btn-danger** class is often using for actions which are destructive such as deleting a photo.

I add a delete button belo the info button:

    <button class="btn btn-block btn-danger">Delete</button>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-12-59-24.png)

<br><hr>

## **Step 9: Use the Bootstrap Grid to Put Elements Side By Side**

Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one &lt;div class="row"> element, then each of them within a &lt;div class="col-xs-4"> element.

Bootstrap uses a 12-column grid system. We can specify positioning of elements within this grid by specifying a ratio of 12. So if we want an element to take half of the grid using 6.

For this step, I need to make a grid for a small screen so I use col-xs-* where * is replaced by a proportion of 12

I first create a row div:

    <div class="row">
    </div>

I surround each of the buttons with a div with class col-xs-4 and inserted them in the row div:

    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
        </div>  
    </div>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-13-22-54.png)

<br><hr>

## **Step 10: Ditch Custom CSS for BootStrap**


*Delete the .red-text, p, and .smaller-image CSS declarations from your style element so that the only declarations left in your style element are h2 and thick-green-border.*

*Then delete the p element that contains a dead link. Then remove the red-text class from your h2 element and replace it with the text-primary Bootstrap class.*

*Finally, remove the smaller-image class from your first img element and replace it with the img-responsive class.*

Currently there is CSS defined as:

    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

It now looks like:

    <style>

    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    </style>



Removed red-text class and added text-primary class to h2:

    <h2 class="text-primary text-center">CatPhotoApp</h2>

I removed smaller-image class from top image and added img-responsive:

    <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>


The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-13-44-45.png)

## Step 11: Use a span to Target Inline Elements

Using a span element, nest the word love inside the p element that currently has the text Things cats love. Then give the span the class text-danger to make the text red.

## Difference between inline and block

Previously, we used btn-block class so that an element takes the whole width of container. This illustrates inline elements:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-13-50-49.png)

I update the p element with an inline span:

    <p>Things cats <span class="text-danger">love</span></p>

<br><hr>

## **Step 12: Create a Custom Heading**

*Nest your first image and your h2 element within a single &lt;div class="row"> element. Nest your h2 element within a &lt;div class="col-xs-8"> and your image in a &lt;div class="col-xs-4"> so that they are on the same line.*


    <div class="row">
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
        </div>
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
    </div>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-14-00-10.png)

<br><hr>

## **Step 13: Add Font Awesome Icons to our Buttons**



*Use Font Awesome to add a thumbs-up icon to your like button by giving it an i element with the classes fas and fa-thumbs-up. Make sure to keep the text Like next to the icon.*


Font Awesome is a convienent library of icons which are treated just like fonts.

We can add Font Awesome by adding the following link to the top of HTML: 

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

The i tag was originally made to make text italic but is now used for icons. E.g.:

    <i class="fas fa-info-circle"></i>


I update the Like button:

    <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i>Like</button>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-14-57-47.png)

<br><hr>

## **Step 14: Add Font Awesome Icons to all of our Buttons**

We can create a Info Circle icon using **fa-info-circle** and a bin icon using **fa-trash**.

*Use Font Awesome to add an info-circle icon to your info button and a trash icon to your delete button.*

I update the Info and Delete buttons:

    <button class="btn btn-block btn-info"><i class="fas fa-info-circle"></i>Info</button>
    <button class="btn btn-block btn-danger"><i class="fas fa-trash"></i>Delete</button>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-15-03-39.png)

<br><hr>

## **Step 15: Responsively Style Radio Buttons**

*Nest both your radio buttons within a &lt;div class="row"> element. Then nest each of them within a &lt;div class="col-xs-6"> element.*

We can use classes from the system (like col-xs-*) on form elements too. So we can spread radio buttons across page.

The code for the radio-buttons looks like:

    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
       
The code now looks like:

    <div class="row">
        <div class="col-xs-6"><label><input type="radio" name="indoor-outdoor"> Indoor</label></div>
        <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        </div>
    </div>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-15-13-50.png)

<br><hr>

## **Code At This Point**

The entire HTML file at this point looks like:

    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        
    <div class="row">
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor">
            Indoor</label>
        </div>
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        </div>
    </div>
        
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>

<br><hr>

## **Step 16: Responsively Style Checkboxes**

We can apply grid styling to checkboxes also!

*Nest all three of your checkboxes in a &lt;div class="row"> element. Then nest each of them in a &lt;div class="col-xs-4"> element.*

### Solution

The code currently looks like:

    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>

The code has been updated to:

    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
      </div>
    </div>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-15-23-42.png)


<br><hr>

## **Step 17: Style Text Inputs as Form Controls**

The paper-plane submit icon has class **fa-paper-plane**

*Give your form's text input field a class of form-control. Give your form's submit button the classes btn btn-primary. Also give this button the Font Awesome icon of fa-paper-plane.*

I update the submit button to:

    <button class="btn btn-primary" type="submit"><i class="fa fa-paper-plane"></i> Submit</button>

I add form-control class to the input element:

    <input class="form-control" type="text" placeholder="cat photo URL" required>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-15-35-18.png)

<br><hr>

## **Step 18: Line up Form Elements Responsively with Bootstrap**

Now let's get your form input and your submission button on the same line. We'll do this the same way we have previously: by using a div element with the class row, and other div elements within it using the col-xs-* class.

*Nest both your form's text input and submit button within a div with the class row. Nest your form's text input within a div with the class of col-xs-7. Nest your form's submit button in a div with the class col-xs-5.*

The code currently looks like:

    <input type="text" class="form-control" placeholder="cat photo URL" required>
        <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>

I updated it to:

    <div class="row">
        <div class="col-xs-7">
            <input type="text" class="form-control" placeholder="cat photo URL" required>
        </div>
        <div class="col-xs-5">
            <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
        </div>
    </div>

The Cat App is now finished:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-15-44-57.png)

The entire code for this app is:

    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <div class="row">
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        </div>
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        </div>
        </div>
        <div class="row">
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Loving</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Lazy</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Crazy</label>
        </div>
        </div>
            <div class="row">
            <div class="col-xs-7">
                <input type="text" class="form-control" placeholder="cat photo URL" required>
            </div>
            <div class="col-xs-5">
                <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
            </div>
        </div>
    </form>
    </div>

<br><hr>

# 1.2 Creating Something from Scratch:

## **Step 1: Create a Bootstrap Headline**


We shall build a jQuery playground which will be used in the jQuery section

*To start with, create an h3 element, with the text jQuery Playground.*

*Color your h3 element with the text-primary Bootstrap class, and center it with the text-center Bootstrap class.*

    <h3 class="text-primary text-center">jQuery Playground</h3>

<br><hr>

## **Step 2: House our page within a Bootstrap contained-fluid div**

*Nest your h3 element within a div element with the class container-fluid.*

    <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    </div>

<br><hr>

## **Step 3: Create a Bootstrap Row**

*Create a div element below the h3 tag, with a class of row.*

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row"></div>
    </div>

<br><hr>

## **Step 4: Split Your Bootstrap Row**

*Create two div elements within your row, both with the class col-xs-6.*

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            </div>
            <div class="col-xs-6">
            </div>
        </div>
    </div>

<br><hr>

## **Step 5: Create Bootstrap Wells**

The Bootstrap **well** clas is used for styling columns of the grid

*Nest one div element with the class well within each of your col-xs-6 div elements.*

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well"></div>
            </div>
            <div class="col-xs-6">
                <div class="well"></div>
            </div>
        </div>
    </div>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-16-18-00.png)

<br><hr>

## **Step 6: Add Elements within Your Bootstrap Wells**

Nest three buttons within each of the well divs.

    <div class="row">
        <div class="col-xs-6">
        <div class="well">
            <button></button>
            <button></button>
            <button></button>
        </div>
        </div>
        <div class="col-xs-6">
        <div class="well">
            <button></button>
            <button></button>
            <button></button>
        </div>
        </div>
    </div>
    </div>

The app now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-16-20-49.png)

<br><hr>

## **Step 7: Apply the Default Bootstrap Button Style**

*Apply the default Bootstrap button style*


    <div class="row">
        <div class="col-xs-6">
        <div class="well">
            <button class="btn btn-default"></button>
            <button class="btn btn-default"></button>
            <button class="btn btn-default"></button>
        </div>
        </div>
        <div class="col-xs-6">
        <div class="well">
            <button class="btn btn-default"></button>
            <button class="btn btn-default"></button>
            <button class="btn btn-default"></button>
        </div>
        </div>
    </div>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-16-22-41.png)

<br><hr>

## **Step 8: Create a Class to Target with jQuery Selectors**

We do not need to use classes just for styling, classes can be targeted with jQuery

*Add target class to each button.*


    <div class="row">
        <div class="col-xs-6">
        <div class="well">
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
        </div>
        </div>
        <div class="col-xs-6">
        <div class="well">
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
        </div>
        </div>
    </div>

<br><hr>

## **Step 9: Add id Attributes to Bootstrap Elements**

Give the well on the left the id of left-well. Give the well on the right the id of right-well.

    <div class="row">
        <div class="col-xs-6">
        <div class="well" id="left-well">
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
        </div>
        </div>
        <div class="col-xs-6">
        <div class="well" id="right-well">
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
        </div>
        </div>
    </div>

<br><hr>

## **Step 10: Label Bootstrap Wells**

For sake of clarity, we shall add some labels above the wells.

*Above your left-well, inside its col-xs-6 div element, add a h4 element with the text #left-well.*

*Above your right-well, inside its col-xs-6 div element, add a h4 element with the text #right-well.*

    <div class="row">
        <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
        </div>
        </div>
        <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
            <button class="btn btn-default target"></button>
        </div>
        </div>
    </div>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-16-27-58.png)

<br><hr>

## **Step 11: Give Each Element a Unique id**

*We want to be able to target each of these buttons. So I will give each button an id of target1 to target6*

    <div class="row">
        <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
            <button class="btn btn-default target" id="target1"></button>
            <button class="btn btn-default target target" id="target2"></button>
            <button class="btn btn-default target target" id="target3"></button>
        </div>
        </div>
        <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
            <button class="btn btn-default target" target" id="target4"></button>
            <button class="btn btn-default target" target" id="target5"></button>
            <button class="btn btn-default target" target" id="target6"></button>
        </div>
        </div>
    </div>

<br><hr>

## **Step 12: Label; Bootstrap Buttons**

*Give each button element text which corresponds to its id.*


    <div class="row">
        <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
            <button class="btn btn-default target" id="target1">#target1</button>
            <button class="btn btn-default target" id="target2">#target2</button>
            <button class="btn btn-default target" id="target3">#target3</button>
        </div>
        </div>
        <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
            <button class="btn btn-default target" id="target4">#target4</button>
            <button class="btn btn-default target" id="target5">#target5</button>
            <button class="btn btn-default target" id="target6">#target6</button>
        </div>
        </div>
    </div>

The App now looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-16-33-06.png)

<br><hr>

## **Step 13: Use Comments to Clarify Code**

Add a comment at the top of your HTML that says Code below this line should not be changed

The finished code now looks like:

    <!-- Code below this line should not be changed -->
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
            </div>
            <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
            </div>
        </div>
    </div>

The finished App looks like:

![](/04%20-%20Front%20End%20Libraries/01%20-%20Use%20Responsive%20Design%20with%20Bootstrap%20Containers/screenshots/2023-01-05-16-37-25.png)
