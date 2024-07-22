let userchoise = '';
let computerchoice = '';
let result;
let popup = confirm(" you want to restart this game ?");
let oldresult = localStorage.getItem("results");

if(oldresult !== null){result=JSON.parse(oldresult)}
else{
    result ={
        won:0,
        loss:0,
        tai:0,
    }}
    
    if(popup === true){
        localStorage.clear();
        result ={
            won:0,
            loss:0,
            tai:0,
        }
    }
    else{
        $("h3").text(` won : ${result.won} loss : ${result.loss} tai : ${result.tai} `)

    }


$('document').ready(function () {
    //-------------------------------------------box-up-down--------------------------------------------------- 
   $(".scale").click(function(){
    $(".com").animate({
        scale:"0.5",
        opacity:"0",
    }).animate({scale:"1",opacity:"1"})
   })
    //-------------------------------------------display function---------------------------------------------
    $("#rock").click(function () {
        userchoise = "rock"
        $("#upaper").css({ "display": "none" })
        $("#uscissor").css({ "display": "none" })
        $("#urock").css({ "display": "block" })
        randomvalue();
        whowon();

    })
    $("#paper").click(function () {
        userchoise = "paper"
        $("#urock").css({ "display": "none" })
        $("#uscissor").css({ "display": "none" })
        $("#upaper").css({ "display": "block" })
        randomvalue();
        whowon();

    })
    $("#scissor").click(function () {
        userchoise = "scissor"
        $("#upaper").css({ "display": "none" })
        $("#urock").css({ "display": "none" })
        $("#uscissor").css({ "display": "block" })
        randomvalue();
        whowon();
    })

// ------------------------------------random value generater------------------------------------------
    function randomvalue() {
        var randomvalue = Math.random() * 3;
        console.log(randomvalue);
        if (randomvalue < 1) {
            $("#crock").css({ "display": "block" })
            $("#cpaper").css({ "display": "none" })
            $("#cscissor").css({ "display": "none" })
            computerchoice = "rock";
        }
        else if (randomvalue < 2 && randomvalue > 1) {
            $("#crock").css({ "display": "none" })
            $("#cpaper").css({ "display": "block" })
            $("#cscissor").css({ "display": "none" })
            computerchoice = "paper";
        }
        else {
            $("#crock").css({ "display": "none" })
            $("#cpaper").css({ "display": "none" })
            $("#cscissor").css({ "display": "block" })
            computerchoice = "scissor";
        }

    }
    //---------------------------------------who won function-------------------------------------------
    
    function whowon(){
        console.log(userchoise)
        console.log(computerchoice)
        if(userchoise == "rock"){
            if(computerchoice == userchoise){$("h1").text("tai").css({"backgroundColor":"yellow"});result.tai++;}
            else if(computerchoice == "paper"){$("h1").text("you loss").css({"backgroundColor":"red"});result.loss++}
            else{$("h1").text("you won");result.won++;$("h1").css({"backgroundColor":"green"})}
            
            localStorage.setItem("results",JSON.stringify(result));
        }
        if(userchoise == "paper"){
            if(computerchoice == userchoise){$("h1").text("tai").css({"backgroundColor":"yellow"});result.tai++}
            else if(computerchoice == "scissor"){$("h1").text("you loss").css({"backgroundColor":"red"});result.loss++}
            else{$("h1").text("you won").css({"backgroundColor":"green"});result.won++}
            localStorage.setItem("results",JSON.stringify(result));
        }
        if(userchoise == "scissor"){
            if(computerchoice == userchoise){$("h1").text("tai").css({"backgroundColor":"yellow"});result.tai++}
            else if(computerchoice == "rock"){$("h1").text("you loss").css({"backgroundColor":"red"});result.loss++}
            else{$("h1").text("you won").css({"backgroundColor":"green"});result.won++}
            localStorage.setItem("results",JSON.stringify(result));
        }
        $("h3").text(` won : ${result.won} loss : ${result.loss} tai : ${result.tai} `)

        console.log(result.loss)
    }
    $(".btn").click(function(){
        
        localStorage.clear();
        result ={
            won:0,
            loss:0,
            tai:0,
        }
        $("h3").text(` won : ${result.won} loss : ${result.loss} tai : ${result.tai} `)
      })

})