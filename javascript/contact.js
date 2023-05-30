function start() {
  $('#Contact').addClass("sent");
}
$( document ).ready(function() {
  console.log("ready");
  $('#sendLetter').on("click",start);
});