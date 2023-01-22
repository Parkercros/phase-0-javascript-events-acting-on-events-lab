function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left);
    left -= 10;
    if(left>=0)
    dodger.style.left = left + 'px';
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left);
    left += 10;
    if(left<=window.innerWidth)
    dodger.style.left = left + 'px';
  }
  