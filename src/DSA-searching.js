//const bst1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
let bst22 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
// let bst3 = console.log(sort(bst2)

class Bst {
    constructor (key= null, value = null, parent= null) {
        this.key = key
        this.left = null
        this.right = null
        this.value = value
        this.parent = parent
    }
}

// export 
function indexOf(array, value) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count ++;
        if (array[i] == value) {
            return `${value} was found in ${count} search`;
        }
    }
    return 'not found';
};

//console.log(indexOf(bst1, 8));

// export 
function binarySearch(array, value, start, end, count = 1) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return  `item not found, after ${count} search`;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    // console.log("s",start, "e",end, 'c',count);
    if (item == value) {
        return `${item} was found in ${count} search`;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, count + 1);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, count + 1);
    }
}

// function deweySearch (num, title, start= 0, end = ) {

// }

const library = [
    "005.133 Mike Cowlishaw: The REXX Language",
    "005.133 Sams: Teach Yourself C++ In 21 Days",
    "005.133 Bjarne Stroustrup: The C++ Programming Language",
    "005.2762 Douglas Crockford: JavaScript: The Good Parts",
    "005.2762 David Flanagan: JavaScript: The Definitive Guide",
    "005.44684 Meinhard Schmidt: Windows Vista for Dummies", //It certainly is...
    "220.52081 Zondervan: NIV Study Bible",
    "231.7652 Dr Russell Humphries: Starlight and Time",
    "623.82509051 Frederick Thomas Jane: Jane's Fighting Ships", //So far, the ships are winning.
    "796.8092 Chuck Norris: The Official Chuck Norris Fact Book",
    ];

function find_book(library, dewey, title) {
	//Libraries are generally organized into separate sections for
	//fiction/non-fiction, and often for children's vs adult's. We
	//assume that the 'library' we've been given is the appropriate
	//section. Furthermore, we're going to pretend that this library
	//isn't divided into shelves, despite literally EVERY library I
	//have ever used having more than one shelf - no point making
	//this more complicated than it needs to be. :) And one more
	//short-cut: we assume that Dewey Decimal values can be compared
	//for equality and inequality with each other. The foibles of
	//binary floating-point are outside the scope of this question;
	//you're welcome to use fixed-point or string representations of
	//Dewey call codes. Oh, and we're looking for a book based on
	//title alone, despite the possibility of collisions.
	var start = 0, end = library.length;
	while (start < end) {
		var middle = Math.floor((start + end) / 2);
		if (library[middle].dewey == dewey) {
			//Found the right code. Great! Did we find the book?
			if (library[middle].title == title) return library[middle];
			//Nope. Linearly search around for the book we want.
			for (var idx = middle + 1; library[idx].dewey == dewey; ++idx)
				if (library[idx].title == title) return library[idx];
			for (var idx = middle - 1; library[idx].dewey == dewey; --idx)
				if (library[idx].title == title) return library[idx];
			//Well, we found the right section, but the book isn't
			//here. Guess someone else has borrowed it. Sorry!
			return null;
		}
		if (library[middle].dewey < dewey)
			start = middle + 1;
		else
			end = middle - 1;
	}
	//We don't have anything of that Dewey code, so that book isn't
	//available. Sorry! Try another library.
	return null;
}








console.log(find_book(library))
