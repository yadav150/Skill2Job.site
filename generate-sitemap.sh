#!/bin/bash

cat <<EOT > sitemap.html
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>Website Sitemap | Skill2Job</title>
<link rel='icon' href='favicon.png'>
<style>
body { font-family: Roboto, sans-serif; background:#f9f9f9; color:#333; max-width:900px; margin:auto; padding:20px;}
h1 { color:#004d40; text-align:center; margin-bottom:20px;}
ul { list-style:none; padding:0; }
li { background:#fff; margin:8px 0; padding:12px 16px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); transition:0.3s;}
li:hover { background:#e0f2f1; }
a { text-decoration:none; color:#00695c; font-weight:500; }
a:hover { text-decoration:underline; }
</style>
</head>
<body>
<h1>Website Sitemap</h1>
<ul>
EOT

for folder in */; do
  if [ -f "$folder/index.html" ]; then
    folder_name=$(basename "$folder")
    echo "<li><a href='/$folder_name/'>$folder_name</a></li>" >> sitemap.html
  fi
done

echo "</ul></body></html>" >> sitemap.html
