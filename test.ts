// tests go here; this will not be compiled when this package is used as a library

basic.forever(() => {
    serial.writeValue("0", DS18B20.Temperaturenumber(DS18B20.pin.pin0))
    serial.writeLine("0 : " + DS18B20.Temperaturestring(DS18B20.pin.pin0))
    basic.pause(1000)
})
