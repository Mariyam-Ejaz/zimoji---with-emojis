"use client";
import ContentMapping from "@/components/preloader/content-mapping";
import Footer from "@/components/preloader/footer";
import Header from "@/components/preloader/header";
import usePreventContextMenu from "@/hooks/usePreventContextMenu";
import { RootState, store } from "@/store";
import { Provider, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { HOLDING_TABS } from "./lib";
import RandomEmojis from "../emojis/random-emojis";
import EmojiSlightMovement from "../emojis/emoji-slight-movement";
import EmojiDiagonal from "../emojis/emoji-diagonal";

export default function Preloader() {

  return (
<>
      <div className="flex flex-col justify-between min-h-dvh bg-black text-white ">
      
        <Header />
        {/* <RandomEmojis/> */}
        {/* <EmojiSlightMovement/> */}
        
        <ContentMapping  />
        <Footer />
        
      </div>
      </>
 
  );
}
