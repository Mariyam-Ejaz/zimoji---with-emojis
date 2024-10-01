import { AppDispatch } from "@/store";
import { fetchVisitor, loadVisitor } from "@/store/features/visitor.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GetVisitor = () => {
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const data = localStorage.getItem("visitor_data");
    if (!data) {
      dispatch(fetchVisitor());
    } else {
      dispatch(loadVisitor());
    }
  }, []);

  return null;
};
export default GetVisitor;
