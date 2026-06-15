// ====================
// 1. Palindrome Checker
// ====================
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zа-яіїєґ0-9]/gi, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// ====================
// 2. Anagram Detector
// ====================
function isAnagram(str1, str2) {
    const normalize = str =>
        str.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    return normalize(str1) === normalize(str2);
}

// ============================
// 3. Word Frequency Counter
// ============================
function wordFrequency(text) {
    const stopWords = [
        "the", "a", "an", "and", "or",
        "в", "на", "і", "та", "що", "це"
    ];

    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const freq = {};

    words.forEach(word => {
        if (!stopWords.includes(word)) {
            freq[word] = (freq[word] || 0) + 1;
        }
    });

    return Object.fromEntries(
        Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
    );
}

// ====================
// 4. Roman to Integer
// ====================
function romanToInt(roman) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = values[roman[i]];
        const next = values[roman[i + 1]];

        result += next > current ? -current : current;
    }

    return result;
}

// ========================
// 5. Compression Algorithm
// ========================
function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

// ===== Перевірка =====
console.log("1:", isPalindrome("A man, a plan, a canal: Panama"));
console.log("2:", isAnagram("listen", "silent"));
console.log("3:", wordFrequency("hello hello world world world test"));
console.log("4:", romanToInt("MCMXCIV"));
console.log("5:", compressString("aaabbc"));