import { useState } from "react";

const Game = () => {
  const arr = [8, 7, 6, 5, 4, 3, 2, 1];
  const arr2 = [8, 7, 6, 5, 4, 3, 2, 1];
  const initialSetupBlack = [
    "rook",
    "kinight",
    "bisop",
    "queen",
    "king",
    "bisop",
    "kinight",
    "rook",
  ];
  const initialSetupBlackPawns = [
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
  ];
  const initialSetupwhite = [
    "rook",
    "kinight",
    "bisop",
    "queen",
    "king",
    "bisop",
    "kinight",
    "rook",
  ];
  const initialSetupwhitePawns = [
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
  ];
  const [whitePawns, setWhitePawns] = useState({
    pawn1: [0, 6],
    pawn2: [1, 6],
    pawn3: [2, 6],
    pawn4: [3, 6],
    pawn5: [4, 6],
    pawn6: [5, 6],
    pawn7: [6, 6],
    pawn8: [7, 6],
  });
  const [whitePawnAvailableOptions, setWhitePawnAvailableOptions] = useState({
    pawn1: [-1, -1],
    pawn2: [-1, -1],
    pawn3: [-1, -1],
    pawn4: [-1, -1],
    pawn5: [-1, -1],
    pawn6: [-1, -1],
    pawn7: [-1, -1],
    pawn8: [-1, -1],
  });
  const [filledBoxesBlack, setFilledBoxesBlack] = useState({
    rook1: [0, 0],
    rook2: [0, 7],
    knight1: [0, 1],
    knight2: [0, 6],
    bishop1: [0, 2],
    bishop2: [0, 5],
    queen1: [0, 3],
    king: [0, 4],
    pawn1: [1, 0],
    pawn2: [1, 1],
    pawn3: [1, 2],
    pawn4: [1, 3],
    pawn5: [1, 4],
    pawn6: [1, 5],
    pawn7: [1, 6],
    pawn8: [1, 7],
  });
  const [whitePawn1, setWhitePawn1] = useState();
  const arr1 = ["", "a", "b", "c", "d", "e", "f", "g", "h"];
  const [highlight, setHighlight] = useState(0);
  const [highlight1, setHighlight1] = useState(0);
  const [pieceWhite, setPieceWhite] = useState(false);
  const selectedPieceWhite = (boolstate: boolean, type: any) => {
    if (boolstate === true && type === "PAWN1") {
      setWhitePawnAvailableOptions({
        ...whitePawnAvailableOptions,
        pawn1: [whitePawns.pawn1[0], whitePawns.pawn1[1] + 1],
      });
      setWhitePawnAvailableOptions({
        ...whitePawnAvailableOptions,
        pawn1: [whitePawns.pawn1[0], whitePawns.pawn1[1] + 2],
      });
    }
  };
  return (
    <div className="sm:container mx-10">
      <div>
        game
        <table className="grid justify-center items-center h-screen">
          <tbody>
            {arr.map((vetricalProp, verticalIndex) => {
              return (
                <tr key={verticalIndex} className="">
                  <th className="pr-3">{vetricalProp}</th>
                  {arr2.map((itemProp, itemIndex) => {
                    console.log(initialSetupBlackPawns[itemIndex], "itemIndex");

                    return (
                      <td
                        key={itemIndex}
                        onClick={() => {}}
                        className={`${
                          verticalIndex % 2 == 0 && itemIndex % 2 == 0
                            ? "bg-[#D2B04C]"
                            : verticalIndex % 2 == 1 && itemIndex % 2 == 1
                            ? "bg-[#D2B04C]"
                            : "bg-[#4E3524]"
                        } h-20 w-20 border-[1px] ${
                          (whitePawnAvailableOptions.pawn1[0] ===
                            verticalIndex ||
                            whitePawnAvailableOptions.pawn1[1] ===
                              verticalIndex) &&
                          itemIndex === whitePawns.pawn1[0] &&
                          "bg-black"
                        }  `}
                      >
                        <div className="flex justify-center items-center">
                          {verticalIndex === whitePawns.pawn1[1] &&
                            itemIndex === whitePawns.pawn1[0] && (
                              <img
                                onClick={() => {
                                  selectedPieceWhite(
                                    true,
                                    whitePawns.pawn1 ? "PAWN1" : ""
                                  );
                                }}
                                className="h-16 w-16"
                                src="/images/Chess_plt45.svg"
                              />
                            )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {arr1.map((horizontalProp, horizontalIndex) => {
              return (
                <th className="pt-3" key={horizontalIndex}>
                  {horizontalProp}
                </th>
              );
            })}
          </tbody>
        </table>
        {/* <img src="/images/Chess_kdt45.svg" alt="" /> */}
      </div>
    </div>
  );
};
export default Game;
