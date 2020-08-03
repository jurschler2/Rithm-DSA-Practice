/** Function that compares whether two strings are at most one edit from 
 *  being equal. Edits include adding/subtracting or changing letters.
 */

 function oneAway(s1, s2) {

  let l1 = s1.length;
  let l2 = s2.length;

  let diffs = 0;
  let i = 0;


  // Return edge cases immediately
  if (l1 !== l2 + 1 || l1 !== l2 - 1) return false;

  if (l1 === l2) {
    for (i = 0; i < l1; i++) {
      if (s1[i] !== s2[i]) diffs++
    }
    if (diffs > 1) return false;
  }



 }

 module.exports = oneAway;