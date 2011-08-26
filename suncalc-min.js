/*
 Copyright (c) 2011, Vladimir Agafonkin
 SunCalc is an Open Source JavaScript library for calculating sun position and sunlight phases for the given location and time.
 See https://github.com/mourner/suncalc for source code and more information.
*/
(function(C){function k(a){return new Date((a+0.5-l)*m)}function s(b){return D*a.sin(b)+E*a.sin(2*b)+F*a.sin(3*b)}var d={};typeof module!=="undefined"&&module.exports?module.exports=d:C.SunCalc=d;var n=[[-0.83,"sunrise","sunset"],[-0.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"night","nightEnd"],[6,"goldenHourEnd","goldenHour"]],a=Math,l=2440588,h=2451545,f=a.PI/180,m=864E5,t=357.5291*f,u=0.98560028*f,o=9.0E-4,v=0.0053,w=-0.0069,D=1.9148*f,E=0.02*f,F=
3.0E-4*f,x=102.9372*f,p=23.45*f,G=280.16*f,H=360.9856235*f;d.addTime=function(a,c,e){n.push([a,c,e])};d.getTimes=function(b,c,e){function I(b){b=a.acos((a.sin(b)-a.sin(d)*a.sin(y))/(a.cos(d)*a.cos(y)));return h+o+(b+g)/(2*a.PI)+z+v*a.sin(i)+w*a.sin(2*q)}var g=-e*f,d=c*f,z=a.round(b.valueOf()/m-0.5+l-h-o-g/(2*a.PI)),b=h+o+(0+g)/(2*a.PI)+z,i=t+u*(b-h),c=s(i),q=i+x+c+a.PI,y=a.asin(a.sin(q)*a.sin(p)),b=b+v*a.sin(i)+w*a.sin(2*q),c={solarNoon:k(b)},A,j,r,B;for(e=0,A=n.length;e<A;e++)j=n[e],r=I(j[0]*f),
B=b-(r-b),c[j[1]]=k(B),c[j[2]]=k(r);return c};d.getSunPosition=function(b,c,e){e=-e*f;c*=f;var d=b.valueOf()/m-0.5+l,b=t+u*(d-h),g=s(b),g=b+x+g+a.PI,b=a.asin(a.sin(g)*a.sin(p)),g=a.atan2(a.sin(g)*a.cos(p),a.cos(g)),d=G+H*(d-h)-e,e=d-g,e=a.atan2(a.sin(e),a.cos(e)*a.sin(c)-a.tan(b)*a.cos(c));d-=g;c=a.asin(a.sin(c)*a.sin(b)+a.cos(c)*a.cos(b)*a.cos(d));return{azimuth:e,altitude:c}};d.rad2deg=1/f})(this);