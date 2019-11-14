let deferredPrompt;
const addBtn = document.querySelector('.a2hs-button');
addBtn.style.display = 'none';

function mySize(x) {

  if (x.matches) {
    addBtn.style.display = 'block';
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
    
      addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
      });
    });
  } else addBtn.style.display = 'none';

}

var x = window.matchMedia("(min-width: 980px)");
mySize(x); // Call listener function at run time
x.addListener(mySize);