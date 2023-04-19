import { setPost, startLoading } from "./postSlices";

export const getPost = () => {
  return async (dispach, getState) => {
    dispach( startLoading() );
    
    const resp = await fetch("https://jsonplaceholder.typicode.com/photos");

    const data = await resp.json();

    dispach( setPost(data) );
  }
}