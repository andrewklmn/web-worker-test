const button = document.querySelector('#button');
const info = document.querySelector('#info');

const startWorker = () =>{
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("ww.js");
    }
    w.onmessage = function(event) {
      info.innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

startWorker();

button.addEventListener('click',()=>{
  w.postMessage({
    say: 'Hello!'
  });
  info.innerHTML = "Click";
})
