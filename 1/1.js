function commonCharacters(s1 = "", s2 = "") {
    let count = 0;

    for (const char of s1) {
        if (s2.includes(char)) {
            s2 = deleteACharInString(s2, s2.indexOf(char));
            count++;
        }
    }

    return count;
}

function deleteACharInString(str, index) {
    let tmp = str.split("");
    tmp.splice(index, 1);
    return tmp.join("");
}

console.log(commonCharacters("abcaa", "adac"));
