import React from "react";

interface CardProps {
  image: string;
  title: string;
  author: string;
  onImageClick: () => void;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <div className="col-md-2 mb-4 card-container">
        <div className="card h-100 d-flex flex-column align-items-center justify-content-center">
          <img
            src={props.image}
            className="card-img-top"
            alt="Card"
            onClick={props.onImageClick}
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
              marginTop: "50px",
            }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
