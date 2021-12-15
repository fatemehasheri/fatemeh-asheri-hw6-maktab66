function sortPeople(array = []) {
    for (let index1 = 0; index1 < array.length; index1++) {
        if (array[index1] === -1)
            continue;

        for (let index2 = +index1 + 1; index2 < array.length; index2++) {
            if (array[index2] === -1)
                continue;

            if (array[index2] < array[index1]) {
                [array[index1], array[index2]] = [array[index2], array[index1]]
            }
        }
    }

    return array
}

console.log(sortPeople([-1, 150, 190, 170, -1, -1, 160, 180]));
