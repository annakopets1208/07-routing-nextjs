"use client";

import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import css from "./NotePreview.module.css";

const NotePreview = () => {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.container}>
        <button className={css.backBtn} onClick={() => router.back()}>
          Back
        </button>
        <div className={css.item}>
          <NoteDetailsClient />
        </div>
      </div>
    </Modal>
  );
};

export default NotePreview;
