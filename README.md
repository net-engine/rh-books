# The Red Hat Books Project!

## Setup

first: 

    bundle install


then: 

    npm install


then:

    grunt

this will compile the sass and start a server listening on 9001

sooo, visit: 

    localhost:9001

to view an example document


## To make addtions

All sass is compiled by running `grunt`

To add and remove icons from the icon font just put / remove .svg files in `/source/icons/svg/` and run `grunt webfont`
