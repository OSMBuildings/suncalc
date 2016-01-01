
var suncalc = require('./suncalc'),
    t = require('tap');

function near(val1, val2, margin) {
    return Math.abs(val1 - val2) < (margin || 1E-15);
}

var date = new Date('2013-03-05UTC'),
    lat = 50.5,
    lng = 30.5;

t.test('getPosition returns azimuth and altitude for the given time and location', function (t) {
    var sunPos = suncalc(date, lat, lng);

    t.ok(near(sunPos.azimuth, -2.5003175907168385), 'azimuth');
    t.ok(near(sunPos.altitude, -0.7000406838781611), 'altitude');
    t.end();
});

