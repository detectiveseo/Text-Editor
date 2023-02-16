
function addStyle(items){
    const item = items.target;
    const textArea = document.getElementById('note');
    return textArea;
}
// function removeStyle(items){
//     const item = items.target;
//     item.style.backgroundColor = "#00000000";
//     item.style.color = '#000';
//     item.style.borderRadius = '0px'
//     const id = document.getElementById('note');
//     return id;

// }

document.getElementById('boldIcon').addEventListener('click', function(e){
    if(addStyle(e).style.fontWeight === "900"){
        addStyle(e).style.fontWeight = "400";
    }
    else{
        addStyle(e).style.fontWeight = "900"
    }
})

document.getElementById('italicIcon').addEventListener('click', function(e){
    if(addStyle(e).style.fontStyle === 'italic'){
        addStyle(e).style.fontStyle = '';
    }
    else{
        addStyle(e).style.fontStyle = 'italic';
    }
})
document.getElementById('underlineIcon').addEventListener('click', function(e){
    if(addStyle(e).style.textDecoration === 'underline'){
         addStyle(e).style.textDecoration = '';
    }
    else{
        addStyle(e).style.textDecoration = 'underline'
    }
})
document.getElementById('textLeftIcon').addEventListener('click', function(e){
    if(addStyle(e).style.textAlign === 'left'){
        addStyle(e).style.textAlign = '';
    }
    else{
        addStyle(e).style.textAlign = 'left';
    }
})
document.getElementById('textCenterIcon').addEventListener('click', function(e){
    if(addStyle(e).style.textAlign === 'center'){
        addStyle(e).style.textAlign = '';
    }
    else{
        addStyle(e).style.textAlign = 'center';
    }
})
document.getElementById('textWriteIcon').addEventListener('click', function(e){
    if(addStyle(e).style.textAlign === 'right'){
        addStyle(e).style.textAlign = '';
    }
    else{
        addStyle(e).style.textAlign = 'right';
    }
})
document.getElementById('textJustifyIcon').addEventListener('click', function(e){
    if(addStyle(e).style.textAlign === 'justify'){
        addStyle(e).style.textAlign = '';
    }
    else{
        addStyle(e).style.textAlign = 'justify';
    }
})
document.getElementById('px-set').addEventListener('click', function(e){
    const input = e.target.value;
    document.getElementById('note').style.fontSize = input+'px';
})
document.getElementById('colorInput').addEventListener('change', function(e){
    const input = e.target.value;
    document.getElementById('note').style.color = input;
})