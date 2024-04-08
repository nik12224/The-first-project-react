import React from "react";
import Title from "../../ui/title/title";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";
import "./style.css";

function StarsList({ stars }) {
  return (
    <section className="star-list">
      {stars?.length ? (
        <React.Fragment>
          <Title>Наши звёзды</Title>
          <ul className="star-list__list">
            {stars.map((star) => (
              <li className="star-list__item" key={star.id}>
                <StarCard {...star} />
              </li>
            ))}
          </ul>
          <Button minWidth={353}>Купить билет</Button>
        </React.Fragment>
      ) : null}
    </section>
  );
}

export default StarsList;
