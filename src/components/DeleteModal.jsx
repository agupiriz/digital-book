import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";

export default function DeleteModal({ visible, closeHandler, onConfirmDelete, loading, refToDelete }) {
    return (
        <Modal backdrop="blur" isOpen={visible} onClose={closeHandler}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader
                            className="flex flex-col gap-1 text-black text-center"
                        >
                            ¿Estás seguro que querés eliminar?
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex w-full justify-center">
                                <p className="mr-1">Libro:</p>
                                <p className="font-bold">{refToDelete}</p>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button auto flat onPress={closeHandler}>
                                Volver
                            </Button>
                            <Button
                                isDisabled={loading}
                                color="danger"
                                style={{ color: "white" }}
                                auto
                                onPress={onConfirmDelete}
                                isLoading={loading}
                            >
                                Si, eliminar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
