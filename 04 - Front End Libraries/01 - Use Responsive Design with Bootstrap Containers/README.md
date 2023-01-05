# 1 Use Responsive Design with BootStrap Fluid Containers

In the HTML and CSS section we built a Cat Photo App

We shall remake this with Bootstrap responsive CSS framework.

Bootstrap will figure out how wide the screen is and resize HTML elements.

We can add this frameword by adding the following link to the top of the code:

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

## Starting HTML/CSS and App

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

![](2023-01-05-12-24-33.png)

## Step 1: Nesting all elements into a container-fluid div

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

## Step 2: Make Images Mobile Responsive

We shall add a new image below the existing one with a link: https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg

Bootstrap has a class which makes the image the exact width of screen: **img-responsive**

I add a new image below the pre-existing one:

    <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive">

The app now looks like:
    
![](2023-01-05-12-30-56.png)

## Step 3: Center Text With Bootstrap

Bootstrap has a **text-center** class which centers text.

I center the heading using the above class:

    <h2 class="red-text text-center">CatPhotoApp</h2>

The app now looks like:

![](2023-01-05-12-38-23.png)

## Step 4: Create a Bootstrap Button

We can create multiple types of buttons as shown in the documentation:

![](2023-01-05-12-39-49.png)

I create a new button below the large kitten photo with default styling:

    <button class="btn btn-default">Like</button>

The app now looks like:

![](2023-01-05-12-44-12.png)

## Step 5: Create a Block Element Bootstrap Button

Buttons with btn and btn-default classes will only be as wide as the text.

We can use **btn-block** so butoton will take up full horizontal space.

I add this class to the button:

    <button class="btn btn-default btn-block">Like</button>

The app now looks like:

![](2023-01-05-12-48-11.png)

## Step 5: Create a Block Element Bootstrap Button
