// a function with a while loop that is stopped when user inputs correct value

function buttonclicked(e)
{
   let input = "";
   let i = 0;

   while (input !== "stop"){
       input = prompt("If you want to stop clicking enter 'stop', if not you can continue to click the button.");
       i++
   }
}
//selector that identifies id the in button tag from the HTML

buttonClickerEl = document.getElementById("buttonClicker");

//event listener that when choosen button pressed calls the function

buttonClickerEl.addEventListener("click", buttonclicked);