function set_Lifes(){
	if(Level ==1) Lifes = 1;
	if(Level ==2) Lifes = 4;
	if(Level ==3) Lifes = 3;
	if(Level ==4) Lifes = 3;
	if(Level ==5) Lifes = 4;
	if(Level ==6) Lifes = 3;
	if(Level ==7) Lifes = 5;
}

function set_LevelMoves(){
	if(Level ==1) Level_Moves = 64;
	if(Level ==2) Level_Moves = 56;
	if(Level ==3) Level_Moves = 32;
	if(Level ==4) Level_Moves = 16;
	if(Level ==5) Level_Moves = 48;
	if(Level ==6) Level_Moves = 36;
	if(Level ==7) Level_Moves = 64;
}

function set_Moves_Required(){
	if(Level ==1) Moves_Required = 8;
	if(Level ==2) Moves_Required = 10;
	if(Level ==3) Moves_Required = 12;
	if(Level ==4) Moves_Required = 10;
	if(Level ==5) Moves_Required = 10;
	if(Level ==6) Moves_Required = 12;
	if(Level ==7) Moves_Required = 10000;
}

function setLevel_Parameters(){

	if(Next_Level){
		Level++;
		set_Lifes();
	}
	else {
		Lifes--;
		if(Lifes == 0){
			Level = 1;
			Lifes = 1;
		}
	}

	document.getElementById("level").innerHTML = Level;
	document.getElementById("lifes").innerHTML = Lifes;

	ShowWelcome();
	setTimeout( "hide_message(false)", 2000);

	Bonus = 0;
	document.getElementById("bonus").innerHTML = "";

	set_LevelMoves();
	Moves = Level_Moves;
	set_Moves_Required();
}