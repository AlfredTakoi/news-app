import NewsLists from './../pages/NewsLists';
import NewsDetails from './../pages/NewsDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsLists />} />
          <Route path="/news/:index" element={<NewsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
