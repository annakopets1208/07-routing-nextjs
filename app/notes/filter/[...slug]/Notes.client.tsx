"use client";
import css from "./NotesPage.module.css";
import { fetchNotes } from "@/lib/api";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";

export default function App() {
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentPage(1);
      setName(event.target.value);
    },
    500
  );

  const { data } = useQuery({
    queryKey: ["notes", name, currentPage],
    queryFn: () => fetchNotes(name, currentPage),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox onChange={handleChange} />
          {data?.notes?.length !== 0 && (data?.totalPages ?? 0) > 1 && (
            <Pagination
              totalPages={data?.totalPages ?? 0}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          <button className={css.button} onClick={() => setIsModalOpen(true)}>
            Create note +
          </button>
        </header>
        <NoteList notes={data?.notes ?? []} />
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <NoteForm onClose={() => setIsModalOpen(false)} />
          </Modal>
        )}
      </div>
    </>
  );
}
