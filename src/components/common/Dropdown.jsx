import { useEffect, useRef, useState } from "react";

/**
 * Minimal accessible-ish dropdown: click the trigger to toggle, click anywhere
 * outside (or press Escape) to close. Used for both the cart/notifications
 * dropdown and the profile dropdown in the Navbar so that behavior isn't
 * duplicated across two components.
 */
export default function Dropdown({ trigger, children, align = "right" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center justify-center"
      >
        {trigger}
      </button>
      {open && (
        <div
          className={[
            "absolute top-full mt-2 z-50 min-w-[200px] bg-white rounded-card shadow-card border border-bordercolor py-2",
            align === "right" ? "right-0" : "left-0",
          ].join(" ")}
        >
          {children}
        </div>
      )}
    </div>
  );
}
