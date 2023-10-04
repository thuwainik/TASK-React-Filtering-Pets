import { useState } from "react";

function PetItem({ pet }) {
  const [image, setImg] = useState(pet.image);
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              setImg(pet.image2);
            }}
          >
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
