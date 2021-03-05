import React, { useState } from 'react';
import Calendar from 'react-calendar';


// import 'react-calendar/dist/Calendar.css';

function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState<Date|Date[]|any>(null);

  return (
    <div className="react-calendar">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />
    </div>
  );
}

export default CalendarWidget;