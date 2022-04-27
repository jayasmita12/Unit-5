import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  const [book1, setBooks] = useState([]);
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  const { id } = useParams();
  useEffect(() => {
    console.log("after");
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        setBooks([res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {book1.map((el) => {
        return (
          <div key={el.id} className="bookContainer">
            <h2 className="title">{el.title}</h2>
            <img className="image" src={el.imageUrl} alt="#" />
            <div className="author">{el.author}</div>
            <div className="description">{el.description}</div>
            <div className="price">{el.price}</div>
            <div className="section">{el.section}</div>
            <div className="isbnNumber">{el.isbnNumber}</div>
            <ul className="reviews">
              {el.reviews.map((e) => {
                return (
                  <ul>
                    <li>{e}</li>
                  </ul>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};