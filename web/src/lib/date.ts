import {format} from 'date-fns';
export const formatToMMDDYYYY = (date: Date) => {
    return format(date, 'MM-dd-yyyy');
  };