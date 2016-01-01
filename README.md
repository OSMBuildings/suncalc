
SunCalc
=======

This is an extremely stripped down version of Vladimir Agafonkin's SunCalc library (https://github.com/mourner/suncalc).
It got cloned for internal purposes of OSM Budlings. Contains code from getPosition() only.


SunCalc is a tiny BSD-licensed JavaScript library for calculating sun position,
sunlight phases (times for sunrise, sunset, dusk, etc.),
moon position and lunar phase for the given location and time,
created by [Vladimir Agafonkin](http://agafonkin.com/en) ([@mourner](https://github.com/mourner))
as a part of the [SunCalc.net project](http://suncalc.net).

Most calculations are based on the formulas given in the excellent Astronomy Answers articles
about [position of the sun](http://aa.quae.nl/en/reken/zonpositie.html)
and [the planets](http://aa.quae.nl/en/reken/hemelpositie.html).
You can read about different twilight phases calculated by SunCalc
in the [Twilight article on Wikipedia](http://en.wikipedia.org/wiki/Twilight).


## Usage example

```javascript
// get position of the sun (azimuth and altitude) at today's sunrise
var sunrisePos = suncalc(datetime, 51.5, -0.1);
```

### Sun position

```javascript
suncalc(/*Date*/ timeAndDate, /*Number*/ latitude, /*Number*/ longitude)
```
Returns an object with the following properties:

 * `altitude`: sun altitude above the horizon in radians,
 e.g. `0` at the horizon and `PI/2` at the zenith (straight over your head)
 * `azimuth`: sun azimuth in radians (direction along the horizon, measured from south to west),
 e.g. `0` is south and `Math.PI * 3/4` is northwest
