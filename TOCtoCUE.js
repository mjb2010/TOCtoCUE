/*

TOCtoCUE: MusicBrainz CD TOC string to cue sheet fragment

Given a CD TOC string from the MusicBrainz web site, returns a string that can be used in a cue sheet for a CD image rip.

Author: Mike J. Brown <mike@skew.org>
License: CC0 1.0 <https://creativecommons.org/publicdomain/zero/1.0/>
Requires: JavaScript 1.6.

History:
2013-11-02 - First version.

Example 1:
TOCtoCUE("1 3 335235 151 20878 73917")
TRACK 00 AUDIO
  INDEX 01 00:00:00
TRACK 01 AUDIO
  INDEX 01 04:36:27
TRACK 02 AUDIO
  INDEX 01 16:23:41

Example 2:
TOCtoCUE("1 3 335235 151 20878 73917",true)
TRACK 01 AUDIO
  INDEX 00 00:00:00
  INDEX 01 00:02:01
TRACK 02 AUDIO
  INDEX 01 04:38:28
TRACK 03 AUDIO
  INDEX 01 16:25:42

Minified version:
function TOCtoCUE(e,t){var n=new Array;var r=e.split(" ").map(function(e){return parseInt(e,10)}).slice(3);var s=r[0];var o=r.map(function(e){var n;var r;var i;t?i=e:i=e-s;i-=(n=parseInt(i/4500,10))*4500;i-=(r=parseInt(i/75,10))*75;return Array(n,r,i).map(function(e){return e<10?"0"+e:e}).join(":")});for(i=0;i<o.length;i++){n.push("TRACK "+(i<9?"0"+(i+1):i+1)+" AUDIO\n  "+(i==0&&t?"INDEX 00 00:00:00\n  ":"")+"INDEX 01 "+o[i])}return n.join("\n")}

*/
function TOCtoCUE(mbTOCstring, withHTOA) {
    var outputArray = new Array();
    var tocArray = mbTOCstring.split(" ").map(function (x) {
        return parseInt(x, 10);
    }).slice(3);
    var begin = tocArray[0];
    var times = tocArray.map(function (s) {
        var mm;
        var ss;
        var ff;
        withHTOA ? ff = s : ff = s - begin;
        ff -= (mm = parseInt(ff / 4500, 10)) * 4500;
        ff -= (ss = parseInt(ff / 75, 10)) * 75;
        return Array(mm, ss, ff).map(function (x) {
            return x < 10 ? "0" + x : x;
        }).join(":");
    });
    for (i = 0; i < times.length; i++) {
        outputArray.push("TRACK " + (i < 9 ? "0" + (i + 1) : (i + 1)) + " AUDIO\n  " + (i == 0 && withHTOA ? "INDEX 00 00:00:00\n  " : "") + "INDEX 01 " + times[i]);
    }
    return outputArray.join("\n");
}
