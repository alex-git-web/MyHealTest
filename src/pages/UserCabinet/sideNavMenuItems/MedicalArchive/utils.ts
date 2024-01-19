export const CheckIsDateInRange = ({
  fromDate,
  toDate,
  date,
}: {
  fromDate: Date | null;
  toDate: Date | null;
  date: Date | string | null;
}): boolean => {
  if (typeof date === "string") {
    // From date
    let startDate: number | null = null;
    // To date
    let endDate: number | null = null;
    // Date
    let curDate: number = new Date(
      `${new Date(date).getFullYear()}-${
        new Date(date).getMonth() + 1
      }-${new Date(date).getDate()}`
    ).getTime();

    if (fromDate) {
      startDate = new Date(
        `${new Date(fromDate).getFullYear()}-${
          new Date(fromDate).getMonth() + 1
        }-${new Date(fromDate).getDate()}`
      ).getTime();
    }
    if (toDate) {
      endDate = new Date(
        `${new Date(toDate).getFullYear()}-${
          new Date(toDate).getMonth() + 1
        }-${new Date(toDate).getDate()}`
      ).getTime();
    }

    return startDate && endDate && curDate >= startDate && curDate <= endDate
      ? true
      : startDate && !endDate && curDate >= startDate
      ? true
      : endDate && !startDate && curDate <= endDate
      ? true
      : !startDate && !endDate
      ? true
      : false;
  }

  return false;
};
