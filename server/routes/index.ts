// export default eventHandler((event) => {
//   return "Start by editing <code>server/routes/index.ts</code>.";
// });


// Import Nitro's event handler
export default eventHandler(async (event) => {
  // Fetch raw content from GitHub (adjust the URL to point to your index.html file)
  const response = await fetch('https://raw.githubusercontent.com/Amudhavamshi/anjutha-mistress/refs/heads/main/index.html');
  
  // Get the HTML content
  const htmlContent = await response.text();

  // Return the fetched HTML content as the response
  return htmlContent;
});
