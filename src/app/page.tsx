"use client";
import usePreventContextMenu from "@/hooks/usePreventContextMenu";
import {store } from "@/store";
import { Provider} from "react-redux";
import Preloader from "@/components/preloader/preloader";
import GetVisitor from "@/components/globals/GetVisitor";

export default function Home() {
  // Use the custom hook to prevent the context menu
  usePreventContextMenu();

  return (
    <Provider store={store}>
      <GetVisitor/>
      <Preloader/>
    </Provider>
  );
}
