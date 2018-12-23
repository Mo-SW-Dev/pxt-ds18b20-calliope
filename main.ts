//% color=#5042f4 icon="\uf2c9"
namespace DS18B20 {
    /**
     * Reads the temperature from the one-wire temperature sensor.
     * Returns a 4 digit number. value should be divided by 100 to get 
     *temperature in hundreths of a degree centigrade. 
     * block="Temperature(C)"
     */

     export enum pin {
       //% block="P0"
       P0 = 19,
       //% block="P1"
       P1 = 7,
       //% block="P2"
       P2 = 8,
       //% block="P3"
       P3 = 23,
       //% block="C16"
       C16 = 9,
       //% block="C17"
       C17 = 15
  }
     
    //% shim=DS18B20::Temperature
    export function Temperature(p: number): number {
        // Fake function for simulator
        return 0
    }
    
    //% weight=10 blockId="Temperature_number" 
    //% block="|%p| Temperature_number "
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=4
    export function TemperatureNumber(p: pin): number {
        // Fake function for simulator
        return Temperature(p)
    }
    
    //% weight=10 blockId="Temperature_string" 
    //% block="|%p| Temperature_string "
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=4
    export function TemperatureString(p: pin) : string{
        let temp = Temperature(p);
        let x = (temp / 100)
        let y = (temp % 100)
        let z = ''
        if(temp >= 0){
          if(y < 10){
            z = x.toString() + '.0' + y.toString()
          }
          else{
            z = x.toString() + '.' + y.toString()
          }
        }
        else if(temp < 0){
          if(y > -10){
            z = '-' + (-x).toString() + '.0' + (-y).toString()
          }
          else{
            z = '-' + (-x).toString() + '.' + (-y).toString()
          }
        }
        return z
    }
}
