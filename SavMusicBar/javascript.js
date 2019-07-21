
window.addEventListener('keydown', event => {
  //select the audio tag with data-key attrs
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`) 


  // if there is no audio tag stop the code
  if(!audio) return;
  // rewind to the start
  audio.currentTime = 0; 
  //play the audio
  audio.play();
  // Testing 
  console.log(bass1,bass2,bass3,bass4,
              effects1,effects2,effects3,effects4,
              pad1,pad2,pad3,pad4,drum1,drum2,drum3,drum4); 
})

// Animation



function changeColor(keyCode) {     //Change the Colors
    if (keyCode == 81 ) {  // Q
        document.getElementById('Bass1').style.background = "white";
    }

    else if(keyCode== 87){ // W
        document.getElementById('Bass2').style.backgroundColor = "white";

    }

    else if(keyCode== 69){ // E
        document.getElementById('Bass3').style.backgroundColor = "white";

    }

    else if(keyCode== 82){ // R
        document.getElementById('Bass4').style.backgroundColor = "white";

    }

    else if(keyCode== 53){ // 5
        document.getElementById('Effects1').style.backgroundColor = "skyblue";

    }

    else if(keyCode== 54){ // 6
        document.getElementById('Effects2').style.backgroundColor = "skyblue";

    }

    else if(keyCode== 55){ // 7
        document.getElementById('Effects3').style.backgroundColor = "skyblue";

    }

    else if(keyCode== 56){ // 8
        document.getElementById('Effects4').style.backgroundColor = "skyblue";

    }

    else if(keyCode== 73){ // I
        document.getElementById('Pad1').style.backgroundColor = "blue";

    }

    else if(keyCode== 79){ // O
        document.getElementById('Pad2').style.backgroundColor = "blue";

    }

    else if(keyCode== 75){ // K
        document.getElementById('Pad3').style.backgroundColor = "blue";

    }

    else if(keyCode== 77){ // M
        document.getElementById('Pad4').style.backgroundColor = "blue";

    }

    else if(keyCode== 70){ // F
        document.getElementById('Drum1').style.backgroundColor = "yellow";

    }

    else if(keyCode== 71){ // G
        document.getElementById('Drum2').style.backgroundColor = "yellow";

    }

    else if(keyCode== 72){ // H
        document.getElementById('Drum3').style.backgroundColor = "yellow";

    }

    else if(keyCode== 78){ // N
        document.getElementById('Drum4').style.backgroundColor = "yellow";

    }
    
}

function changeColorBack(keyCode){      //Change the Colors Back to black
    if (keyCode == 81){     // Q
        document.getElementById('Bass1').style.backgroundColor = "black";
    }

    else if(keyCode == 87){ // W
        document.getElementById('Bass2').style.backgroundColor = "black"; 

    }
    else if(keyCode == 69){ // E
        document.getElementById('Bass3').style.backgroundColor = "black"; 

    }

    else if(keyCode == 82){ // R
        document.getElementById('Bass4').style.backgroundColor = "black"; 

    }

    else if(keyCode == 53){ // 5
        document.getElementById('Effects1').style.backgroundColor = "black"; 

    }

    else if(keyCode == 54){ // 6
        document.getElementById('Effects2').style.backgroundColor = "black"; 

    }


    else if(keyCode == 55){ // 7
        document.getElementById('Effects3').style.backgroundColor = "black"; 

    }

    else if(keyCode == 56){ // 8
        document.getElementById('Effects4').style.backgroundColor = "black"; 

    }

    else if(keyCode== 73){ // I
        document.getElementById('Pad1').style.backgroundColor = "black";

    }

    else if(keyCode== 79){ // O
        document.getElementById('Pad2').style.backgroundColor = "black";

    }

    else if(keyCode== 75){ // K
        document.getElementById('Pad3').style.backgroundColor = "black";

    }


    else if(keyCode== 77){ // M
        document.getElementById('Pad4').style.backgroundColor = "black";

    }

    else if(keyCode== 70){ // F
        document.getElementById('Drum1').style.backgroundColor = "black";

    }

    else if(keyCode== 71){ // G
        document.getElementById('Drum2').style.backgroundColor = "black";

    }

    else if(keyCode== 72){ // H
        document.getElementById('Drum3').style.backgroundColor = "black";

    }

    else if(keyCode== 78){ // N
        document.getElementById('Drum4').style.backgroundColor = "black";

    }
}


document.onkeydown = function() {
    var keyCode = window.event ? window.event.keyCode : event.which;
    changeColor(keyCode);
}
document.onkeyup = function() {
    var keyCode = window.event ? window.event.keyCode : event.which;
    changeColorBack(keyCode);
}