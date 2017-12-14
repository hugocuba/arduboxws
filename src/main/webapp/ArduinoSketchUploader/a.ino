#include <Servo.h>

Servo meuServo;
char byteReceived;

void setup() { 
  meuServo.attach(8);
  Serial.begin(9600);
} 

void servoStatus()
{
  String posicao = (String)"Posicao do servo: " + meuServo.read() + (String)" graus.";
  Serial.println(posicao);
}

void loop() {
  if (Serial.available() > 0)
  {
    byteReceived = Serial.read();

    switch(byteReceived){
      case '4':
         meuServo.write(meuServo.read()+1);
         servoStatus();
      break;
      case '6':
        meuServo.write(meuServo.read()-1);
        servoStatus();
      break;
    }
  }   
}
