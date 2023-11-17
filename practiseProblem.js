var names = ["tayeb", "tom", "jane", "peter", "john"];
var marks = [85, 66, 95, 56, 40];
var marksLength = marks.length
console.log(marksLength);

for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 80) {
        console.log(names[i], "= A+");
    }
    else if (80 > marks[i] && marks[i] >= 60) {
        console.log(names[i], "= B")
    }
    else if (60 > marks[i] && marks[i] >= 50) {
        console.log(names[i], "= C")
    }
    else if (50 > marks[i] && marks[i] >= 40) {
        console.log(names[i], "= D")
    }
    else {
        console.log(names[i], "= F")
    }
}