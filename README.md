This site was created to estimate your new utility bill after a move.


*Mobile-first*

An iconized hamburger menu is the default and is replaced by a large text menu. Much of the page scales with viewport size.

Flexbox is used to organize the menu, form panels, and step tracker visualization. Step tracker is hidden by default for very small screens and enabled my media queries.

The layout of the main panels switches from column to row for larger screens.

First and last child selectors are used for the menu so overlapping lines aren't drawn, the last menu item has a rounded corner, and is scalable for more menu items.


*Interactivity*

The about page is built into the secondary panel and the text replaces the graphic. It can be toggled by clicking the graphic itself or the word 'About' anywhere it appears on the page.

The form is functional and has working regex validation and calculation. Data is sourced from EIA.gov and hard coded in an object.

Dynamically importing reference data by API is up next.

If you enjoyed this, check out my next project at https://github.com/TLCgames/TLCgames.github.io !