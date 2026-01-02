"use client";

import { useRouter, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

export default function NotePreview() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.container}>
        <button className={css.backBtn} onClick={() => router.back()}>
          Back
        </button>

        {isLoading && <p>Loading note...</p>}
        {error && <p>Failed to load note</p>}

        {note && (
          <div className={css.item}>
            <h2>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <span className={css.tag}>{note.tag}</span>
            <p className={css.date}>
              Created at: {new Date(note.createdAt).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
