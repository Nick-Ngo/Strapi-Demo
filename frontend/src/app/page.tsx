import Blog from '@/common/componants/blogs/Blog'
import Categories from '@/common/componants/categories/Categories'
import axios from 'axios';

async function fetchAuth() {
  const axiosResponse = await axios.post(`${process.env.STRAPI_URL}/auth/local`, {
      identifier: 'test@test.com',
      password: 'Password',
    });

    console.log('User profile (Axios)', axiosResponse.data.user);
    console.log('User token (Axios)', axiosResponse.data.jwt);

    return axiosResponse;
}

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/api/categories?populate=*`, options);
    const response = await res.json();
    return response;
  }
  catch (err) {
    console.log(err);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/api/blogs?populate=*`, options);
    const response = await res.json();
    return response;
  }
  catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const auth = await fetchAuth();
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <h1>
      <Categories categories={categories} />
      <Blog blogs={blogs} />
    </h1>
  )
}
