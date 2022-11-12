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
  const arr1 = ["", "a", "b", "c", "d", "e", "f", "g", "h"];
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
                        className={`${
                          verticalIndex % 2 == 0 && itemIndex % 2 == 0
                            ? "bg-[#D2B04C]"
                            : verticalIndex % 2 == 1 && itemIndex % 2 == 1
                            ? "bg-[#D2B04C]"
                            : "bg-[#4E3524]"
                        } h-20 w-20 border-[1px]  `}
                      >
                        {verticalIndex === 0 ? (
                          <>
                            {initialSetupBlack[itemIndex] == "rook" &&
                            (itemIndex === 0 || itemIndex === 7) ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_rdt45.svg"
                                />
                              </div>
                            ) : initialSetupBlack[itemIndex] == "kinight" &&
                              (itemIndex === 1 || itemIndex === 6) ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_ndt45.svg"
                                />
                              </div>
                            ) : initialSetupBlack[itemIndex] == "bisop" &&
                              (itemIndex === 2 || itemIndex === 5) ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_bdt45.svg"
                                />
                              </div>
                            ) : itemIndex === 3 ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_qdt45.svg"
                                />
                              </div>
                            ) : (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_kdt45.svg"
                                />
                              </div>
                            )}
                          </>
                        ) : verticalIndex === 1 ? (
                          <div className="flex justify-center items-center">
                            <img
                              className="h-16 w-16"
                              src="/images/Chess_pdt45.svg"
                            />
                          </div>
                        ) : verticalIndex === 6 ? (
                          <div className="flex justify-center items-center">
                            <img
                              className="h-16 w-16"
                              src="/images/Chess_plt45.svg"
                            />
                          </div>
                        ) : verticalIndex === 7 ? (
                          <>
                            {initialSetupwhite[itemIndex] == "rook" &&
                            (itemIndex === 0 || itemIndex === 7) ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_rlt45.svg"
                                />
                              </div>
                            ) : initialSetupwhite[itemIndex] == "kinight" &&
                              (itemIndex === 1 || itemIndex === 6) ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_nlt45.svg"
                                />
                              </div>
                            ) : initialSetupwhite[itemIndex] == "bisop" &&
                              (itemIndex === 2 || itemIndex === 5) ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_blt45.svg"
                                />
                              </div>
                            ) : itemIndex === 3 ? (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_qlt45.svg"
                                />
                              </div>
                            ) : (
                              <div className="flex justify-center items-center">
                                <img
                                  className="h-16 w-16"
                                  src="/images/Chess_klt45.svg"
                                />
                              </div>
                            )}
                          </>
                        ) : null}
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
