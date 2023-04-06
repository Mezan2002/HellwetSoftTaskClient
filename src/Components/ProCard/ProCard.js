import React from "react";

const ProCard = () => {
  return (
    <div>
      <div className="card 2xl:block xl:hidden shadow-lg bg-gradient-to-r from-purple-300 to-primary">
        <div className="card-body">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
          <button className="btn-block rounded-full bg-white text-primary uppercase py-4 font-semibold">
            Get Pro Now
          </button>
        </div>
      </div>
      <div className="card 2xl:hidden xl:block shadow-lg bg-gradient-to-r from-purple-300 to-primary">
        <div className="card-body">
          <p className="text-white">Lorem ipsum dolor sit amet cons</p>
          <button className="btn-block rounded-full bg-white text-primary uppercase py-3 font-semibold">
            Get Pro Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
