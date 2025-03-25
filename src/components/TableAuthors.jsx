import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

export default function TableAuthors({ authors }) {
    return (
        <Table aria-label="authors" className="mx-4">
            <TableHeader>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>LIBROS PUBLICADOS</TableColumn>
            </TableHeader>
            <TableBody>
                {authors?.map((author) => {
                    return (
                        <TableRow key={author?.id}>
                            <TableCell>{author?.name}</TableCell>
                            <TableCell>{author?.numberOfBooks}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
}