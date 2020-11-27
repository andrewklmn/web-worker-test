self.addEventListener('message', function(e) {
  let c = 0;
  for (let i=0; i<200000000; i++) {
    c += i;
  }
  console.log(c);
  self.postMessage(e.data.say + ' from WW');

}, false);

