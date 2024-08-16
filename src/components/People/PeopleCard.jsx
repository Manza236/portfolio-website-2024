import React from 'react';

const PeopleCard = ({ person }) => {
  return (
    <div>
      <div className="flex-col justify-center items-center">
        <div className="flex items-center">
          <button
            onClick={() =>
              document.getElementById(`my_modal_${person._id}`).showModal()
            }
            className="bg-pink-400 w-36 h-36 shadow-black shadow-sm mx-auto rounded-full hover:scale-110 transition"
          >
            <img
              className="w-36 h-36 object-contain rounded-full"
              src={person.image}  // Image path dynamically constructed from JSON
              alt={person.name}
            />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-medium mt-4 text-center">
            {person.name}
          </h3>
          <p className="text-center">{person.designation}</p>
        </div>
      </div>
      <dialog id={`my_modal_${person._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex justify-center items-center">
            <div className="w-full">
              <div className="bg-pink-400 shadow-black shadow-sm w-36 h-36 mx-auto rounded-full">
                <img
                  className="w-36 h-36 object-contain rounded-full"
                  src={person.image}  // Image path dynamically constructed from JSON
                  alt={person.name}
                />
              </div>
              <h3 className="text-xl font-medium mt-4 text-center">
                {person.name}
              </h3>
              <p className="text-center">{person.designation}</p>
              {person.email && (
                <p className="text-center text-sm mt-2">{person.email}</p>
              )}
              <p className="text-left mt-4 font-medium">About:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique aliquam inventore exercitationem eius quibusdam maxime
                veritatis cupiditate nobis laboriosam enim!
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PeopleCard;
