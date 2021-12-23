import React from "react";
import { useSelector } from "react-redux";
import Pizza1 from "../../../Assets/imagen.png";
import { useOnScreen } from "../../hooks/useOnScreen";
import Menu from "../../../Assets/menu.png";
import Inventario from "../../../Assets/inventario.png";
import Control from "../../../Assets/control-de-ordenes.png";
//import { sigProyect } from "../../../redux/actions/proyect-action";
import { ProyectView } from "./proyect.view";

export const Proyect = () => {
  const numberPro = useSelector((state) => state.proyectReducer.numberPro);
  const [TitleProyectRef, showTitleProyect] = useOnScreen({
    rootMargin: "-50px",
  });
  const [ViewProyectRef, showViewProyect] = useOnScreen({
    rootMargin: "-100px",
  });
  const [InfoProyectRef, showInfoProyect] = useOnScreen({
    rootMargin: "-50px",
  });

  const data = [];

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
      numberPro={numberPro}
      data={data}
      TitleProyectRef={TitleProyectRef}
      showTitleProyect={showTitleProyect}
      InfoProyectRef={InfoProyectRef}
      showInfoProyect={showInfoProyect}
      ViewProyectRef={ViewProyectRef}
      showViewProyect={showViewProyect}
    />
  );
};
