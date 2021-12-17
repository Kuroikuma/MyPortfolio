import "./proyect.style.css";

export const ProyectView = (props) => {
  const {
    data,
    numberImg,
    changeImg,
    TitleProyectRef,
    showTitleProyect,
    ViewProyectRef,
    showViewProyect,
  } = props;
  return (
    <div className="ProyectContainer">
      <div
        ref={TitleProyectRef}
        className={
          showTitleProyect
            ? "ProyectContainer__Title show"
            : "ProyectContainer__Title"
        }
      >
        <h1>Proyectos</h1>
      </div>
      <div
        ref={ViewProyectRef}
        className={
          showViewProyect
            ? "ProyectContainer__View show"
            : "ProyectContainer__View"
        }
      >
        <div className="ProyectContainer__View__previousProyect"></div>
        <div className="ProyectContainer__View__nextProyect"></div>
        <div className="ProyectContainer__View__img">
          {data.map((item) => (
            <img className={`${numberImg} `} src={item.img} alt={item.name} />
          ))}
        </div>
        <div className="ProyectContainer__View__ButtonGroup">
          <button
            onClick={changeImg}
            name="primeroImg"
            className={
              numberImg === "primeroImg"
                ? `ProyectContainer__View__ButtonGroup__item active`
                : `ProyectContainer__View__ButtonGroup__item`
            }
          ></button>
          <button
            onClick={changeImg}
            name="segundoImg"
            className={
              numberImg === "segundoImg"
                ? `ProyectContainer__View__ButtonGroup__item active`
                : `ProyectContainer__View__ButtonGroup__item`
            }
          ></button>
          <button
            onClick={changeImg}
            name="terceroImg"
            className={
              numberImg === "terceroImg"
                ? `ProyectContainer__View__ButtonGroup__item active`
                : `ProyectContainer__View__ButtonGroup__item`
            }
          ></button>
          <button
            onClick={changeImg}
            name="cuartoImg"
            className={
              numberImg === "cuartoImg"
                ? `ProyectContainer__View__ButtonGroup__item active`
                : `ProyectContainer__View__ButtonGroup__item`
            }
          ></button>
        </div>
      </div>
      <div className="ProyectContainer__Info">
        <p>
          proyecto american cheese de la pizzeria ubicada nicaragua,chontales
          que se le contruyo punto de venta,control de inventario, landing page
        </p>
      </div>
    </div>
  );
};
