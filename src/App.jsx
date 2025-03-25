import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import NewBook from './features/books/NewBook';
import ProtectedRoute from './components/ProtectedRoute';
import Library from './features/books/Library';
import { HeroUIProvider } from "@heroui/react";
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import { SnackbarProvider } from 'notistack';
import DetailBook from './features/books/DetailBook';
import ROUTES from './routes';
import "./App.css";
import UpdateBook from './features/books/UpdateBook';
import AuthorList from './features/authors/AuthorList';

function App() {
  return (
    <Provider store={store}>
      <HeroUIProvider>
        <SnackbarProvider >
          <Router>
            <div className="flex flex-col">
              <Navbar />
              <Routes>
                <Route path={ROUTES.HOME} element={<Library />} />
                <Route path={ROUTES.AUTHORS} element={<AuthorList />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route path={ROUTES.DETAIL_BOOK} element={<DetailBook />} />
                <Route
                  path={ROUTES.NEW_BOOK}
                  element={
                    <ProtectedRoute>
                      <NewBook />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={ROUTES.UPDATE_BOOK}
                  element={
                    <ProtectedRoute>
                      <UpdateBook />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </Router>
        </SnackbarProvider>
      </HeroUIProvider>
    </Provider>
  );
}

export default App;