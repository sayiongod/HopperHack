hostageTurn = true;
const object = ["Purse", "Plushie", "Lotion", "Ball", "Knife", "Bicycle", "Notebook", 
"Chair", "Scarf", "Hat", "Pant", "Umbrella", "Bottle", "Glue", "Cup", "Newspaper", 
"Glasses", "Plate", "Pen", "Perfume", "Doll", "Wagon", "DVD", "Needle", "Toothbrush", 
"Clock", "Lamp", "Magnet", "Thread", "Vase", "Blouse", "Map", "Whip", "Feather",
 "Scissor", "Flag", "Folder", "Thermometer", "Lightbulb", "Towel", "Sandal", 
 "Sofa", "Poker", "Hanger", "Sponge", "Bucket", "Rug", "Camera", "Mob", "Shovel"
];
life = 5;
hint = "";
ans = "";
const inputElement = document.getElementById("input");
objectAnswer = answer();

function answer() {
    const randomIndex = Math.floor(Math.random() * object.length);
    const item = object[randomIndex];
    return item;
}

function nextTurn()
{
    if(inputElement.value == "")
    {
        alert("Make Sure You Type In The Box!");
        return;
    }
    if(hostageTurn)
    {
        document.getElementById("turn").innerHTML = "Detective Turn";
        document.getElementById("object").style.visibility = "hidden";
        document.getElementById("hints").style.visibility = "visible";
        hint = inputElement.value;
        document.getElementById("hints-text").innerHTML = "Hint: " + hint;
        inputElement.value = "";      
        inputElement.maxLength = 20;  
        inputElement.placeholder = "Put your guess here";
        document.getElementById("top").style.backgroundImage = "url(Image/detective.jpg)";
    }
    else
    {
        document.getElementById("turn").innerHTML = "Hostage Turn";
        document.getElementById("object").style.visibility = "visible";
        document.getElementById("hints").style.visibility = "hidden";
        ans = inputElement.value;
        inputElement.value = "";      
        inputElement.maxLength = 10;
        inputElement.placeholder = "Write your hint here";
        if(ans.toLowerCase()==objectAnswer.toLowerCase())
        {
            window.location.href = "win.html";
        }
        else
        {
            life--;
            document.getElementById("bottom-1").innerHTML = "Number of guesses: " + life;
            alert("Incorrect, Now back to hostage turn");
            if (life <= 0)
            {
                window.location.href = "lose.html";
            }
        }
        document.getElementById("top").style.backgroundImage = "url(Image/hostage.jpg)";
    }
    hostageTurn = !hostageTurn;
}

function reveal()
{
    document.getElementById("object-text").innerHTML = ""+objectAnswer;
}