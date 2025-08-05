import { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import Swal from "sweetalert2";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid/index.js";
import timeGridPlugin from "@fullcalendar/timegrid/index.js";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction/index.js";
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import { EventTypes } from '../../common/Commomarreydata';
import SimpleBar from 'simplebar-react';


const curDate = new Date();
const curYear = curDate.getFullYear();
const curMonth = curDate.getMonth() + 1;

const sptCalendarEvents = {
  id: 1,
  events: [
    {
      id: '1',
      start: new Date(curYear, curMonth - 1, 2),
      end: new Date(curYear, curMonth - 1, 3),
      title: 'Spruko Meetup',
      className: 'bg-secondary border-0',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '2',
      start: new Date(curYear, curMonth - 1, 17),
      end: new Date(curYear, curMonth - 1, 17),
      title: 'Design Review',
      className: 'bg-info border-0',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '3',
      start: new Date(curYear, curMonth - 1, 13),
      end: new Date(curYear, curMonth - 1, 13),
      title: 'Lifestyle Conference',
      className: 'bg-primary border-0',
      textColor: '#fff',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '4',
      start: new Date(curYear, curMonth - 1, 21),
      end: new Date(curYear, curMonth - 1, 21),
      title: 'Team Weekly Brownbag',
      className: 'bg-warning border-0',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '5',
      start: new Date(curYear, curMonth - 1, 4, 10, 0, 0),
      end: new Date(curYear, curMonth - 1, 6, 15, 0, 0),
      title: 'Music Festival',
      className: 'bg-success border-0',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '6',
      start: new Date(curYear, curMonth - 1, 23, 13, 0, 0),
      end: new Date(curYear, curMonth - 1, 25, 18, 30, 0),
      title: "Attend Lea's Wedding",
      className: 'bg-success border-0',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
  ],
};

const sptBirthdayEvents = {
  id: 2,
  events: [
    {
      id: '7',
      start: new Date(curYear, curMonth - 1, 4),
      end: new Date(curYear, curMonth - 1, 4),
      title: "Harcates Birthday",
      className: 'bg-info',
      textColor: '#fff',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '8',
      start: new Date(curYear, curMonth - 1, 28),
      end: new Date(curYear, curMonth - 1, 28),
      title: "Bunnysin's Birthday",
      className: 'bg-info',
      textColor: '#fff',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '9',
      start: new Date(curYear, curMonth - 1, 31),
      end: new Date(curYear, curMonth - 1, 31),
      title: "Lee shin's Birthday",
      className: 'bg-info',
      textColor: '#fff',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    {
      id: '10',
      start: new Date(curYear, 11 - 1, 11),
      end: new Date(curYear, 11 - 1, 11),
      title: "Shinchan's Birthday",
      className: 'bg-info',
      textColor: '#fff',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
  ],
};

const sptHolidayEvents = {
  id: 3,
  events: [
    {
      id: '11',
      start: new Date(curYear, curMonth - 1, 5),
      end: new Date(curYear, curMonth - 1, 8),
      className: 'bg-danger  border-0',
      textColor: '#fff',
      title: 'Festival Day',
    },
    {
      id: '12',
      start: new Date(curYear, curMonth - 1, 18),
      end: new Date(curYear, curMonth - 1, 19),
      className: 'bg-danger  border-0',
      textColor: '#fff',
      title: 'Memorial Day',
    },
    {
      id: '13',
      start: new Date(curYear, curMonth - 1, 25),
      end: new Date(curYear, curMonth - 1, 26),
      className: 'bg-danger  border-0',
      textColor: '#fff',
      title: 'Diwali',
    },
  ],
};

const sptOtherEvents = {
  id: 4,
  
  events: [
    {
      id: '14',
      start: new Date(curYear, curMonth - 1, 7),
      end: new Date(curYear, curMonth - 1, 9),
      className: 'bg-info border-0',
      textColor: '#fff',
      title: 'My Rest Day',
    },
    {
      id: '15',
      start: new Date(curYear, curMonth - 1, 29),
      end: new Date(curYear, curMonth - 1, 31),
      className: 'bg-info  border-0',
      textColor: '#fff',
      title: 'My Rest Day',
    },
  ],
};


const Fullcalendar = () => {

  const [events, setEvents] = useState([
    ...sptCalendarEvents.events,
    ...sptBirthdayEvents.events,
    ...sptHolidayEvents.events,
    ...sptOtherEvents.events,
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const calendarRef = useRef(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    // if (window.confirm(`Are you sure you want to delete the event '${info.event.title}'`)) {
    //   info.event.remove();
    // }
    Swal.fire({
      title: `Are you sure you want to delete the event? '${info.event.title}'`,
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: 'Cancel',
  }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          info.event.remove();
          Swal.fire('Deleted!', '', 'success');
      } else if (result.isDenied) {
          Swal.fire('Operation canceled', '', 'info');
      }
  });
  };

  useEffect(() => {
    const draggableEl = document.getElementById('external-events');
    const calendarApi = calendarRef.current?.getApi();

    if (draggableEl && calendarApi) {
      new Draggable(draggableEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
          const title = eventEl.querySelector('.fc-event-main')?.textContent;
          const id = eventEl.getAttribute('data');
          const classValue = eventEl.getAttribute('class');
          return {
            title: title || '',
            id: id,
            className: classValue,
          };
        },
      });
    }
  }, []);


  let eventGuid = 0;
  function createEventId() {
    return (eventGuid++);
  }

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };


  return (
    <Fragment>
      <Pageheader homepage='Full Calendar' activepage='Apps' page='Full Calendar' />

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={3}>
          <Card className="custom-card">
            <Card.Header className='d-grid'>
              <button className="btn btn-primary-light btn-wave"><i className="ri-add-line align-middle me-1 fw-semibold d-inline-block"></i>Create New Event</button>
            </Card.Header>
            <Card.Body className="p-0">
              <div id="external-events" className="border-bottom p-3">
                {EventTypes.map((event, index) => (
                  <div
                    key={index}
                    className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} border border-${(event.bg).split('-')[1]}`}
                    data-classname={event.bg}
                  >
                    <div className={`fc-event-main`}>{event.title}</div>
                  </div>
                ))}
              </div>
              <div className="border-bottom">
                <div className="d-flex align-items-center mb-4 p-3 pb-0 justify-content-between">
                  <h6 className="fw-semibold">
                    Activity :
                  </h6>
                  <button className="btn btn-primary-light btn-sm btn-wave">View All</button>
                </div>
                <SimpleBar>
                <div className="list-unstyled mb-0 fullcalendar-events-activity px-3" id="full-calendar-activity">
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Monday, Jan 1,2023
                      </p>
                      <span className="badge bg-light text-default mb-1">12:00PM - 1:00PM</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Meeting with a client about new project requirement.
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Thursday, Dec 29,2022
                      </p>
                      <span className="badge bg-success mb-1">Completed</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Birthday party of niha suka
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Wednesday, Jan 3,2023
                      </p>
                      <span className="badge bg-warning-transparent mb-1">Reminder</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      WOrk taget for new project is completing
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Friday, Jan 20,2023
                      </p>
                      <span className="badge bg-light text-default mb-1">06:00PM - 09:00PM</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Watch new movie with family
                    </p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-semibold">
                        Saturday, Jan 07,2023
                      </p>
                      <span className="badge bg-danger-transparent mb-1">Due Date</span>
                    </div>
                    <p className="mb-0 text-muted fs-12">
                      Last day to pay the electricity bill and water bill.need to check the bank details.
                    </p>
                  </li>
                </div>
                </SimpleBar>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Full Calendar</div>
            </Card.Header>
            <Card.Body>
              <FullCalendar ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                eventClick={handleEventClick}
                events={events}
                droppable={true}
                eventReceive={(info) => console.log('Event dropped onto calendar:', info)}
                select={handleDateSelect}
              />
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}
    </Fragment>
  )
}

export default Fullcalendar