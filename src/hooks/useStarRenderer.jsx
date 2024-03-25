import React from "react";

export const useStarRenderer = (num) => {
  const starCount = num % 1 >= 0.5 ? Math.ceil(num) : Math.floor(num);

  return new Array(starCount).fill(0);
};
