"use client";
import usePreventContextMenu from "@/hooks/usePreventContextMenu";
import {store } from "@/store";
import { Provider} from "react-redux";
import Preloader from "@/components/preloader/preloader";

export default function Home() {
  // Use the custom hook to prevent the context menu
  usePreventContextMenu();

  return (
    <Provider store={store}>
      <Preloader/>
    </Provider>
  );
}
