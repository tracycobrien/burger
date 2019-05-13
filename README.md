# Burger App

### Overview of the Assignment

In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). I followed the MVC design pattern; using Node and MySQL to query and route data in my app, and Handlebars to generate my HTML.


### Basics about my App

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

*  [Heroku](https://dashboard.heroku.com/apps/burger757).


* [Github](https://github.com/tracycobrien/burger.git).

### Submission on BCS

* **This assignment will be deployed.** * I will submit both the deployed Heroku link AND the link to my Github Repository!


#### Directory structure will look like the diagram below:

All the recommended files and directories from the steps above will look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


