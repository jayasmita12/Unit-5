import { Routes, Route } from "react-router";
import { Home } from "../Components/Home";
import { Section } from "../Components/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage";
import { NotFound } from "../Components/NotFound";
import { Navbar } from "../Components/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/section/:section" element={<Section />} />

        <Route path="/bookdetailspage/:id" element={<BookDetailsPage />} />

        <Route path="*" element={<NotFound />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};