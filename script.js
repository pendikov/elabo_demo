
function handleClick() {
	console.log("handleClick");
	main();
}

function main() {

	var string = document.getElementById("searchTxt").value;

	var array = string.split(',').map((n) => +n);

	if (isNaN(array[0])) {
		alert("введите массив через запятую");
		return;
	}

	var result = getNumberOfSwaps(array);

	if (result == -1) {
		alert("фишки нельзя разделить поровну");
	} else if (result == 0) {
		alert("фишки уже разделены поровну");
	} else {
		alert("чтобы разделить все фишки поровну потребуется " + pluralize(result, ["ход", "хода", "ходов"]));
	}

	var result1 = getNumberOfSwaps([1, 5, 9, 10, 5]); // 12

	var result2 = getNumberOfSwaps([1, 2, 3]); // 1

	var result3 = getNumberOfSwaps([0, 1, 1, 1, 1, 1, 1, 1, 1, 2]); // 1

	var result4 = getNumberOfSwaps([1, 2, 3, 1]); // -1

	var result5 = getNumberOfSwaps([]); // 0

	var result6 = getNumberOfSwaps([0]); // 0

	var result7 = getNumberOfSwaps([1, 1, 1]); // 0

	console.log(result1);
	console.log(result2);
	console.log(result3);
	console.log(result4);
	console.log(result5);
	console.log(result6);
	console.log(result7);

}

function getNumberOfSwaps(chips) {

	var numMoves = 0;
	var total = 0;
	var count = chips.length;
	var minIndex = 0;
	var maxIndex = 0;

	var updatedChips = [];

	if (count == 0) {
    	return 0;
    }

	for (var i = 0; i < chips.length; i += 1) {
		total += chips[i];
		if (chips[i] < chips[minIndex]) {
			minIndex = i;
		}
		if (chips[i] > maxIndex) {
			maxIndex = i;
		}
		updatedChips[i] = chips[i];
	}

	if (total % count != 0) 
    {
        return -1;
    }

    if (updatedChips[maxIndex] == updatedChips[minIndex]) {
    	return 0;
    }

	while (maxIndex != minIndex) {
		if (minIndex < maxIndex) {
			if (maxIndex - minIndex > count / 2) {
                updatedChips[maxIndex] -= 1;
                if (maxIndex < count - 1) {
                    maxIndex += 1;
                }
                else { 
                	maxIndex = 0; 
                }
                updatedChips[maxIndex] += 1;
            } else {
                updatedChips[maxIndex] -= 1;
                if (maxIndex > 0) {
                    maxIndex -= 1;
                }
                else { 
                	maxIndex = count - 1;
                }
                updatedChips[maxIndex] += 1;
            }
		} else {
            if (minIndex - maxIndex < count / 2) {
                updatedChips[maxIndex] -= 1;
                if (maxIndex < count - 1) {
                    maxIndex += 1;
                }
                else { 
                	maxIndex = 0; 
                }
                updatedChips[maxIndex] += 1;
            }
            else {
                updatedChips[maxIndex] -= 1;
                if (maxIndex > 0) {
                    maxIndex -= 1;
                }
                else { 
                	maxIndex = count - 1; 
                }
                updatedChips[maxIndex] += 1;
            }
        }

        numMoves += 1; 
        minIndex = 0; 
        maxIndex = 0;

        for (var i = 0; i < count; i += 1) { 
            if (updatedChips[i] < updatedChips[minIndex]) {
                minIndex = i;
            }
            if (updatedChips[i] > updatedChips[maxIndex]) {
                maxIndex = i;
            }
        }

	}

	return numMoves;

}

function pluralize(count, words) {
    var cases = [2, 0, 1, 1, 1, 2];
    return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
}















