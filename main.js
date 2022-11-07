let compwins=0; let userwins=0;

for(let i=0;i<5;i++){
let userinput=window.prompt("choose any one in rock, paper or cisor");

playround(userinput);

function playround(userinput){
    let inputs=["rock","cisor","paper"];
    let index = Math.floor(Math.random() * 3);

    if(inputs[index]==userinput){
        console.log("Tie Match");
    }
    else if(inputs[index]=="rock" && userinput=="paper"){
        console.log("Computer wins this match");
        compwins++;
    }
    else if(inputs[index]=="paper" && userinput=="rock"){
        console.log("User wins this match");
        userwins++;
    }
    else if(inputs[index]=="rock" && userinput=="cisor"){
        console.log("User wins this match");
        userwins++;
    }
    else if(inputs[index]=="cisor" && userinput=="paper"){
        console.log("User wins this match");
        userwins++;
    }
    else if(inputs[index]=="cisor" && userinput=="rock"){
        console.log("Computer wins this match");
        compwins++;
    }
    else{
        console.log("Computer wins this match");
        compwins++;
    }
    
}
}
if(compwins>userwins){
    let ans=compwins-userwins;
    console.log("COMPUTER WON THE SERIES BY "+ ans)
}
else if(compwins<userwins){
    let ans=userwins-compwins;
    console.log("USER WON THE SERIES BY "+ ans)
}
else{
    console.log("SERIES IS TIE BY THE SCORE "+ userwins)
}