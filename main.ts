//% color=#5042f4 icon="\uf2c9"

namespace DS18B20 {
    /**
     * Liest die Temperatur aus dem one-wire Temperature Sensor.
     * Gibt eine 4-stellige Zahl zurück. Der Wert sollte durch 100 geteilt werden da 
     * der Wert um 100 überhöht ist. 
     * Die beiden linken Ziffern sind die Stellen vor dem Komma, die beiden rechten Stellen 
     * zwei Nachkommastellen.
     * Originalerweiterung von https://github.com/mengbishu/pxt-ds18b20
     * Special thanks 2 mengbishu!
     * Erweitert mit Anpassungen für den Calliope Mini (https://www.calliope.cc) von Michael Klein.
     * Pins angepasst, Funktionen übersetzt, Writetemperature ergänzt.
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
