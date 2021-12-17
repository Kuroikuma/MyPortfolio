import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Pizza1 from "../../../Assets/imagen.png";
import { useOnScreen } from "../../hooks/useOnScreen";
import Menu from "../../../Assets/menu.png";
import Inventario from "../../../Assets/inventario.png";
import Control from "../../../Assets/control-de-ordenes.png";
import { sigImg, sigProyect } from "../../../redux/actions/proyect-action";
import { ProyectView } from "./proyect.view";

export const Proyect = () => {
  const dispatch = useDispatch();

  const numberImg = useSelector((state) => state.proyectReducer.numberImg);
  const numberPro = useSelector((state) => state.proyectReducer.numberPro);
  const [TitleProyectRef, showTitleProyect] = useOnScreen({
    rootMargin: "-50px",
  });
  const [ViewProyectRef, showViewProyect] = useOnScreen({
    rootMargin: "-100px",
  });

  useEffect(() => {
    const ChangeImgtime = setTimeout(() => {
      console.log("Que pasho");
      switch (numberImg) {
        case "primeroImg":
          dispatch(sigImg("segundoImg"));
          break;
        case "segundoImg":
          dispatch(sigImg("terceroImg"));
          break;
        case "terceroImg":
          dispatch(sigImg("cuartoImg"));
          break;
        case "cuartoImg":
          dispatch(sigImg("primeroImg"));
          break;
        default:
          break;
      }
    }, 5000);
    return () => clearTimeout(ChangeImgtime);
  }, [numberImg]);

  const data = [];

  const changeImg = (event) => {
    let { name } = event.target;
    console.log(name);
    dispatch(sigImg(name));
  };

  data.push({
    img: Menu,
    name: "SQL Server",
  });
  data.push({
    img: Inventario,
    name: "Java",
  });
  data.push({
    img: Pizza1,
    name: "Java",
  });
  data.push({
    img: Control,
    name: "Java",
  });

  return (
    <ProyectView
      changeImg={changeImg}
      numberImg={numberImg}
      numberPro={numberPro}
      data={data}
      TitleProyectRef={TitleProyectRef}
      showTitleProyect={showTitleProyect}
      ViewProyectRef={ViewProyectRef}
      showViewProyect={showViewProyect}
    />
  );
};
