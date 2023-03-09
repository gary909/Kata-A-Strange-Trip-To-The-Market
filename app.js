function isLockNessMonster(s) {
    const substring = "tree fiddy";
    const substring1 = "3.50";
    const substring2 = "three fifty";
    if (s.includes(substring) || s.includes(substring1) || s.includes(substring2)) {
        return true
    }  else {
        return false;
    }  
}


console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")); // true
console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")); // false
console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them")); // true
