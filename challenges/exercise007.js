/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");

  // Checked explicitly for arrays because isNan([n]) where n is an integer returns false
  if (typeof n !== 'number') throw new Error("n must be a number");

  /**
   * Have allowed non-integers since fn definition did not specify integers.
   * Therefore, the reduce function does not add any non-numbers (i.e. decimal point) to the total
  */
  return Number(n.toString().split("").reduce((acc, val) => isNaN(val) ? acc : acc + Number(val), 0));
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) step = 1;

  if (typeof start !== 'number') throw new Error("start must be a number");
  if (typeof end !== 'number') throw new Error("end must be a number");
  if (typeof step !== 'number') throw new Error("step must be a number");

  // Checked for these edge cases to avoid an infinite loop
  if (step === 0) throw new Error("step cannot be zero");
  if (step > 0 && start > end) throw new Error("start cannot be greater than end if step is positive");
  if (step < 0 && start < end) throw new Error("start cannot be smaller than end if step is negative");

  let currentDigit = start;
  let rangeArray = [];
  if (step > 0) {
    while (currentDigit <= end) {
      rangeArray.push(currentDigit);
      currentDigit += step;
    }
  } else {
    while (currentDigit >= end) {
      rangeArray.push(currentDigit);
      currentDigit += step;
    }
  }
  return rangeArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!Array.isArray(users)) throw new Error("users must be an array");
  if (typeof date !== 'string') throw new Error("date must be a string");

  let screenTimeAlertList = [];
  users.forEach(user => {
    if (user.screenTime) {
      let userScreenTime = 0;
      for (let i = 0; i < user.screenTime.length; i++) {
        if (user.screenTime[i].date === date && user.screenTime[i].usage) {
          for (let app in user.screenTime[i].usage) {
            userScreenTime += user.screenTime[i].usage[app];
            if (userScreenTime >= 100) {
              if (user.username) {
                screenTimeAlertList.push(user.username);
                break;
              }
            }
          }
          break;
        }
      }
    }
  });

  return screenTimeAlertList;
};


/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.length !== 7 || hexStr[0] !== '#') throw new Error("hexStr must be a valid hex string");
  for (let i = 1; i < 7; i++) {
    if (isNaN(parseInt(hexStr[i])) && ["A", "B", "C", "D", "E", "F"].indexOf(hexStr[i]) === -1) throw new Error("hexStr must be a valid hex string");
  }
  return "rgb(" + parseInt(hexStr.slice(1, 3), 16) + "," + parseInt(hexStr.slice(3, 5), 16) + "," +
    parseInt(hexStr.slice(5, 7), 16) + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

  if (!Array.isArray(board)) throw new Error("board must be an array");
  if (board.length !== 3) throw new Error("board must contain 3 elements");
  board.forEach(row => {
    if (row.length !== 3) throw new Error("board must contain 3 arrays of 3 elements")
  });

  //define fns for different win types
  const findHorizontalWinner = board => {
    for (let row = 0; row < 3; row++) {
      const ROW_WINNER = board[row].reduce((acc, val) => acc === val ? acc : null);
      if (ROW_WINNER) return ROW_WINNER;
    }
  }
  const findVerticalWinner = board => {
    for (let column = 0; column < 3; column++) {
      if (board[0][column] === "X" && board[1][column] === "X" && board[2][column] === "X") return "X";
      if (board[0][column] === "0" && board[1][column] === "0" && board[2][column] === "0") return "0";
    }
    return null;
  }
  const findDiagonalWinner = board => {
    let middleSymbol = board[1][1];
    if (!middleSymbol) return null;
    for (let startColumn = 0; startColumn < 3; startColumn += 2) {
      if (board[0][startColumn] ===
        middleSymbol && board[2][2 - startColumn] === middleSymbol) return middleSymbol;
    }
    return null;
  }

  //call fns for different win types
  const HORIZONTAL_WINNER = findHorizontalWinner(board);
  if (HORIZONTAL_WINNER) return HORIZONTAL_WINNER;
  const VERTICAL_WINNER = findVerticalWinner(board);
  if (VERTICAL_WINNER) return VERTICAL_WINNER;
  const DIAGONAL_WINNER = findDiagonalWinner(board);
  if (DIAGONAL_WINNER) return DIAGONAL_WINNER;
  return null;

};
