import axios from "axios";

export const userFetch = axios.create({
  baseURL: "http://localhost:3000/api/v1/user",
});

export const categoryFetch = axios.create({
  baseURL : "http://localhost:3000/api/v1/categories"
}) ;

export const productFetch = axios.create({
  baseURL : "http://localhost:3000/api/v1/products/"
})