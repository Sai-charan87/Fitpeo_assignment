import { calendarData } from "../data/calendarData";
import styles from "../styles/CalendarView.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth, faDumbbell } from "@fortawesome/free-solid-svg-icons";

function CalendarView() {
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className={styles.calendarView}>
      <div className={styles.calendarHeaderRow}>
        <h3 className={styles.calendarTitle}>October 2021</h3>
        <button className={styles.arrowBtn}>&lt;</button>
        <button className={styles.arrowBtn}>&gt;</button>
      </div>

      <div className={styles.calendarWeekdays}>
        {dayNames.map((day, i) => (
          <div key={i} className={styles.dayHeader}>
            <div className={styles.dayName}>{day}</div>
            <div className={styles.dayDate}>{calendarData.days[i]}</div>
          </div>
        ))}
      </div>

      <div className={styles.calendarTimeSlots}>
        {calendarData.grid[0].map((_, timeIndex) => (
          <React.Fragment key={timeIndex}>
            {calendarData.grid.map((daySlots, dayIndex) => {
              const slot = daySlots[timeIndex];
              return (
                <div
                  key={dayIndex}
                  className={
                    slot.active ? styles.activeSlot : styles.inactiveSlot
                  }
                >
                  {slot.time}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <br></br>
      <div className={styles.appointmentCards}>
        <div className={styles.coloredCardDentist}>
          <div className={styles.cardHeader}>
            <span>Dentist</span>
            <span className={styles.icon}>🦷</span>
          </div>
          <p>09:00–11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>

        <div className={styles.coloredCardPhysio}>
          <div className={styles.cardHeader}>
            <span>Physiotherapy Appointment</span>
            <span className={styles.icon}>💪</span>
          </div>
          <p>11:00–12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
