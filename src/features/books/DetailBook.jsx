import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deselectBook } from '../../store/bookSlice';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes';
import Chip from '../../components/Chip';

export default function DetailBook() {
  const selectedBook = useSelector((state) => state.book.selectedBook);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedBook) navigate(ROUTES.HOME)
  }, [])

  const onBack = () => {
    dispatch(deselectBook());
    navigate(ROUTES.HOME)
  }

  if (!selectedBook) navigate(ROUTES.HOME)
  return (
    <div className="py-6 flex flex-col sm:py-12 w-full">
      <div className="flex items-center justify-center w-full py-3 px-2">
        <div className="px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-14 w-3/4">
          <h2 className="text-2xl font-bold mb-8 text-center">{selectedBook?.title}</h2>
          <div className='flex flex-col md:flex-row-reverse'>


            <div className='md:w-1/2 w-full mb-6 md:mb-0 flex justify-center'>
              <img src={selectedBook.image} alt="book-image" className="object-cover rounded-md"></img>
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex items-center justify-center gap-3 w-full'>
                <div className='w-1/2'>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Género
                  </label>
                  <p className='font-bold'>{selectedBook?.genre}</p>
                </div>
                <div className='w-1/2'>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                    Autor
                  </label>
                  <p className='font-bold'>{selectedBook?.author}</p>
                </div>
              </div>

              <div className='flex items-center justify-center gap-3 w-full'>
                <div className='w-1/2'>
                  <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                    Año de publicación
                  </label>
                  <p className='font-bold'>{selectedBook?.publicationYear}</p>
                </div>
                <div className='w-1/2'>
                  <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
                    ISBN
                  </label>
                  <p className='font-bold'>{selectedBook?.isbn}</p>
                </div>
              </div>

              <div className='md:w-1/2 w-full'>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Descripción
                </label>
                <p className='font-bold'>{selectedBook?.description}</p>
              </div>
              <div className="flex items-start my-5">
                <div className="flex items-center h-5">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mr-3">
                    Estado:
                  </label>
                  <Chip color={`${selectedBook.availability ? 'success' : 'error'}`}> {selectedBook.availability ? 'Disponible' : 'Agotado'}</Chip>
                </div>
              </div>
            </div>


          </div>
          <div className='flex justify-center'>
            <button
              type="button"
              className="py-2 px-4 my-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onBack}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}