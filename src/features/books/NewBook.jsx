import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSnackbar } from 'notistack';
import ROUTES from '../../routes';
import { useNavigate } from 'react-router-dom';
import { Button } from '@heroui/react';
import useBooks from '../../hooks/useBooks';

export default function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setIsbn] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [availability, setAvailability] = useState(true);

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const { loading, error, addBook } = useBooks();

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setGenre('');
    setIsbn('');
    setDescription('');
    setImage('');
    setPublicationYear('');
    setAvailability(true);
  }

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: "error",
        persist: false,
      });
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      genre,
      isbn,
      description,
      image,
      publicationYear: parseInt(publicationYear, 10),
      availability,
    };
    await addBook(newBook);
    resetForm();
    navigate(ROUTES.HOME)
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center w-full py-3 px-2">
        <div className="px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20 w-3/4">
          <h2 className="text-2xl font-bold mb-8 text-center">Alta de libro</h2>
          <form onSubmit={handleSubmit} className="space-y-6 pt-8">
            <div className='flex items-center justify-center gap-3 w-full'>
              <div className='w-1/2'>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  required
                />
              </div>
              <div className='w-1/2'>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                  Autor
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  required
                />
              </div>
            </div>

            <div className='flex items-center justify-center gap-3 w-full'>
              <div className='w-1/2'>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                  Género
                </label>
                <input
                  type="text"
                  id="genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  required
                />
              </div>
              <div className='w-1/2'>
                <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
                  ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                required
              />
            </div>

            <div className='flex items-center justify-center gap-3 w-full'>
              <div className='w-1/2'>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  URL de la imagen
                </label>
                <input
                  type="url"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  required
                />
              </div>
              <div className='w-1/2'>
                <label htmlFor="publicationYear" className="block text-sm font-medium text-gray-700">
                  Año de publicación
                </label>
                <input
                  type="number"
                  id="publicationYear"
                  value={publicationYear}
                  onChange={(e) => setPublicationYear(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  required
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="availability"
                  name="availability"
                  type="checkbox"
                  checked={availability}
                  onChange={(e) => setAvailability(e.target.checked)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="availability" className="font-medium text-gray-700">
                  Disponible
                </label>
              </div>
            </div>
            <div className='flex md:flex-row flex-col gap-4 justify-center'>
              <button
                type="button"
                className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => navigate(ROUTES.HOME)}
              >
                Volver
              </button>
              <Button
                type="submit"
                className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                isLoading={loading}
              >
                Agregar Libro
              </Button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}