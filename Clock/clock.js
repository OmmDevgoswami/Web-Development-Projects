
setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let secondes = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
  
    // digits time indicator
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
  
  
    // dot time indicator
    let dotH = document.querySelector('.hr_dot');
    let dotM = document.querySelector('.min_dot');
    let dotS = document.querySelector('.sec_dot');
  
    // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';
  
    // convert to 12 hour format
    if (h > 12) {
      h = h - 12;
    }
  
    // add 0 before single digit
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
  
    // set time and label
    hours.innerHTML = h;
    minutes.innerHTML = m;
    secondes.innerHTML = s;
    ampm.innerHTML = ap;
  
    // set time circular indicator
    hh.style.strokeDashoffset = 510 + (510 * h) / 12;
    mm.style.strokeDashoffset = 630 + (630 * m) / 60;
    ss.style.strokeDashoffset = 760 + (760 * s) / 60;
  
    // set dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
  }, 1000);



