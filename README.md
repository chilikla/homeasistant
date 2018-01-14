## Home Assistant Hebrew Times זמני היום

Basic [Home Assistant](https://home-assistant.io/) configuration which adds Jewish times and information as sensors. Currently it's hard coded to supply Hebrew date, Shabbat entrance and exit,  the sunset and the next Parasha. All the times are for Jersualem.

The sensors calls Bash script (`node.sh`) which installs Node.js if it's not installed, then it runs Node.js script (`hebcal.js`) which fetch the information according to the argument attached to the command line.

The sensors configured in `sensors.yaml`, and their icon customized in `customize.yaml`.
