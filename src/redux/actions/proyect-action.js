export const SIG_IMG = "SIG_IMG";
export const SIG_PROYECT = "SIG_PROYECT";
export const SET_SHOW_TITLE_PROYECT = "SET_SHOW_TITLE_PROYECT";
export const SET_SHOW_VIEW_PROYECT = "SET_SHOW_VIEW_PROYECT";
export const SET_SHOW_INFO_PROYECT = "SET_SHOW_INFO_PROYECT";

export const sigImg = (numberImg) => {
  return {
    type: SIG_IMG,
    payload: numberImg,
  };
};

export const sigProyect = (numberPro) => {
  return {
    type: SIG_PROYECT,
    payload: numberPro,
  };
};

export const setShowTitleProyect = (showTitleProyect) => {
  return {
    type: SET_SHOW_TITLE_PROYECT,
    payload: showTitleProyect,
  };
};

export const setShowViewProyect = (showViewProyect) => {
  return {
    type: SET_SHOW_VIEW_PROYECT,
    payload: showViewProyect,
  };
};

export const setShowInfoProyect = (showInfoProyect) => {
  return {
    type: SET_SHOW_INFO_PROYECT,
    payload: showInfoProyect,
  };
};
