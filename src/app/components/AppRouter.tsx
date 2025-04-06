import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/Home";
import { FC } from "react";

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
