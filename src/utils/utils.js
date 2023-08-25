const getTimeFromTimestamp = (timestamp) =>
  new Date(timestamp).toLocaleTimeString("ru-RU", {
    hour: "numeric",
    minute: "numeric",
  });

const getMinNumber = (arr) => Math.min(...arr);

const createQueryString = (queryObject = {}) => {
  const queryString = Object.keys(queryObject)
    .filter(
      (key) =>
        queryObject[key] &&
        !(Array.isArray(queryObject[key]) && !queryObject[key].length)
    )
    .map((key) =>
      Array.isArray(queryObject[key])
        ? queryObject[key]
            .map(
              (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
            )
            .join("&")
        : `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`
    )
    .join("&");
  return queryString ? `?${queryString}` : "";
};

const timeZeroFormat = (value) => (value < 10 ? `0${value}` : String(value));

const transformDateToDotted = (date) => {
  if (!date) return "";

  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return `${timeZeroFormat(day)}.${timeZeroFormat(month)}.${year}`;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max);

export {
  getTimeFromTimestamp,
  getMinNumber,
  createQueryString,
  transformDateToDotted,
  getRandomNumber
};
