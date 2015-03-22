var wordgame = {
	drawGameBoard: function(gameboardCanvas){
		console.log("drawGameBoard: drawing game board");
	  gameboardCanvas.width  = 800;
	  gameboardCanvas.height = 600;
	  titleBarHeight = 45;
	  answerLetterBoxWidth = 32;
	  answerLetterBoxRegX = 16;
	  answerLetterBoxHeight = 44;
	  answerLetterBoxRegY = 22;
	  answerLetterBoxX = 24;
	  answerLetterBoxY = 120;
	  rectangleCornerRadius = 5;
	  answerLetterBoxHorzSpacing = 36;
	  answerLetterBoxVertSpacing = 48;
	  
	  hintsBackgroundWidth = 110;
	  hintsBackgroundHeight = 55;
	  hintsRegX = 250;
	  hintsRegY = 65;
	  hintsTxtRegY = 75;
	  
	  // Board Dimensions
	  boardWidth = 52;
	  boardRegX = 26;
	  boardHeight = 66;
	  boardRegY = 33;
	  boardX = 32;
	  boardY = 250;
	  boardHorzSpacing = 58;
	  boardVertSpacing = 72;

	  // Draw the board
	  var i, char, box;
	  var xPos = answerLetterBoxX;
	  var yPos = answerLetterBoxY;
	  var lettersNeeded = 0;
	  var answer = "Brown Cat";

	// http://www.polymer-project.org/0.5/docs/polymer/polymer.html#automatic-node-finding
	          // console.log(this.$.gamecanvas);

	  var stage = new createjs.Stage(gameboardCanvas);

	  // Draw the board
	  for (i = 0; i < answer.length; i++) {
	    var char = "BYROWCDEFGTJHGYIA";
	    if (char != ' ' && char != '&') {
	      lettersNeeded++;
	      box = new createjs.Shape();
	      box.graphics.beginFill("#00bcd4");
	      box.graphics.beginStroke("#fff");
	      box.graphics.drawRoundRect(0, 0, answerLetterBoxWidth, answerLetterBoxHeight, 5);
	      box.regX = answerLetterBoxRegX;
	      box.regY = answerLetterBoxRegY;
	      box.x = xPos;
	      box.y = yPos;
	      box.name = 'box_' + i;
	      box.key = char;
	      stage.addChild(box);
	    }
	    xPos += answerLetterBoxHorzSpacing;
	    if (char == '&') {
	      yPos += answerLetterBoxVertSpacing;
	      xPos = answerLetterBoxHorzSpacing;
	    }
	  }
	  stage.update();
	},
	
	drawBlueCircle: function(canvasId) {
		console.log("drawBlueCircle");
		var stage = new createjs.Stage(canvasId);
	  var circle = new createjs.Shape();
	  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	  circle.x = 100;
	  circle.y = 100;
	  stage.addChild(circle);
	  stage.update();
	}
};