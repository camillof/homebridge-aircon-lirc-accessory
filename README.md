> :warning: Repository is not maintained, this is a side-project, to play around with the raspberry. Please consider fixing the security vulnerabilities before installing this plugin


# AirConLircAccessory Plugin

This plugin is intended to work with [Homebridge](https://github.com/homebridge/homebridge), giving the ability to control your dumb AirConditioner through [LIRC](https://www.lirc.org/).
My personal settup is a Raspberry 3+ with an [IR Transmitter Infrared Remote Hat Expansion Board](https://www.amazon.com/IR-Remote-Control-Transceiver-Raspberry/dp/B0713SK7RJ/ref=sr_1_2?dchild=1&keywords=raspberry+pi+IR&qid=1594076359&sr=8-2) installed on it.

## Install
1 - Install the plugin through npm
` sudo npm install -g homebridge-aircon-lirc-accessory`

2 - Add the accessory to your  Homebridge `config.json`
```json
"accessories":  [
	{
		"accessory":  "AirConLircAccessory",
		"name":  "Your_custom_name"
	}
],
```

## Improtant notes
- In order to this plugin to work, the computer where you have installed Homebridge must be able to run commands like `irsend SEND_ONCE ac HEAT_23_MED` (TODO: commands and device name customization)
