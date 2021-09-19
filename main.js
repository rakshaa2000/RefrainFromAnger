
const angryWords = [
    "b****", "oh s***", "s***",
    "f***", "f*** you", "f*** off",
    "a******",
    "I am mad",
    "I'm mad",
    "frustrated",
    "shut up",
    "I hate you",

];
const yogaVideos = [
    "https://www.youtube.com/watch?v=ie5yjNGLxfQ",
    "https://www.youtube.com/watch?v=6AYyezYP3Bs",
    "https://www.youtube.com/watch?v=Ba0fweKUwIc",
]
var writeDown = [];
var count = 0;

const relaxSongs = [
    "https://www.youtube.com/watch?v=gCTRl5dPJPc", //Altitude Music - Oak Tree
    "https://www.youtube.com/watch?v=GdU6snztM0A", //Nothing Else Matter William
    "https://www.youtube.com/watch?v=3jf_Z68c4LQ", //Might+U My Hero Academia
    "https://www.youtube.com/watch?v=_nj-LnZqY-0",  //Interstellar - Main Theme - Hans Zimmer
    "https://www.youtube.com/watch?v=VHg_BG_-Ah4", //3 original pieces | Emotions \\ Jacob's Piano \\ Relaxing Piano
    "https://www.youtube.com/watch?v=EaUQbQ2PL-4", //1 HOUR RELAXING PIANO \\ Studying and Relaxation \\ Jacob's Piano

]

const motivation = [
    "I know you can manage your anger 💪. Let's continue to do your work! 😃✨",
    "Yayyy! You overcome your anger! ✌️ I know you can do it! 😊",
    "You're a Rock! 😆 Glad you're not angry anymore ✨",
    "Remember that I'm always here to help you feel better. 😊 You got this! 🙌 " 
]
 
var enterJournal = document.getElementById("article");
var heading = document.getElementById("heading");
var paragraph = document.getElementById("paragraph");

 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
   
 const recognition = new window.SpeechRecognition();

 recognition.interimResults=true;

 recognition.addEventListener('result', (e) => {
    
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    console.log(text);
    // angryWords.includes(text) &&
    if(e.results[0].isFinal && ( angryWords.includes(text))){
        // alert('Please relax yourself!')
        recognition.continuous = false;
        alert("Please Take It Easy ✋. Take A Moment To Relax")
        alert("Take A Deep Deep Breath. Breath In. Breath Out. 😮‍💨")
        var journal = prompt("Write Down What Made You Upset ✍️ ")
        
        var decision = prompt("Does writting it out help you feel better? 🥺👉👈 y/n")
        if(decision == "n"){
            alert("Let's Do Some Yoga to Calm Your Mind 🧘")
            var randomYoga = yogaVideos[Math.floor(Math.random()*yogaVideos.length)]
            window.open(randomYoga);
        }else if(decision == "y"){
            console.log("yes, yoga part")
            var randomMotivation = motivation[Math.floor(Math.random()*motivation.length)]
            alert(randomMotivation);
            // exit();
        }
        writeDown.push(journal);

        var qs1 = prompt("Are you still angry? 😬 y/n")
        if(qs1 == "y"){
            alert("Let's calm yourself down by listening to music 🎵🎵🎵")
            var randomSong = relaxSongs[Math.floor(Math.random()*relaxSongs.length)]
            window.open(randomSong);
        }else if(qs1 == "n"){
            console.log("no, music part")
            var randomMotivation = motivation[Math.floor(Math.random()*motivation.length)]
            alert(randomMotivation);
        }
        var lastDecision = prompt("Listen to more music?")
        while(lastDecision == "y"){
            var randomSong = relaxSongs[Math.floor(Math.random()*relaxSongs.length)]
            window.open(randomSong);
            var lastDecision = prompt("Listen to more music?")
        }
        if(lastDecision == "n"){
        var randomMotivation = motivation[Math.floor(Math.random()*motivation.length)]
        alert(randomMotivation);
        }
        
    }
   
 });
 
 recognition.start();
 recognition.addEventListener('end', ()=> {
recognition.start();
})