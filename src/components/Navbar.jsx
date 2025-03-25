import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from "../assets/login.svg"
import LogoutIcon from "../assets/logout.svg"
import { FaBars, FaTimes } from 'react-icons/fa';
import ROUTES from '../routes';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, doLogout } = useAuth();

  const handleLogout = () => {
    doLogout();
  };

  return (
    <nav className="p-4 pt-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={ROUTES.HOME} className="flex text-white text-2xl font-bold mt-4">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 inline-block mr-2" />
          <p className='text-black'>Librería</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 font-dmserif font-bold text-black m-5">
          <Link to={ROUTES.HOME} className="hover:text-white hover:bg-blue-400 hover:rounded-lg p-2">Libros</Link>
          <Link to={ROUTES.AUTHORS} className="hover:text-white hover:bg-blue-400  hover:rounded-lg p-2">Autores</Link>
          {isAuthenticated ? (
            <>
              <Link to={ROUTES.NEW_BOOK} className="hover:text-white hover:bg-blue-400  hover:rounded-lg p-2">Alta de libro</Link>
              <button
                onClick={handleLogout}
                className="text-black hover:underline flex"
              >
                <img src={LogoutIcon} alt='logout' width={25}></img>
                <p>Salir</p>
              </button>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN} className="hover:text-white hover:bg-blue-400  hover:rounded-lg p-2 flex">
                <img src={LoginIcon} alt='login' width={25}></img>
                <p>Ingresar</p>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 pt-2">
          <div className="flex flex-col space-y-3 px-4 pb-4">
            <Link
              to={ROUTES.HOME}
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Libros
            </Link>
            <Link
              to={ROUTES.AUTHORS}
              className="text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Autores
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to={ROUTES.NEW_BOOK}
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Alta de libro
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="text-white hover:text-gray-300 text-left"
                >
                  Salir
                </button>
              </>
            ) : (
              <>
                <Link
                  to={ROUTES.LOGIN}
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Ingresar
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}