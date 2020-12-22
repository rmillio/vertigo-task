import React, { useState, useEffect } from "react";
import "./card_container.css";
import Card from "../card/card";
import Modal from "../modal/modal";
import { useSelector, useDispatch } from "react-redux";
import { requestDataFromApi } from "../../actions/data";
import loading from '../../images/loading.gif';
export default function CardContainer() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const data = useSelector((state) => {
    if (state != null) {
      return state.data;
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(requestDataFromApi());
    };
    fetchData();
  }, [dispatch]);

  if (data !== undefined) {
    const cards = [];
    data.forEach((card) => {
      cards.push(
        <Card
          id={card.id}
          key={card.id}
          setShowModal={setShowModal}
          setModalContent={setModalContent}
        />
      );
    });
    return (
      <div>
        <div className="card-container">{cards}</div>
        {showModal && (
          <Modal setShowModal={setShowModal} modalContent={modalContent} />
        )}
      </div>
    );
  } else return(
    <img
      src={loading}
      alt=""
    />
  );
}
