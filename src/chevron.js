$('#chev').on('click', function(ev) {
    ev.preventDefault();
    $(this).toggleClass('chevron--down chevron--up');
    
    /*
    // If you want to spawn the event directly from the SVG instead of a parent
    // anchor, use the code below instead of the code above.  You can't use
    // $.toggleClass() directly on SVG's.  It's not supported. The function
    // below also preserves the order of the class in the list of classes for
    // the svg element. So, you might want to use this function to peserve
    // class name order if that's important to you due to CSS specificity.
    // ----------------------------------------------------------------------
      var classes = $(this).attr('class').split(' '),
          chevronClass = classes.indexOf('chevron'),
          chevronActiveClass = classes.indexOf('chevron--up');
  
      if (chevronClass > -1) {
        classes.splice(chevronClass,1,'chevron--up');
      }
  
      if (chevronActiveClass > -1) {
        classes.splice(chevronActiveClass,1,'chevron');
      }
  
      $(this).attr('class',classes.join(' '));
    */
    
  })