
function hide_message(restart){
	Message = document.getElementById("message");
	Message.style.display = "none";

	if(restart == "true") autoplay();
}

function ShowMessage(string_notification, string_button,  game_over){
	ResetTime();
	Next_Level = !game_over;	

	if(game_over == false) {
		string_score = "Level" + Level + " Time ";
		if(Total_min < 10) string_score = string_score + "0";
		string_score = string_score + Total_min + ":";
		if(Total_secs < 10) string_score = string_score + "0";
		string_score = string_score + Total_secs;
	}
	else {
		string_score = "Score: " + (Level_Moves-Moves) + "/" + Level_Moves;
	}

	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_Notification = document.getElementById("notification");
	Message_Notification.innerHTML = string_notification;

	Message_Data = document.getElementById("data_message");
	Message_Data.innerHTML = string_score;

	Message_Game = document.getElementById("button");
	Message_Game.innerHTML = string_button;

	Message_Share = document.getElementById("share_panel");
	Message_Share.style.display = "block";



	if (game_over == true){
		string_tweet = "<a class = 'popup' target='_blank' href='http://twitter.com/share?text=Level%20" + Level + "%20Score:%20" + (Level_Moves-Moves) + "/" + Level_Moves + "%20No%20puedo%20con%20este%20nivel!!!&via=PabloVazquez07'>Tweet your Score!</a>";
	}
	else{
		string_tweet = "<a class = 'popup' target='_blank' href='http://twitter.com/share?text=Ya%20me%20he%20pasado%20un%20nuevo%20nivel!!!!" + string_score + "&via=PabloVazquez07'>Tweet your Game!</a>";
	}

	Tweet_Game = document.getElementById("tweet_gameover");
	Tweet_Game.innerHTML = string_tweet;

}

function ShowWelcome(){
	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_Notification = document.getElementById("notification");
	Message_Notification.innerHTML = "Level: " + Level;

	Message_Lifes = document.getElementById("data_message");
	Message_Lifes.innerHTML = "Lifes: " + Lifes;

	//Message_Share = document.getElementById("share_panel");
	//Message_Share.display.style = "none";

	document.getElementById("seconds").innerHTML = "00";
	document.getElementById("minutes").innerHTML = "00";


}