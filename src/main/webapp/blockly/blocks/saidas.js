Blockly.Blocks['saida_led_integrado'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://i.imgur.com/uDpddAT.jpg", 120, 70, ""))
            .appendField("Led Integrado")
            .appendField(new Blockly.FieldDropdown([["Ligado","HIGH"], ["Desligado","LOW"]]), "estado");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("Pino 13");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['saida_led_vermelho'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://s3-sa-east-1.amazonaws.com/multilogica-files/imagens/outros/LED_vermelho_3mm_10_unidades_M.jpg", 120, 80, "*"))
        .appendField("Led Vermelho")
        .appendField(new Blockly.FieldDropdown([["Ligado","HIGH"], ["Desligado","LOW"]]), "estado");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['saida_led_verde'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://s3-sa-east-1.amazonaws.com/multilogica-files/imagens/outros/LED_verde_3mm_10_unidades_M.jpg", 120, 80, "*"))
        .appendField("Led Verde")
        .appendField(new Blockly.FieldDropdown([["Ligado","HIGH"], ["Desligado","LOW"]]), "estado");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['saida_buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://static.rapidonline.com/catalogueimages/Module/M500354P01WL.jpg", 120, 80, "*"))
        .appendField("Buzzer")
        .appendField(new Blockly.FieldDropdown([["Ligado","HIGH"], ["Desligado","LOW"]]), "estado");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};