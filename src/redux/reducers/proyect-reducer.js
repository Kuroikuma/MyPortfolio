import { SIG_IMG } from "../actions/proyect-action";
import { SIG_PROYECT } from "../actions/proyect-action"; //SET_SHOW_TITLE_PROYECT
import { SET_SHOW_TITLE_PROYECT } from "../actions/proyect-action";
import { SET_SHOW_VIEW_PROYECT } from "../actions/proyect-action";
import { SET_SHOW_INFO_PROYECT } from "../actions/proyect-action";

const initialState = {
  numberImg: "primeroImg",
  numberPro: "primeroPro",
  showTitleProyect: false,
  showViewProyect: false,
  showInfoProyect: false,
};
export const proyectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIG_IMG:
      return { ...state, numberImg: action.payload };

    case SIG_PROYECT:
      return { ...state, numberPro: action.payload };

    case SET_SHOW_TITLE_PROYECT:
      return { ...state, showTitleProyect: action.payload };

    case SET_SHOW_VIEW_PROYECT:
      return { ...state, showViewProyect: action.payload };

    case SET_SHOW_INFO_PROYECT:
      return { ...state, showInfoProyect: action.payload };

    default:
      return state;
  }
};
