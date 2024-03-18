import { useEffect, useState } from "react";
import "./styles.css"

export default function TicTacToe({ value }) {
  // track the state of board which is simlply an array of 9 elements
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  // the current square is the index corresponding to the array
  const handleClick = (currentSquare) => {
    let cpySquares = [...squares];

    // first check if the square being clicked is empty
    // or if theres a winner
    if (checkWin(cpySquares) || cpySquares[currentSquare]) {
      return;
    }

    // depending on the turn, an X or O will be placed into the array
    if (isXTurn) {
      cpySquares[currentSquare] = "X";
    }
    else {
      cpySquares[currentSquare] = "O";
    }

    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  const handleRestart = () =>{
    setSquares(Array(9).fill(""))
    setIsXTurn(true);
    setStatus("");
  }

  // check if someone has won
  const checkWin = (board) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winningPatterns.length; i++){
      // destructure the winning patterns arrays
      const [x,y,z] = winningPatterns[i];

      // check if the state of the board matches a winning pattern
      if (board[x] && (board[x] === board[y]) && (board[x] === board[z])) {
        return board[x]
      } 
    }

    return null;
  }


  function Square({value, onClick}) {
    return <button onClick={onClick} className="square">{value}</button>;
  }

  useEffect(()=>{
    if (!checkWin(squares) && squares.every(item => item !== "")){
      setStatus("draw")
    } else if (checkWin(squares)) {
      setStatus(`${checkWin(squares)} wins!`)
    } else {
      setStatus(`${isXTurn ? "X" : "O"}'s turn`);
    };
  },
  [squares, isXTurn])

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onClick={()=>handleClick(2)}/>
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onClick={()=>handleClick(5)}/>
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onClick={()=>handleClick(8)}/>
      </div>
      <div>
        <h1>{status}</h1>
        <button onClick={handleRestart}>Play Again</button>
      </div>
    </div>
  );
}
