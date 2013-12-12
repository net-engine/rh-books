# The Red Hat Books Project!

## Examples

The following are based on output from REL Power Management Guide

* [HTML Single](http://net-engine.github.io/rh-books/html-single.html)

* [HTML](http://net-engine.github.io/rh-books/html.html)

* [HTML](http://net-engine.github.io/rh-books/html-single-2.html)


## Dev Setup

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


## To make additions

All sass is compiled by running `grunt`

To add and remove icons from the icon font just put / remove .svg files in `/source/icons/svg/` and run `grunt webfont`
