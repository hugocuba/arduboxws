Blockly.Blocks['sensor_movimento'] = {
    init: function() {
        this.appendStatementInput("movimento")
            .setCheck(null)
            .appendField(new Blockly.FieldImage("https://i.imgur.com/hmakMKt.png", 120, 96, "*"))
            .appendField("Movimento")
            .appendField(new Blockly.FieldDropdown([["detectado","1"], ["não detectado ","0"]]), "mov");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sensor_temperatura'] = {
  init: function() {
    this.appendStatementInput("temperatura")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/c/c2/Temperature_Sensor_%28TMP36%29.jpg", 120, 80, "*"))
        .appendField("Temperatura")
        .appendField(new Blockly.FieldDropdown([["menor que",">"], ["maior que","<"], ["igual a","="]]), "temp")
        .appendField(new Blockly.FieldNumber(0), "valorTemp")
        .appendField("°C");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_luz'] = {
  init: function() {
    this.appendStatementInput("luz")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("http://3.bp.blogspot.com/-XsJGJiVT6X0/TluyhDrJ73I/AAAAAAAAAO4/kach_HlXjPM/s1600/images%2B%252814%2529.jpg", 120, 70, "*"))
        .appendField("Luz")
        .appendField(new Blockly.FieldDropdown([["Ligada","HIGH"], ["Desligada","LOW"]]), "l");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_ultrasonico'] = {
  init: function() {
    this.appendStatementInput("distancia")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://meetarduino.files.wordpress.com/2012/06/hc-sr04-lg.jpg", 120, 90, "*"))
        .appendField("Distância")
        .appendField(new Blockly.FieldDropdown([["menor que","<"], ["maior que",">"], ["igual a","="]]), "dist")
        .appendField(new Blockly.FieldNumber(0), "valorDistancia")
        .appendField("cm");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};