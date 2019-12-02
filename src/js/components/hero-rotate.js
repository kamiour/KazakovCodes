let container = document.querySelector('.hero');
let heroTextarea = document.getElementsByClassName('hero-textarea');
let heroContacts = document.getElementsByClassName('contacts');
let startL;
let startT;
  
$(container).mouseenter(function(event) {
  startL = event.clientX;
  startT = event.clientY;
});

$(container).mousemove(function(event) {
  for (let i = 0; i < heroTextarea.length; i++) {
    heroTextarea[i].style.transitionDuration = '0s';
    if (!startL || !startT) {
      startL = event.clientX;
      startT = event.clientY;      
    }
    heroTextarea[i].style.transform = `perspective(450px) rotateX(${-(-startT+event.clientY)*0.00025}rad) rotateY(${-(-startL+event.clientX)*0.0001}rad)`;
    if (i == 0) {
      heroContacts[i].style.transitionDuration = '0s';
      heroContacts[i].style.transform = `perspective(450px) rotateX(${(-startT+event.clientY)*0.00025}rad) rotateY(${(-startL+event.clientX)*0.0001}rad)`;
    }
  }
  
});

$(container).mouseleave(function(event) {
  for (let i = 0; i < heroTextarea.length; i++) {
    heroTextarea[i].style.transitionDuration = '0.5s';
    heroTextarea[i].style.transform = 'none';
    
    if (i == 0) {
      heroContacts[i].style.transitionDuration = '0.5s';
      heroContacts[i].style.transform = 'none';
    }
  }
});
