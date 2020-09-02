## How to
 1. Check out the repo
 1. Run `npm install` to install the dependencies - you will need this if you actually want to generate the CSS (both standard and minified). Your use case may not include this as a requirement if your workflow includes on-the-fly compilation via tools such as WebPack.
 1. Run `gulp` to generate the CSS
 1. Do whatever you want with the CSS
 
 ## Todo
 * Further refactoring of components, particularly fields which currently look janky as hell.
 * More themes!
 * Better workflow - likely turn it into an npm package that can be pulled in easiy for other projects. For my personal use its fine short-term for me to gulp script copy the CSS wherever I need it, but this is not a long-term solution!
