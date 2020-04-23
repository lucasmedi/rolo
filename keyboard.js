const KEY_ENTER = 13;
const KEY_ESC = 27;
const KEY_SPACE = 32;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_NUMZERO = 48;
const KEY_A = 65;
const KEY_D = 68;
const KEY_S = 83;
const KEY_W = 87;

document.addEventListener('keydown', function (e) {
  var code = e.keyCode ? e.keyCode : e.which;
  console.log(code);

  if (code === KEY_SPACE) {
    debugar();
    return;
  }

  if (code === KEY_ESC) {
    if (done || window.confirm("Do you really want to SHUFFLE it?")) {
      hideSuccess();
      shuffleTable();
      colorTable(gridPuzzle, tablePuzzle);
    }

    done = false;
  }

  if (code === KEY_ENTER) {
    if (done) {
      done = false;
      hideSuccess();
      start(grids[++gridIndex]);
    }
  }

  if (code >= KEY_NUMZERO && code < KEY_A) {
    navigation(code);
  }

  if ((code >= KEY_LEFT && code <= KEY_DOWN) || code >= KEY_A && code <= KEY_W) {
    control(code);
  }

  if (done) {
    showSuccess();
    console.log('Ganhou, mizeravi!');
  }
});

function navigation(code) {
    if (!done && !window.confirm("Do you really want to RELOAD it?"))
      return;

    switch (code) {
      case KEY_NUMZERO + 1:
        gridIndex = 0;
        break;

      case KEY_NUMZERO + 2:
        gridIndex = 1;
        break;

      case KEY_NUMZERO + 3:
        gridIndex = 2;
        break;

      case KEY_NUMZERO + 4:
        gridIndex = 3;
        break;

      case KEY_NUMZERO + 5:
        gridIndex = 4;
        break;

      case KEY_NUMZERO + 6:
        gridIndex = 5;
        break;

      case KEY_NUMZERO + 7:
        gridIndex = 6;
        break;

      case KEY_NUMZERO + 8:
        gridIndex = 7;
        break;

      case KEY_NUMZERO + 9:
        gridIndex = 8;
        break;

      case KEY_NUMZERO + 0:
        gridIndex = 9;
        break;
    }

    start(grids[gridIndex]);
  }

function control(code) {
    if (done)
      return;

    switch (code) {
      case KEY_W:
        rowSelected = Math.max(0, rowSelected - 1);
        selectRow(tablePuzzle);
        break;

      case KEY_S:
        rowSelected = Math.min(gridSolution.length - 1, rowSelected + 1);
        selectRow(tablePuzzle);
        break;

      case KEY_A:
        colSelected = Math.max(0, colSelected - 1);
        selectCol(tablePuzzle);
        break;

      case KEY_D:
        colSelected = Math.min(gridSolution[0].length - 1, colSelected + 1);
        selectCol(tablePuzzle);
        break;

      case KEY_UP:
        spinColumn(colSelected, -1);
        colorTable(gridPuzzle, tablePuzzle);
        done = matchTables();
        break;

      case KEY_DOWN:
        spinColumn(colSelected, 1);
        colorTable(gridPuzzle, tablePuzzle);
        done = matchTables();
        break;

      case KEY_LEFT:
        spinRow(rowSelected, -1);
        colorTable(gridPuzzle, tablePuzzle);
        done = matchTables();
        break;

      case KEY_RIGHT:
        spinRow(rowSelected, 1);
        colorTable(gridPuzzle, tablePuzzle);
        done = matchTables();
        break;
    }
  }
