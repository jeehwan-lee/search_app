import React from "react";
import NavigationBar from "./components/NavigationBar";
import SearchInput from "./components/SearchInput";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="flex flex-wrap justify-center relative">
        <SearchInput />
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/all" />} />
        </Routes>
        {/* 검색 input */}
        {/* navation */}
      </div>
      {/* 검색결과 */}
    </div>
  );
}

export default App;
