//Simple, given a string of words, return the length of the shortest word(s).

function findShort(s) {
    const words = s.split(" ")
    let minLength = words[0].length
    for (let i = 1; i < words.length; i++) {
        const currentLength = words[i].length;
        if (currentLength < minLength) {
            minLength = currentLength;
        }
    }
    return minLength;
}
