"use strict";

var dropOptions;

dropOptions = {
  target: document.querySelector('.drop-target'),
  content: 'Welcome to the future!',
  position: 'bottom left',
  openOn: 'click',
  constrainToWindow: true,
  constrainToScrollParent: true,
  classes: 'drop-theme-arrows',
  hoverOpenDelay: 0,
  hoverCloseDelay: 50,
  focusDelay: 0,
  blurDelay: 50,
  tetherOptions: {}
};

var drop;

drop = new Drop(dropOptions);
