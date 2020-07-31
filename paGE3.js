function meow(){
    var nAmE = createInput("Username");
    textSize(15);
    fill("black");
    var eMaIl = createInput("Email");
    textSize(15);
    fill("black");
    var pAsS = createInput("Password");
    textSize(15);
    fill("black");
    var passW = createInput("Confirm Password");
    textSize(15);
    fill("black");
    //background(140,240,40);
    var oof = createButton("Sign Up");

    oof.mousePressed(function(){
        appState = 3;
    })
}