import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { HOLDING_TABS } from "./lib";
import Welcome from "./welcome";
import Content from "./content";
import { AnimatePresence } from "framer-motion";
import EmojiDiagonal from "../emojis/emoji-diagonal";

function ContentMapping() {
  const { tab } = useSelector((state: RootState) => state.holding);

  return (
    <AnimatePresence mode="wait">
      {tab === HOLDING_TABS.welcome && <Welcome key={1} />}
      {tab === HOLDING_TABS.zimojilogo && <Content key={2} />}
      <EmojiDiagonal/>
    </AnimatePresence>
  );
}
export default ContentMapping;
