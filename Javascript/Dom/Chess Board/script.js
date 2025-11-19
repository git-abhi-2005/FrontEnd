
const chess = document.querySelector('.chessboard');
const oddRow = `<div class="square light"></div><div class="square dark"></div>`.repeat(4);
const evenRow = `<div class="square dark"></div><div class="square light"></div>`.repeat(4);
const completeHtml = `${oddRow}${evenRow}`.repeat(4);
chess.innerHTML = completeHtml;
const board = document.querySelector('.chessboard');
const frag = document.createDocumentFragment();

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const sq = document.createElement('div');
        sq.className = 'square ' + ((r + c) % 2 ? 'dark' : 'light');
        frag.appendChild(sq);
      }
    }
    board.appendChild(frag);