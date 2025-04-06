

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

	const a = chips;

	if (a.length == 0) {
    	return 0;
    }

    var total =  a.reduce((acc, val) => acc + val, 0);

	if (total % a.length != 0) 
    {
        return -1;
    }

    const mean = total / a.length;
    const s = a.reduce((acc, val, index) => {
    	acc.push((acc[index - 1] || 0) + (val - mean));
    	return acc;
   	}, []);
  	const median = s.slice().sort((x, y) => x - y)[Math.floor(s.length / 2)];
  	return s.reduce((acc, val) => acc + Math.abs(val - median), 0);
}

function pluralize(count, words) {
    var cases = [2, 0, 1, 1, 1, 2];
    return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
}















