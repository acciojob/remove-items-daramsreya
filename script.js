//your JS code here. If required.
const colorSelector=document.querySelector("#colorSelector");
const button=document.querySelector("input[type=button]");
button.addEventListener('click',function(e){
    const selected=colorSelector.selectedIndex;
    colorSelector.remove(selected);
}) 