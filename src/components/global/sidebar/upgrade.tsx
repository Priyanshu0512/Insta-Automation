import React from "react";
import PaymentButton from "../payment-button";

const UpgradeCard = () => {
  return (
    <div className="bg-[#252525] rounded-2xl p-3 flex flex-col gap-y-3">
      <span className="text-sm">
        Upgrade to {""}
        <span className="bg-gradient-to-r from-[#CC3BD4] to-[#D064AC] font-bold bg-clip-text text-transparent ">
          Smart AI
        </span>
      </span>
      <p className="text-[#9B9CA0] font-light text-sm">
        Unlock All Features <br /> including A.I.
      </p>
      <PaymentButton />
    </div>
  );
};

export default UpgradeCard;
