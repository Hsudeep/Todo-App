import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../Components/RequireAuth";
import SIdebar from "../Components/SIdebar";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Stack direction={"row"}>
              <SIdebar />
              <Homepage />
            </Stack>
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
