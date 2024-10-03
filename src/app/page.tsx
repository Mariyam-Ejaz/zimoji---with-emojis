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
import { encode } from "modern-gif";


export default function Home() {
  // Use the custom hook to prevent the context menu
  usePreventContextMenu();

  async function generateGif() {
    const workerUrl = '/modernGifWorker.js'; // Point to the worker in the public folder
  
    const output = await encode({
      workerUrl, // Use the custom worker URL
      width: 200,
      height: 200,
      frames: [
        { data: '/example1.png', delay: 100 }, // Your images
        { data: '/example2.png', delay: 100 }
      ]
    });
  
    const blob = new Blob([output], { type: 'image/gif' });
    window.open(URL.createObjectURL(blob));
  }


  return (
    <>
    <ThemeProvider>
    <Provider store={store}>
 
      <GetVisitor/>
      
      {/* <EmojiDiagonal/> */}
      <Preloader/>
     
    </Provider>
    </ThemeProvider>
    </>
  );
}
