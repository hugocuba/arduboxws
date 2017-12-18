Blockly.Arduino['sensor_movimento'] = function(block) {
    
    var mov = block.getFieldValue('mov');
    
    Blockly.Arduino.definitions_['define_sensorMovimento'] = 
        'int pinoSensorMovimento = 3;\n' +
        'int iniciaSensorMovimento = 0;\n' +
        'int calibracaoSensorMovimento = 5;\n';
    
    Blockly.Arduino.setups_['setup_sensorMovimento'] = 
        'pinMode(pinoSensorMovimento,INPUT);\n' +
        'for(int i = 0; i < calibracaoSensorMovimento; i++){\n' +
        'delay(1000);\n} \n';
    
    var branch = Blockly.Arduino.statementToCode(this, 'movimento');

    var code = 
        'iniciaSensorMovimento = digitalRead(pinoSensorMovimento);\n' +
        'if (iniciaSensorMovimento == ' + mov +') {\n'
        + branch +
        '\n}\n';
    return code;
};

Blockly.Arduino['sensor_temperatura'] = function(block) {
    
    var temp = block.getFieldValue('temp');
    var valorTemp = block.getFieldValue('valorTemp');
    
    Blockly.Arduino.definitions_['define_sensorTemperatura'] = 
        '#include <Thermistor.h>\n' +
        'Thermistor temp(0);\n';
    
    var branch = Blockly.Arduino.statementToCode(this, 'temperatura');

    var code = 
        'int temperature = temp.getTemp();\n' +
        'if (temperature ' + temp + ' ' + valorTemp + ') {\n'
        + branch +
        '\n}\n';
    return code;
};