import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";
import { useSnackbar } from "notistack";
import BookCard from "../../components/BookCard";
import SearchInput from "../../components/SearchInput";
import DeleteModal from "../../components/DeleteModal";
import useBooks from "../../hooks/useBooks";
import CardsSkeleton from "../../components/CardsSkeleton";
import useSearchInput from "../../hooks/useSearchInput";

export default function Library() {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [bookToDelete, setBookToDelete] = useState();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar()
  const { loadBooks, loading, error, books, removeBook, selectBookDetail, doSelectBookToUpdate } = useBooks();
  const { searchInput, loadingSearch } = useSearchInput();

  useEffect(() => {
    loadBooks();
  }, []);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: "error",
        persist: false,
      });
    }
  }, [error]);

  const onDetailBook = (book) => {
    selectBookDetail(book)
    navigate(ROUTES.DETAIL_BOOK)
  }

  const onSelectBookToDelete = (book) => {
    setBookToDelete(book);
    setShowModalDelete(true);
  }

  const onSelectBookToUpdate = (book) => {
    doSelectBookToUpdate(book);
    navigate(ROUTES.UPDATE_BOOK);
  }

  const onCloseModal = () => {
    setShowModalDelete(false);
    setBookToDelete(null)
  }

  const onConfirmDelete = () => {
    removeBook(bookToDelete.id);
    onCloseModal();
  }

  const onSearchInput = ({ target }) => {
    searchInput(target.value)
  }

  if (loading) {
    return <CardsSkeleton />;
  }

  return (
    <div className="flex flex-col justify-center py-6 w-full bg-slate-200/60">
      {showModalDelete && (
        <DeleteModal
          visible={showModalDelete}
          closeHandler={onCloseModal}
          onConfirmDelete={onConfirmDelete}
          refToDelete={bookToDelete?.title}
          loading={loading}
        />
      )}
      <div className="md:w-full flex justify-center content-center mx-2">
        <SearchInput className="md:w-1/2" onChange={onSearchInput} isLoading={loadingSearch} />
      </div>
      <h1 className="text-3xl font-bold text-center my-10">Libros</h1>
      {!!loadingSearch && <CardsSkeleton />}
      {!loadingSearch &&
        <div className="flex flex-wrap w-full h-full gap-3 justify-center">
          {books.map((book) => {
            return <BookCard
              key={book.isbn}
              book={book}
              onDetailBook={onDetailBook}
              onSelectBookToDelete={onSelectBookToDelete}
              onSelectBookToUpdate={onSelectBookToUpdate}
            />
          })}
        </div>
      }
    </div >
  );
}