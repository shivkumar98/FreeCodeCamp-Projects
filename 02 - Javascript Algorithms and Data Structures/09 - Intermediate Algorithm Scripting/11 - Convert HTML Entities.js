// convert &, <, ? ", ' in a string to their corresponding HTML entities

// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

function convertHTML(str) {
    return str.replace(/&/g, "&amp;")
          .replace(/</g,"&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;")
  }
  
  convertHTML("Dolce & Gabbana");
  
  console.log(convertHTML("Hamburgers < Pizza < Tacos"))
  
  console.log(convertHTML('Stuff in "quotation marks"'))