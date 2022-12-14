# Project 6: Learn CSS Flexbox by Building a Photo Gallery

In this project, I will attempt to recreate the Rothko Painting project seen below:

<img src="Images/screenshot.PNG" alt="drawing" width="400"/>

---

## Notes:
- **box-sizing** property allows us to set total width to include both the padding and border when box-sizing is set to border-box

## Flexbox Notes:
### **What is Flexbox?**
Flexbox was designed as a one dimensional layout model, its a method which offers spaced distribution between items

### **The Two Axes of Flexbox**

There are 2-axes for flexbox, a main axis and cross axis

### **Flex-Direction**
The flex-direction property is the main direction of flexbox. This determines whether the items in the flexbox go horizontally (row) or vertically (column).

<img src="Images/basics1.png"  width="250"/>

The **Flex-direction has 4 possible values**:

1) row (default)
2) row-reverse
3) column
4) column reverse

- row:

    <img src="Images/row.PNG" width="250"/>

- row-reverse:

    <img src="Images/row-reverse.PNG" width="250"/>

- column

    <img src="Images/column.PNG" width="250"/>

- column-reverse

    <img src="Images/column-reverse.PNG" width="250"/>

### **Cross Direction**
This is the **perpendicular direction of the Flex-direction**

### **Start and End Lines**
If the flex direction is row then the start line will be on the LHS and end line will be on RHS as shown below:

<img src="Images/start.png" width="400"/>

### The Flex Container

The div or element which used flexbox is called the **flex container**. A flex container has the display property set to "flex" or "inline-flex"


### **Allignment, Justification and Distribution of Space**

Flebox's key feature is the ability to align and justify content on thye main and cross axes. The following properties can be applied to the flex container

#### **align-items**
The align elements property lets us align elements on the **cross axis**

Suppose we wanted to align the items towards the end of the column direction, we would set the align-items propery to **flex-end**:

<img src="Images/flex-end.PNG" width="400"/>

The align-items's default value is **flex-start**:

<img src="Images/flex-start.PNG" width="400"/>

If the align-items is set to **center**:

<img src="Images/center.PNG" width="400"/>

#### **justify-content** 

This property lets us align the items on the **main** axis.

The default value of the justify-content is flex-start.

If it is set to **flex-end**:

<img src="Images\juistify-end.PNG" width="400"/>

If set to **center**:

<img src="Images\justify-center.PNG" width="400"/>

The justify-content property can also be set to a value which will add spacing between items, there are 3 spaced options

1) **space-between**: elements are spaced evenly where first item is on start line and last item is on end line

<img src="Images\space-between.PNG" width="400"/>

2) **space around**: elements have even spacing between elements and half space at the ends

<img src="Images\space-around.PNG" width="400"/>

3) **space-evenly**: elements have even spacing

<img src="Images\space-evenly.PNG" width="400"/>
