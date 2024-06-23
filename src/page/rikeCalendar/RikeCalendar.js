import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const RikeCalendar = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
    {
      start: moment().add(1, "days").toDate(),
      end: moment().add(2, "days").toDate(),
      title: "New title",
    },
  ]);
  const localizer = momentLocalizer(moment);
  const DnDCalendar = withDragAndDrop(Calendar);

  const onEventResize = (data) => {
    const { start, end } = data;

    setEvents((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  };

  const onEventDrop = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    </>
  );
};

export default RikeCalendar;
