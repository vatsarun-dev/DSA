function removeDuplicates(array: number[]): number {
    let i = 0;
    let j = 1;

    while (j < array.length) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }

        j++;
    }

    return i + 1;
}