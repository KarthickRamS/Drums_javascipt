let randomNumber1=Math.random();
randomNumber1=(Math.floor(randomNumber1*6)+1);
let randomImage="dice"+randomNumber1+".png";
let randomImages="images/"+randomImage;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImages);


let randomNumber2=Math.random();
randomNumber2=(Math.floor(randomNumber2*6)+1);
let randomImage2="dice"+randomNumber2+".png";
let randomImages2="images/"+randomImage2;
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImages2);

if(randomImages>randomImages2){
    document.querySelector("h1").innerHTML="Player 1 Wins";

}
else if(randomImages<randomImages2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    let draw="draw";
    document.querySelector("h1").innerHTML="Draw";
}