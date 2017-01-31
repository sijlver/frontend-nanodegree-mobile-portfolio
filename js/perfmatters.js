function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}
function img(){
	let arr=document.querySelectorAll('.avatar'), arrImg=['img/profilepic.jpg','img/my.jpg','views/images/pizzeria.jpg'];
	Array.from(arr).forEach((name,i)=>{
		name.setAttribute('src', arrImg[i]);
	});
}
window.addEventListener("load", function(event) {
  logCRP();
  img();
});