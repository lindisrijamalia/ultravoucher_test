function groupAnagrams(words) {
    const groupedAnagrams = [];
    const anagramGroups = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const sortedWord = word.split("").sort().join("");

        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [word];
        } else {
            anagramGroups[sortedWord].push(word);
        }
    }

    for (let group in anagramGroups) {
        groupedAnagrams.push(anagramGroups[group]);
    }

    return groupedAnagrams;
}

const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupAnagrams(words));
