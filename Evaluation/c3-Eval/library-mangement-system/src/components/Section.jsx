import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import { SortAndFilterButtons} from "./SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const [book, setBook] = useState([]);
  const { section } = useParams();
  const handleSort = (V) => {
    if (V == 1) {
      let temp = book.sort((a, b) => {
        return a.title - b.title;
      });
      setBook(temp);
    }
    if (V == 2) {
      let temp = book.sort((a, b) => {
        return b.title - a.title;
      });
      setBook(temp);
    }
    if (V == 3) {
      setBook(
        book.sort((a, b) => {
          return a.price - b.price;
        })
      );
    }
    if (V == 4) {
      let temp = book.sort((a, b) => {
        return b.price - a.price;
      });
      setBook(temp);
      console.log(temp);
    }
  };
  useEffect(() => {
    axios.get(`http://localhost:8080/books`).then((res) => {
      setBook(res.data);
    });
  }, []);

  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin: auto;
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          section
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {book.map((el) => {
          if (el.section == section) {
            return (
              <BookCard
                id={el.id}
                imageUrl={el.imageUrl}
                title={el.title}
                price={el.price}
                key={el.id}
              />
            );
          }
        })}
      </Main>
    </>
  );
};