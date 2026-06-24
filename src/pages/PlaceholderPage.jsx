
export default function PlaceholderPage({ title }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6 bg-white rounded-card border border-dashed border-bordercolor">
      <h1 className="text-page-title text-headingcolor mb-2">{title}</h1>
      <p className="text-meta text-bodycolor max-w-sm">
        This page shares the same sidebar and navbar shell as Images, but
        isn't part of this round's scope - see the assignment's "Related
        pages (context only)" note.
      </p>
    </div>
  );
}
