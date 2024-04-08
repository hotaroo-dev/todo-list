"use client";

import { useState } from "react";
import { IWeb3Context, useWeb3Context } from "@/context/web3Context";
import { AnimatePresence } from "framer-motion";
import BaseButton from "./common/baseButton";
import AnimatedItem from "./common/animatedItem";
import { IconWallet } from "./icons/IconWallet";

const ConnectWalletButton: React.FC = () => {
  const { connectWallet, disconnect, state } = useWeb3Context() as IWeb3Context;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      {state.isAuthenticated ? (
        <div className="relative">
          <BaseButton
            className="h-11 bg-zinc-800 px-4 py-0.5 text-white active:translate-y-0"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span className="w-[9ch] overflow-hidden text-ellipsis">
              {state.address}
            </span>
          </BaseButton>
          <AnimatePresence>
            {showMenu && (
              <AnimatedItem animation="opacity" transitionType="tween">
                <div className="absolute -inset-x-4 top-14 z-20 mx-auto rounded-md bg-white p-5 shadow flex-center">
                  <BaseButton
                    onClick={() => {
                      disconnect();
                      setShowMenu(false);
                    }}
                    className="h-11 bg-zinc-100 px-4 py-0.5 text-red-500 active:translate-y-0"
                  >
                    Disconnect
                  </BaseButton>
                </div>
              </AnimatedItem>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <BaseButton
          className="h-11 gap-2 bg-zinc-800 px-4 text-white active:translate-y-0"
          onClick={connectWallet}
        >
          <IconWallet className="text-xl" /> Connect Wallet
        </BaseButton>
      )}
    </div>
  );
};

export default ConnectWalletButton;
