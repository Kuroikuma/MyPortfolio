import "./proyect.style.css";
import { ProyectViewCard } from "./proyect-view-card";

export const ProyectView = (props) => {
  const {
    data,
    TitleProyectRef,
    showTitleProyect,
    ViewProyectRef,
    showViewProyect,
    InfoProyectRef,
    showInfoProyect,
  } = props;
  return (
    <div className="ProyectContainer">
      <div
        className={
          showViewProyect
            ? "ProyectContainer__previousProyect--Left show"
            : "ProyectContainer__previousProyect--Left"
        }
      >
        <div
          className={
            showViewProyect
              ? "ProyectContainer__previousProyect show"
              : "ProyectContainer__previousProyect"
          }
        ></div>
      </div>
      <div className="proyectContainer2">
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
        <ProyectViewCard
          showViewProyect={showViewProyect}
          ViewProyectRef={ViewProyectRef}
          data={data}
        />
        {/*aqui el componete view */}
        <div
          ref={InfoProyectRef}
          className={
            showInfoProyect
              ? "ProyectContainer__Info show"
              : "ProyectContainer__Info"
          }
        >
          <p>
            proyecto american cheese de la pizzeria ubicada nicaragua,chontales
            que se le contruyo punto de venta,control de inventario, landing
            page
          </p>
        </div>
      </div>
      <div
        className={
          showViewProyect
            ? "ProyectContainer__nextProyect--Right show"
            : "ProyectContainer__nextProyect--Right"
        }
      >
        <div
          className={
            showViewProyect
              ? "ProyectContainer__nextProyect show"
              : "ProyectContainer__nextProyect"
          }
        ></div>
      </div>
    </div>
  );
};
