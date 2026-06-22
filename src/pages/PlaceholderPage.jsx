/**
 * Section 5: "Related pages (context only)" share the sidebar/navbar shell
 * but aren't part of this round's scope. This single component renders a
 * simple placeholder for all of them, parameterized by title - it keeps
 * App.jsx's route table honest (every sidebar link goes to a real route)
 * without duplicating five nearly-identical files.
 */
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
