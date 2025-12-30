import { fetchNotesByTag } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByTagPage({ params }: Props) {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];
  const response = await fetchNotesByTag(tag);

  return (
    <div>
      {response.notes.length > 0 ? (
        <NoteList notes={response.notes} />
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
}
