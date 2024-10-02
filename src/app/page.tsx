"use client";
import usePreventContextMenu from "@/hooks/usePreventContextMenu";
import {store } from "@/store";
import { Provider} from "react-redux";
import Preloader from "@/components/preloader/preloader";
import GetVisitor from "@/components/globals/GetVisitor";
import EmojiDiagonal from "@/components/emojis/emoji-diagonal";
import { useEffect } from "react";
import RandomEmojis from "@/components/emojis/random-emojis";
import { ThemeProvider } from "@/components/theme/theme-context";


export default function Home() {
  // Use the custom hook to prevent the context menu
  usePreventContextMenu();


  return (
    <>
    <ThemeProvider>
    <Provider store={store}>
 
      <GetVisitor/>
      <RandomEmojis/>
      {/* <EmojiDiagonal/> */}
      <Preloader/>
     
    </Provider>
    </ThemeProvider>
    </>
  );
}
