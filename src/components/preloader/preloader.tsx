"use client";
import ContentMapping from "@/components/preloader/content-mapping";
import Footer from "@/components/preloader/footer";
import Header from "@/components/preloader/header";


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
