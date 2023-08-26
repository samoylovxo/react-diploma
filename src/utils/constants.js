const API_BASE_URL = "https://students.netoservices.ru/fe-diplom/";
const PUBLIC_URL = process.env.PUBLIC_URL;

const REQUIRED = {
  required: "Поле обязательно для заполнения",
};

const SET_VALUE_OPTIONS = {
  shouldDirty: true,
  shouldValidate: true,
};

const PATH = ["Москва", "Санкт-Петербург"];

export { API_BASE_URL, PUBLIC_URL, REQUIRED, SET_VALUE_OPTIONS, PATH };
