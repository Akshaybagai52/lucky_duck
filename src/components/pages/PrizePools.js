import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Wallet.scss";
import ParticipateCard from "../common/ParticipateCard.js";
const PrizePools = () => {
  const dispatch = useDispatch();
  const poolData = useSelector((state) => state.pool);
  const dt = poolData.filter((el) => el.status === 0);

  return (
    <div className="wallet main-container  ">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <h3>List of Pools</h3>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around list-pool">
        {dt && dt.map((el, idx) => <ParticipateCard key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default PrizePools;
