Author: Jimmy Wang
Date: 2024-03-12

Node version used is:
"npm" : ">=10.4.0",
"node" : ">=20.11.0"

Instructions:
------------
Install Node.js
npm install
npm start

Challenge 1

Create an app using any language you prefer, that searches the Google Books API using the following requirements:

- You should include pagination, showing only 10 results at a time
- Each result should be formatted as First author [, second author [, third author...]] - Title
- You should be able to click a result and it should expand to show its description, if one exists. If there is no description, use your own judgment.
- The search as a whole should also return the:
    - total number of search results,
    - name of the single author who appears most commonly in the results,
    - earliest and most recent publication dates within the search parameters,
    - and the server response time

You will not be judged on design. If you can make it look good and make it accessible, even better.

When you're done, please host the challenge on Github, Bitbucket, Gitlab or another hosted version control, or send us a package we can stand up ourselves.
