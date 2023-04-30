function load() {
    let column_1 = [
        6, 5, 8, 10, 7, 6, 3, 3, 10, 10, 8, 5, 5, 1, 9, 4, 10, 4, 8, 7, 9, 1, 4,
        3, 10, 4, 9, 4, 9, 3
    ];
    let column_2 = [
        6, 7, 8, 10, 4, 2, 1, 7, 2, 1, 10, 1, 10, 7, 9, 10, 9, 7, 4, 10, 3, 7,
        4, 6, 10, 8, 7, 1, 1, 10
    ];
    let column_3 = [
        58, 44, 57, 55, 91, 55, 60, 88, 66, 41, 100, 57, 86, 67, 69, 63, 49, 81,
        77, 78, 67, 66, 64, 97, 60, 87, 55, 88, 78, 55
    ];
    let column_4 = [
        59, 86, 85, 65, 73, 61, 79, 64, 74, 85, 46, 91, 85, 95, 71, 100, 87, 72,
        97, 57, 84, 59, 88, 75, 79, 49, 57, 58, 91, 42
    ];

    let sum_1 = 0;
    let sum_2 = 0;
    let sum_3 = 0;
    let sum_4 = 0;

    for (i = 0; i < column_1.length; i++) {
        sum_1 = sum_1 + column_1[i];
        sum_2 = sum_2 + column_2[i];
        sum_3 = sum_3 + column_3[i];
        sum_4 = sum_4 + column_4[i];
    }

    let sums = [sum_1, sum_2, sum_3, sum_4];

    let total_score = 0;

    for (i = 0; i < sums.length; i++) {
        total_score = total_score + sums[i];
    }

    const results = {
        col1: column_1,
        col2: column_2,
        col3: column_3,
        col4: column_4,
        sums: sums,                 // array of sums of each column
        total_score: total_score,   // computed total score
    };

    console.log(results);
}