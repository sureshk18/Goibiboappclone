import * as React from 'react';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';




export default function BasicDateRangePicker({ date, setDate }) {
    const [value, setValue] = React.useState([dayjs(date), dayjs(date)]);
    console.log(value[0] && value[0].$d, value[1] && value[1].$d);


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          
          'DateRangePicker',
        ]}
      >
       
        <DemoItem
          label={''}
          component="DateRangePicker"
        >
          <DateRangePicker
             className="date-picker-hotel"
             localeText={{ start: "Check-in", end: "Check-out" }}
             value={value}
             onChange={(newValue) => {
               setValue(newValue);
               setDate(newValue);}}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
