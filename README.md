<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>SavMusicBar</title>
</head>
<body>

<!--- BASS -->

    <div id="Bass1" data-key="81"></div>  <!--Q-->   
    <div id="Bass2" data-key="87"></div>  <!--W-->
    <div id="Bass3" data-key="69"></div>  <!--E-->
    <div id="Bass4" data-key="82"></div>  <!--R-->


<!--Effects-->

    <div id="Effects1" data-key="53"></div>  <!--5-->     
    <div id="Effects2" data-key="54"></div>  <!--6-->      
    <div id="Effects3" data-key="55"></div>  <!--7-->
    <div id="Effects4" data-key="56"></div>  <!--8-->
        
<!--Pads-->

    <div id="Pad1" data-key="73"></div>  <!--I-->       
    <div id="Pad2" data-key="79"></div>  <!--O-->        
    <div id="Pad3" data-key="75"></div>  <!--K-->      
    <div id="Pad4" data-key="77"></div>  <!--M-->
           
<!--Drums-->

    <div id="Drum1" data-key="70"></div> <!--F-->  
    <div id="Drum2" data-key="71"></div> <!--G-->  
    <div id="Drum3" data-key="72"></div> <!--H-->   
    <div id="Drum4" data-key="78"></div> <!--N-->

<!--Rand-->     
    <div id="rand1"></div>
    <div id="rand2"></div>


<!--Audio Input-->
    
    <audio src="sounds/bass01.wav" data-key="81"></audio>
    <audio src="sounds/bass02.wav" data-key="87"></audio>
    <audio src="sounds/bass03.wav" data-key="69"></audio>
    <audio src="sounds/bass04.wav" data-key="82"></audio>

    <audio src="sounds/effects1.wav" data-key="53"></audio>
    <audio src="sounds/effects2.wav" data-key="54"></audio>
    <audio src="sounds/effects3.wav" data-key="55"></audio>
    <audio src="sounds/effects4.wav" data-key="56"></audio>

    <audio src="sounds/pad1.wav" data-key="73"></audio>
    <audio src="sounds/pad2.wav" data-key="79"></audio>
    <audio src="sounds/pad3.wav" data-key="75"></audio>
    <audio src="sounds/pad4.wav" data-key="77"></audio>

    <audio src="sounds/kick.wav" data-key="70"></audio>
    <audio src="sounds/hihat.wav" data-key="71"></audio>
    <audio src="sounds/ride.wav" data-key="72"></audio>
    <audio src="sounds/crunch.wav" data-key="78"></audio>


    <h1>How to use</h1>

    <p id="p1"> 
    You have four groups(Bass,Effects,Pads and Drums) and 4 sounds which you can use in each group.
    So you have 16 Sounds in total. <br>
    To play the Sounds, you have to press the right keys. <br>
    </p>

<h2>Keymappings</h2>
    <p id="p3"> 
    Bass : Q , W , E , R  <br>
    <br>
    Effects : 5 , 6 , 7 , 8  <br>
    <br>
    Pads : I , O , K , M  <br>
    <br>
    Drums : F , G , H , N <br>
    <br>
    </p>

    <p id="p2">
        Note: The keymappings are optimized for a German(QWERTZ), Keyboard Layout.
    </p>


<script  src="javascript.js"></script>
</body>
</html>
