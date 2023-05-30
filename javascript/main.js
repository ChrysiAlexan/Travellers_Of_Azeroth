$( document ).ready(function() {
    console.log( "ready!" );

    fetch('pages/nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("#nav-placeholder");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    })

    fetch('pages/contact.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("#Contact");
        //let newelem = document.createElement("div");
        //newelem.innerHTML = text;
        //oldelem.parentNode.replaceChild(newelem,oldelem);
        oldelem.innerHTML = text;
    })
    .then(_=> {
        $('#sendLetter').on("click",start);
    })

});
function start() {
  $('#Contact').addClass("sent");
}