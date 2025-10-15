#!/bin/bash

# Start the HTML sitemap
cat <<EOT > sitemap.html
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>Website Sitemap | Skill2Job</title>
<link rel='icon' href='favicon.png'>
<style>
body {
  font-family: Roboto, sans-serif;
  background: #f4f7f8;
  color: #333;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
h1 {
  color: #004d40;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  letter-spacing: 1px;
}
ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}
li {
  background: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}
li:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
a {
  text-decoration: none;
  color: #00695c;
  font-weight: 500;
  font-size: 1.1em;
}
a:hover {
  text-decoration: underline;
  color: #004d40;
}
</style>
</head>
<body>
<h1>Website Sitemap</h1>
<ul>
EOT

# Loop through all folders in repo root
for folder in */; do
  if [ -f "$folder/index.html" ]; then
    folder_name=$(basename "$folder")
    echo "<li><a href='/$folder_name/'>$folder_name</a></li>" >> sitemap.html
  fi
done

# Close HTML
echo "</ul></body></html>" >> sitemap.html
