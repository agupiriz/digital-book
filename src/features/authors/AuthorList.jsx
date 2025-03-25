import { useEffect } from "react";
import { useSnackbar } from "notistack";
import useAuthors from "../../hooks/useAuthors";
import TableAuthors from "../../components/TableAuthors";
import TableSkeleton from "../../components/TableSkeleton";

export default function AuthorList() {
  const { enqueueSnackbar } = useSnackbar()
  const { loading, error, loadAuthors, authors } = useAuthors();

  useEffect(() => {
    loadAuthors();
  }, []);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: "error",
        persist: false,
      });
    }
  }, [error]);

  if (loading) {
    return <TableSkeleton />;
  }
  return (
    <div className="flex flex-col justify-center py-6 w-full">
      <h1 className="text-3xl font-bold text-center my-10">Autores</h1>
      <div className="flex flex-wrap w-full h-full gap-3 justify-center">
        <TableAuthors authors={authors} />
      </div>
    </div>
  );
}