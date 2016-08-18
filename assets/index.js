"use strict";

var dropOptions = (target, content) => {
  return {
    target: document.querySelector(target),
    content: content,
    position: 'top center',
    openOn: 'always',
    constrainToWindow: false,
    constrainToScrollParent: false,
    classes: 'drop-theme-arrows',
    hoverOpenDelay: 0,
    hoverCloseDelay: 50,
    focusDelay: 0,
    blurDelay: 50,
    tetherOptions: {}
  }
};

var dropContent = (title, before, highlight, after) => {
  return '<h4>' + title + '</h4>'
  + '<p>' + before
  + '<span>' + highlight + '</span>'
  + after + '</p>';
}

var drop1 = new Drop(dropOptions('.drop-target1', dropContent('Skills', '', 'Lorem ipsum ', 'dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat.')));
var drop2 = new Drop(dropOptions('.drop-target2', dropContent('Hobbies', '', 'Lorem ipsum ', 'dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat.')));
var drop3 = new Drop(dropOptions('.drop-target3', dropContent('Values', '', 'Lorem ipsum ', 'dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat.')));
