/** 
 * Function that compares whether two strings are at most one edit from 
 *  being equal. Edits include adding/subtracting or changing letters.
 */

 function oneAway(s1, s2) {

  let l1 = s1.length;
  let l2 = s2.length;

  let diffs = 0;
  let i = 0;

  // Return edge cases immediately
  if (l1 > l2 + 1 || l1 < l2 - 1) return false;

  if (l1 === l2) {
    for (i = 0; i < l1 - 1; i++) {
      if (s1[i] !== s2[i]) diffs++
    }
    if (diffs > 1) {
      return false;
    } else {
      return true;
    }
  }

  let shorter = "";
  let longer = ""

  if (s1 > s2) {
    shorter = s2;
    longer = s1;
  } else {
    shorter = s1;
    longer = s2;
  }

  let diffs1 = 1;
  let diffs2 = 1;

  for (i = 0; i < shorter.length - 1; i++) {
    if (longer[i] !== shorter[i]) {
      diffs1++
    }
  }

  let j = 1;

  for (i = 0; i < longer.length - 1; i++) {
    if (longer[i] !== shorter[j]) {
      diffs2++
    }
    j++
  }

  return (diffs1 < 2 || diffs2 < 2)

 }

 module.exports = oneAway;