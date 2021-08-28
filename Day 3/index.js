let words=
[
    {
        jumbled:"diwoswn",
        correct:"windows"
    },
    {
        jumbled:"thsaeed",
        correct:"headset"
    },
    {
        jumbled:"mornfic",
        correct:"confirm"
    },
    {
        jumbled:"poplat",
        correct:"laptop"
    },
    {
        jumbled:"peoarhen",
        correct:"earphone"
    },
    {
        jumbled:"seuom",
        correct:"mouse"
    },
    {
        jumbled:"saelentiss",
        correct:"essentials"
    },
    {
        jumbled:"pachdout",
        correct:"touchpad"
    },
    {
        jumbled:"yomrem",
        correct:"memory"
    },
       {
        jumbled:"sicrmofot",
        correct:"microsoft"
    }

]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector("#jumword").innerText = 
    words[currentWord].jumbled;

    document.querySelector("#score").innerText=score;
}


displayWord();


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;

            if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){

                score++;

            }

            if(currentWord==words.length-1){

                let msg="";

                if(score==10){
                    msg="Amazing game"+score
                }
                else if(score<10 && score>7){
                    msg="Good Game "+score
                }
                else if(score<8 && score>5){
                    msg="Good Try "+score
                }
                else if(score<6 && score>3){
                    msg="Not Bad "+score
                }
                else{
                    msg="Retry again "+score    
                }

                alert(msg);
                location.reload();

            }
            else{
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }

            

    
}















