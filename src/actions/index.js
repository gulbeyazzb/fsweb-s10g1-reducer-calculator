export const ADD_ONE = "Total'e 1 ekler";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "display'i 0'lamak için total değeri 0'lar";
export const ADD_MEMORY = "Memory değerine total değeri atar";
export const RECALL_MEMORY = "Total değeri memory değer ile günceller";
export const CLEAR_MEMORY = "Memory değerini sıfırlar";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (option) => {
  return { type: CHANGE_OPERATION, payload: option };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoryChange = (value) => {
  if (value === "M+") {
    return { type: ADD_MEMORY };
  } else if (value === "MR") {
    return { type: RECALL_MEMORY };
  } else if (value === "MC") {
    return { type: CLEAR_MEMORY };
  }
};
