Blockly.Arduino['sensor_movimento'] = function(block) {
    
    var mov = block.getFieldValue('mov');
    
    Blockly.Arduino.definitions_['define_sensorMovimento'] = 
        'int pinoSensorMovimento = 3;\n' +
        'int iniciaSensorMovimento = 0;\n' +
        'int calibracaoSensorMovimento = 5;\n';
    
    Blockly.Arduino.setups_['setup_sensorMovimento'] = 
        'pinMode(pinoSensorMovimento,INPUT);\n' +
        'Serial.print("Calibrando o sensor de presença...")\n' +
        'for(int i = 0; i < calibracaoSensorMovimento; i++){\n' +
        'Serial.print("."); delay(1000);\n} \n' +
        'Serial.println("Sensor Ativado"); delay(500);\n';
    
    var branch = Blockly.Arduino.statementToCode(this, 'movimento');

    var code = 
        'iniciaSensorMovimento = digitalRead(pinoSensorMovimento);\n' +
        'Serial.print("Valor do Sensor PIR: ");\n' +
        'Serial.println(iniciaSensorMovimento);\n' +
        'if (iniciaSensorMovimento == ' + mov +') {\n'
        + branch +
        '\n}\n';
    return code;
};