import { Chip } from "@heroui/react";
import useAuth from "../hooks/useAuth";

export default function BookCard({ book, onDetailBook, onSelectBookToDelete, onSelectBookToUpdate }) {
  const { isAuthenticated } = useAuth();

  const showDetail = () => {
    onDetailBook(book)
  }

  const onUpdate = () => {
    onSelectBookToUpdate(book)
  }

  const onDelete = () => {
    onSelectBookToDelete(book)
  }

  return (
    <div>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
          <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={book.image} alt="" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex translate-y-[34%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white min-h-20">{book.title}</h1>
          <Chip color={`${book.availability ? 'success' : 'danger'}`}>{book.availability ? "Disponible" : "Agotado"}</Chip>
          <p class="mb-3 text-lg italic text-white opacity-100 my-3">Año: {book.publicationYear}</p>
          <div className="flex flex-col gap-2">
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick={showDetail}>Ver más</button>
            {isAuthenticated &&
              <>
                <button class="rounded-full bg-red-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick={onDelete}>Eliminar</button>
                <button class="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick={onUpdate}>Editar</button>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}