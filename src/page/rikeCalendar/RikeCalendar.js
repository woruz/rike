import React, { useContext, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ProjectContext } from "../../context/ProjectContext";

const RikeCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
    {
      id: 2,
      start: moment().add(1, "days").toDate(),
      end: moment().add(2, "days").toDate(),
      title: "New title",
    },
  ]);

  const { allProjects } = useContext(ProjectContext);
  const localizer = momentLocalizer(moment);
  const DnDCalendar = withDragAndDrop(Calendar);

  console.log({allProjects})

  const onEventResize = (data) => {
    const { start, end, event: {id} } = data;

    setEvents((state) => {
      let new_event = state.filter(val => val.id === id)
      let rest_state = state.filter(val => val.id !== id)
      new_event[0].start = start
      new_event[0].end = end
      return [...rest_state,...new_event]
    });
  };

  const onEventDrop = (data) => {
    const { start, end, event: {id} } = data;

    setEvents((state) => {
      let new_event = state.filter(val => val.id === id)
      let rest_state = state.filter(val => val.id !== id)
      new_event[0].start = start
      new_event[0].end = end
      return [...rest_state,...new_event]
    });
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
