import { useMemo } from "react";
import { Contract } from "ethers";
import { IWeb3Context, useWeb3Context } from "@/context/web3Context";
import * as constants from "@/libs/constants";

const useContract = () => {
  const { state } = useWeb3Context() as IWeb3Context;

  return useMemo(
    () =>
      state.signer &&
      new Contract(
        constants.contractAddress,
        constants.contractAbi,
        state.signer,
      ),
    [state.signer],
  );
};

export default useContract;
