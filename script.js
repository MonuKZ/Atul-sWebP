function btnclick(val)
{
    console.log(val)
    document.getElementById("screen").value+=val;
}

function clearscrn(){
    document.getElementById("screen").value=""
}
function rslt(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}