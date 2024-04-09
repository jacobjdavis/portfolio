import { format, intervalToDuration, isValid, parseISO } from 'date-fns';

const getParsedDate = (date: string) => parseISO(date);
const getIsValidDate = (date: Date) => isValid(date);

export const formatDate = (date: string) => {
  const parsedDate = getParsedDate(date);

  return getIsValidDate(parsedDate) ? format(parsedDate, 'MMM dd, yyyy') : date;
};

export const getDuration = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const parsedStartDate = getParsedDate(startDate);
  const parsedEndDate = getParsedDate(endDate);

  const { years = 0, months = 0 } = intervalToDuration({
    start: getIsValidDate(parsedStartDate) ? parsedStartDate : new Date(),
    end: getIsValidDate(parsedEndDate) ? parsedEndDate : new Date(),
  });

  const preparedYears = years
    ? `${years} ${years > 1 ? 'years ' : 'year '}`
    : '';
  const preparedMonths = months
    ? `${months} ${months > 1 ? 'months' : 'month'}`
    : '';

  return `${preparedYears}${preparedMonths}`;
};
