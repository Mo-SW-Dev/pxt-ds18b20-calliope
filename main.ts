//% color=#5042f4 icon="\uf2c9"

namespace DS18B20 {
    /**
     * Reads the temperature from the one-wire temperature sensor.
     * Returns a 4 digit number. value should be divided by 100 to get 
     *temperature in hundreths of a degree centigrade. 
     * block="Temperature(C)"
     */

    //% shim=DS18B20::Temperature
    export function Temperature(p: number): number {
        // Fake function for simulator
        return 0
    }
    
      /**
    * Schreibt die aktuelle Temperatur auf dem 5x5 Display
    * und hängt Grad Celsius an */
    //% weight=10 blockId="WriteTemperature" 
    //% block="WriteTemperature |%p|"
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=4
    export function WriteTemperature(p: DigitalPin): void {
        basic.showString(TemperatureString(p))
        images.createBigImage(`
            . # . . .   # # . . .
            # . # . #   . . . . .
            . # . . #   . . . . .
            . . . . #   . . . . .
            . . . . .   # # . . .
            `).scrollImage(1, 200)
    }
    
   /**
    * Liest die Temperatur aus dem ds18b20 Sensor als 4-stellige Ganzzahl aus.
    * Der Wert muss durch 100 geteilt werden um den wirklichen Wert zuberechnen.
    * Die beiden rechten Ziffern sind die zwei Nachkommastellen!*/
    //% weight=10 blockId="Temperature_number" 
    //% block="Temperature_number |%p|"
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=4
    export function TemperatureNumber(p: DigitalPin): number {
        // Fake function for simulator
        return Temperature(p)
    }    
    
   /**
    * Liest die Temperatur aus dem ds18b20 aus und erzeugt eine Textzeile (String)
    mit Komma und 2 Nachkommastellen.*/
    //% weight=10 blockId="Temperature_string" 
    //% block="|%p| Temperature_string "
    //% p.fieldEditor="gridpicker" p.fieldOptions.columns=4
    export function TemperatureString(p:DigitalPin): string {
     let temp = Temperature(p);
     let x = (temp / 100)
     let y = (temp % 100)
     let z = ''
      if (temp >= 0) {
        if (y < 10) {
            z = x.toString() + ',0' + y.toString()
        }
        else {
            z = x.toString() + ',' + y.toString()
        }
    }
    else if (temp < 0) {
        if (y > -10) {
            z = '-' + (-x).toString() + ',0' + (-y).toString()
        }
        else {
            z = '-' + (-x).toString() + ',' + (-y).toString()
        }
    }
    return z
   }
}
