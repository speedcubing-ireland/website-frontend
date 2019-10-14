/* Instructions ======================================================
Hello, This should explain how to set up the live results page for the
latest competition.

1. Nameing the compettition
      Write the name of the competiton as the compName constant, for
      example: var compName = "Irish Championship 2020" and do the same
      in liveresults.js

2. Setting the competition
      Firstly go to cubecomps.com and go to the page of the competition
      that you are planning to show on the page. The URL should be like:
      https://www.cubecomps.com/live.php?cid=XXXX where XXXX is a code.
      This is the competition code so replace XXXX in the constant with
      the code. For example: const compCode = '1234'. Do the same in
      liveresults.js

3. Seting the Events
      For each event running, change the status in the list to
      true if it is running or false if it is not. The events are as follows
      2x2-7x7 - Normal
      Clk - Clock
      Pyr - Pyraminx
      Skb - Skewb
      Mgmx - Megaminx
      3BLD - 3x3 Blindfolded
      4BLD - 4x4 Blindfolded
      5BLD - 5x5 Blindfolded
      MBLD - Multiple Blindfolded
      3Oh - 3x3 One Handed
      3Wf - 3x3 With Feet
      Fmc - Fewest Moves
*/
var compName = "Every Event Éire"
const compCode = '4766'

const events = {
  '2x2': true,
  '3x3': true,
  '4x4': true,
  '5x5': true,
  '6x6': true,
  '7x7': true,
  'Clk': true,
  'Pyr': true,
  'Skb': true,
  'Sq1': true,
  'Mgmx': true,
  '3Bld': true,
  '4Bld': true,
  '5Bld': true,
  'MBld': true,
  '3Oh': true,
  '3Wf': true,
  'Fmc': true
}

for (let event of Object.keys(events)) {
    const newClass = events[event] ? '' : ' hidden'
    document.getElementById(event).className += newClass
    document.getElementById('comp-name').innerHTML = compName;
}
