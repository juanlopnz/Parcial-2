import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './../store/slices/thunks';

export const TodoList = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  const [selectedPost, setSelectedPost] = useState(null);

  const handleClick = (index) => {
    setSelectedPost(post[index]);
  };

  return (
    <div className="grid grid-cols-2 justify-between w-full h-screen px-8 py-8 bg-gray-200">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-6">Todo List</h1>
        {post.length ? (
          <ul className="w-full flex flex-wrap justify-center gap-4">
            {post.map((item, index) => (
              <li
                onClick={() => handleClick(index)}
                key={index}
                className="w-64 h-64 rounded-lg"
              >
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-lg text-gray-500">
              No hay elementos por mostrar, espere...
            </p>
          </div>
        )}
      </div>
      <div className="">
        {selectedPost ? (
          <div className="w-full rounded-lg justify-center">
            <h1 className='text-center text-5xl'>Cuadro Selecionado</h1>
            <img
              src={selectedPost.url}
              alt=""
              className="w-80 h-80 object-cover object-center"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {selectedPost.title}
              </div>
              <p className="text-gray-700 text-base">
                {selectedPost.body}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-700 text-xl text-center">
            Esperando que selecciones una imagen...
          </p>
        )}
      </div>
    </div>
  );
};

