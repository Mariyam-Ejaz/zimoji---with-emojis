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

  // useEffect(() => {
  //   // Check if the page has already been loaded (using sessionStorage to avoid multiple reloads)
  //   if (!sessionStorage.getItem("pageLoaded")) {
  //     sessionStorage.setItem("pageLoaded", "true");
  //     window.location.reload();
  //   }
  // }, []);

  return (
    <>
    <Provider store={store}>
    <ThemeProvider>
      <GetVisitor/>
      <RandomEmojis/>
      {/* <EmojiDiagonal/> */}
      <Preloader/>
      </ThemeProvider>
    </Provider>
    </>
  );
}
