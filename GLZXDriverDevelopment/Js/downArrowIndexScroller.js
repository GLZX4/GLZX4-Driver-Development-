//Code for scrolling down the page on image click adapted from: https://www.w3schools.com/jsref/met_win_scrollto.asp

//added a DOMContentLoaded event listener to ensure the whole webpage has been loaded first.
document.addEventListener('DOMContentLoaded', () => {
    const downArrow = document.querySelector('.downArrow');
  
    downArrow.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  });