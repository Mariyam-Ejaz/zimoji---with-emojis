import "/node_modules/flag-icons/css/flag-icons.min.css";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import ScanIcon from "../assets/scan-icon";

/* eslint-disable @next/next/no-img-element */
function Header() {
  const { data } = useSelector((state: RootState) => state.visitor);

  return (
    <header className="flex justify-end gap-x-8 3xl:gap-x-14 container__padding container__padding__y z-10">


      {data?.countryCode ? (
        <>
        <ScanIcon
      />
      <img
          className="h-[27px] lg:h-[35px] 3xl:h-[50px] w-auto"
          src={data.country.app_icon}
          alt="country"
        />
                </>
      ) : (
        <div className="h-[27px] lg:h-[35px] 3xl:h-[50px]" />
      )}
    </header>
  );
}
export default Header;
