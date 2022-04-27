import { BookCard } from "./BookCard";
import { SortAndFilterButtons } from "./SortAndFilterButtons";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { BookDetailsPage } from "./BookDetailsPage";
import { useParams } from "react-router-dom";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [book, setBook] = useState([]);
  // console.log(book);
  const handleSort = (V) => {
    if (V == 1) {
      book.sort(function (a, b) {
        console.log(a.title, "AscendingTitle");
        return a.title - b.title;
      });
      console.log(book, "AscendingTitle");
      setBook(book);
    }
    if (V == 2) {
      book.sort(function (a, b) {
        return b.title - a.title;
      });
      setBook(book);
    }
    if (V == 3) {
      setBook(
        book.sort(function (a, b) {
          return a.price - b.price;
        })
      );
    }
    if (V == 4) {
      book.sort(function (a, b) {
        return b.price - a.price;
      });
      setBook(book);
    }
  };
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBook([...res.data]);
    });
  }, []);

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-gap: 30px;
    padding-top: 180px;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>

      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="mainContainer">
        {book.map((el) => (
          <BookCard
            id={el.id}
            imageUrl={el.imageUrl}
            title={el.title}
            price={el.price}
            key={el.id}
          />
        ))}
      </Main>
    </div>
  );
};