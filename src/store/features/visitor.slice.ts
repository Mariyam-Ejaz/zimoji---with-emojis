import { getUserLocation, getVisitor } from "@/lib/helpers";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVisitor = createAsyncThunk("get/visitor", async () => {
  try {
    const location = await getUserLocation();
    const visitor = location ? await getVisitor(location.latitude, location.longitude): "";
    localStorage.setItem("visitor_data", JSON.stringify(visitor.visitor_data));
    return visitor.visitor_data;
  } catch (e) {
    if (e == "User denied Geolocation") {
      const visitor = await getVisitor();
      localStorage.setItem(
        "visitor_data",
        JSON.stringify(visitor.visitor_data)
      );
      return visitor.visitor_data;
    }

    // if (parseInt(e.response.data.visitor_data) === 451) {
    //   // console.log(e.response.data.visitor_data);
    //   const res = {
    //     data: e.response.data.visitor_data,
    //     error: "Visitor not allowed",
    //   };
    //   throw Error(JSON.stringify(res));
    // }
  }
});

interface State {
  status: string;
  data: any;
  isAllowed: boolean;
}

const initialState: State = {
  status: "idle", //idle, success, error, loading
  data: null,
  isAllowed: true,
};

export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    loadVisitor: (state) => {
      state.status = "success";
      state.data = JSON.parse(localStorage.getItem("visitor_data")?? "");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVisitor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVisitor.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchVisitor.rejected, (state, action) => {
        state.status = "error";
        try {
          console.log("action.error", action.error);
          const message = JSON.parse(action.error.name ?? "");
          state.data = message.data;
          if (message.error === "Visitor not allowed") {
            state.isAllowed = false;
          }
        } catch (err) {
          console.error(err);
        }
      });
  },
});

export default visitorSlice.reducer;
export const { loadVisitor } = visitorSlice.actions;
