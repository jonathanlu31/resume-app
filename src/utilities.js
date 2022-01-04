export const dateSort = (first, sec) => {
  let firstDate = first.end;
  let secDate = sec.end;

  if (firstDate === secDate) {
    firstDate = first.start;
    secDate = sec.start;
  }
  if (firstDate !== 'Present' && secDate !== 'Present') {
    firstDate = firstDate.slice(0, 4) + firstDate.slice(5);
    secDate = secDate.slice(0, 4) + secDate.slice(5);
    return parseInt(secDate) - parseInt(firstDate);
  } else {
    if (firstDate === 'Present') {
      return -1;
    }
    return 1;
  }
};
