import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import App from "./Notes.client";
import { fetchNotes } from "@/lib/api";

interface NotePageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NotePage({ params }: NotePageProps) {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = slug[0] === "all" ? "" : slug[0];
  const queryKey = tag
    ? ["notes", { page: 1, searchValue: "", tag }]
    : ["notes", { page: 1, searchValue: "" }];
  console.log(queryKey);
  await queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: () => fetchNotes("", 1, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <App />
    </HydrationBoundary>
  );
}
