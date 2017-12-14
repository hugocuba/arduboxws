Blockly.Arduino['saida_led_integrado'] = function(block) {
    var estado = block.getFieldValue('estado');

    Blockly.Arduino.definitions_['define_saidaLed13'] = 
        'int ledIntegrado = 13;';

    Blockly.Arduino.setups_['setup_saidaLed13'] = 
        'pinMode(ledIntegrado, OUTPUT);';

    var code = 
        'digitalWrite(ledIntegrado, ' + estado + ');'

    return code;
};

Blockly.Arduino['saida_led_vermelho'] = function(block) {
    var estado = block.getFieldValue('estado');

    Blockly.Arduino.definitions_['define_saidaLedVermelho'] = 
        'int ledVermelho = 8;';

    Blockly.Arduino.setups_['setup_saidaLedVermelho'] = 
        'pinMode(ledVermelho, OUTPUT);';

    var code = 
        'digitalWrite(ledVermelho, ' + estado + ');'

    return code;
};

Blockly.Arduino['saida_led_verde'] = function(block) {
    var estado = block.getFieldValue('estado');

    Blockly.Arduino.definitions_['define_saidaLedVerde'] = 
        'int ledVerde = 7;';

    Blockly.Arduino.setups_['setup_saidaLedVerde'] = 
        'pinMode(ledVerde, OUTPUT);';

    var code = 
        'digitalWrite(ledVerde, ' + estado + ');'

    return code;
};

Blockly.Arduino['saida_buzzer'] = function(block) {
    var estado = block.getFieldValue('estado');

    Blockly.Arduino.definitions_['define_saidaBuzzer'] = 
        'int buzzer = 9;';

    Blockly.Arduino.setups_['setup_saidaLedVerde'] = 
        'pinMode(buzzer, OUTPUT);';

    var code = 
        'digitalWrite(buzzer, ' + estado + ');\n' +
        'delay(3000)';

    return code;
};