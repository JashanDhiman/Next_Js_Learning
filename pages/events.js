import React, { useState } from "react";
import Router, { useRouter } from "next/router";

const events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvent = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push(`events?category=sports`, undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvent}>Sports Event</button>
      <h1>List of events</h1>
      {events.map(({ id, title, date, category, description }) => {
        return (
          <div key={id}>
            <h2>
              {id} {title} {date} | {category}
            </h2>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default events;

export async function getServerSideProps({ query }) {
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
