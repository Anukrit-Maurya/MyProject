function getText(){
    return document.getElementById("text");
}

function upCase() {
   var txt=getText();
    txt.value=txt.value.toUpperCase();
}
function loCase() {
    var txt=getText();
     txt.value=txt.value.toLowerCase();
}
function firstupCase() {
    var st=getText();
    
    var txt=st.value.split(" ");
    var res=txt[0].charAt(0).toUpperCase()+txt[0].slice(1);
    for (let i = 1; i < txt.length; i++) {
        res=res+" "+txt[i].charAt(0).toUpperCase()+txt[i].slice(1);
    }
    st.value=res;
 }

function removeSpace(){
    var txt=getText().value.split(" ");
    var res=txt[0]
    for (let i = 1; i < txt.length; i++) {
        if(txt[i]!=""){
            res=res+" "+txt[i];
        }
    }
    getText().value=res;
    getWords();
}
function getWords(){
    var txt=getText().value;
    document.getElementById("word").innerHTML=txt.length;
    var arrtxt= txt.split(" ")
    var count=0
    arrtxt.forEach(i => {
        if(i!=""){
            count++;
        }
    });   
    document.getElementById("letter").innerHTML=count;
    document.getElementById("readTime").innerHTML=count*(0.24);
    
}
function copyText(){
    var txt=getText();
    txt.select();
    txt.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(txt.value);
}