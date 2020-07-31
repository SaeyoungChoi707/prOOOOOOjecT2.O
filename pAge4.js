function bunny(){
    var miCasa = createButton("Home");
    var look = createButton("Seach");
    var marioKart = createButton("Your Orders");
    var sun = createButton("Settings");
    miCasa.position(50,50);
    look.position(100,50);
    marioKart.position(150,50);
    sun.position(200,50);

    miCasa.mousePressed(function(){
        appState = 4;
    })
    look.mousePressed(function(){
        appState = 5;
    })
    marioKart.mousePressed(function(){
        appState = 6;
    })
    sun.mousePressed(function(){
        appState = 7;
    })
}