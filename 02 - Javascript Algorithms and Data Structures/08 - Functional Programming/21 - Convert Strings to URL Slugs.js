// many CMS have titles of a post added to part of the URL for bookmarking purposes
// E.g. a post with title "Stop Using Reduce" to .../stop-using/reduce

// fill the function so it converts a string title and returns a hyphenated version of the URL

// Only change code below this line
function urlSlug(title) {
    return title
    .trim()
    .toLowerCase()
    .split(/\s/)
    .filter(i => i!='')
    .join("-")
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

console.log(urlSlug("Winter Is Coming"))

console.log(urlSlug(" Winter Is  Coming"))