import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./reviewCard.css";

export const ReviewCard = () => {
  const { data: data } = useContext(Context);

  return (
    <div>
      <h1 className="title-reseñas">Checa nuestras reseñas de pacientes recibidos</h1>
      <div className="reseña-container">
        <div className="card-reseña">
          {data.map((user) => {
            return (
              <div className="card-r" key={user.id}>
                <img src={user.avatar} alt="Avatar" className="img-reseña" />
                <div className="container">
                  <h3>
                    {user.first_name} {user.last_name}
                  </h3>
                  <h3>{user.email}</h3>
                  <p>
                    s simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
