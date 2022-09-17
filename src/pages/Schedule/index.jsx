import { format } from "date-fns";
import React, {useEffect} from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "react-day-picker/dist/style.css";

import { NavBar } from "../../components/navBar";

import { Container, Calendar, DatesContainer } from "./styles";
import { api } from "../../services";
import { FloatingWhatsAppButton } from "../../common/components";

function Schedule() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [timesSelected, setTimesSelected] = useState([
    {
      time: "6:00",
      isSelected: false,
    },
    {
      time: "7:00",
      isSelected: false,
    },
    {
      time: "8:00",
      isSelected: false,
    },
    {
      time: "9:00",
      isSelected: false,
    },
    {
      time: "10:00",
      isSelected: false,
    },
    {
      time: "11:00",
      isSelected: false,
    },
    {
      time: "12:00",
      isSelected: false,
    },
    {
      time: "13:00",
      isSelected: false,
    },
    {
      time: "14:00",
      isSelected: false,
    },
    {
      time: "15:00",
      isSelected: false,
    },
    {
      time: "16:00",
      isSelected: false,
    },
    {
      time: "17:00",
      isSelected: false,
    },
    {
      time: "18:00",
      isSelected: false,
    },
    {
      time: "19:00",
      isSelected: false,
    },
    {
      time: "20:00",
      isSelected: false,
    },
    {
      time: "21:00",
      isSelected: false,
    },
    {
      time: "22:00",
      isSelected: false,
    },
    {
      time: "23:00",
      isSelected: false,
    },
    {
      time: "00:00",
      isSelected: false,
    },
  ]);

  const [items, setItems] = useState([])
  const handleToggleCalendar = () => setShowCalendar((state) => !state);

  const handleMonthChange = () => {};
  const handleDateChange = (data) => {
    setSelectedDay(data);
  };

  useEffect(async ()=> {
    const user = JSON.parse(localStorage.getItem('@auth/user'));
    const  { data } = await api.get('/schedules/doctor/' + user.id);
    setItems(data);
  })
  return (
    <>
      
      <Container>
        {showCalendar ? (
          <form>
            <Calendar>
              <DayPicker
                fromMonth={new Date()}
                onMonthChange={handleMonthChange}
                onDayClick={handleDateChange}
                fixedWeeks
                modifiers={{
                  available: {
                    daysOfWeek: [1, 2, 3, 4, 5],
                  },
                  disabled: [{ dayOfWeek: [0, 6] }, new Date(2022, 6, 12)],
                }}
              />
            </Calendar>

            <DatesContainer>
              <Swiper spaceBetween={0} slidesPerView={6}>
                {timesSelected.map(({ time }, index) => (
                  <SwiperSlide>
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        console.log("opg");
                      }}
                    >
                      {time}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </DatesContainer>

            <button type="submit">Confirmar</button>
          </form>
        ) : (
          <>
            <div>
              <h1>Minhas consultas na agenda</h1>{" "}
              <button type="button" onClick={handleToggleCalendar}>
                Editar agenda
              </button>
            </div>

            <section>
              {items.length > 0 && items.map(item => (
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMzgu-qlH_NEf26RmFCSuc5vQIbsz0cVCpA&usqp=CAU"
                    alt="Pacient"
                  />

                  <div>
                  <span>
                    <h3>{item.name}</h3>

                    <h4>{new Date(item.date).toLocaleDateString()}</h4>
                    <h5>{item.hour ? `${item.hour}H`: '-'}</h5>
                  </span>

                    <p>
                      {item.description}
                    </p>
                  </div>

                  <button type="button">Ver</button>
                </div>
              ))}
            </section>
          </>
        )}
      </Container>
      
    </>
  );
}

export default Schedule;
