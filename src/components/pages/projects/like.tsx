import * as React from "react";

function LikeComponent(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0.5 0.5 16 16"
      className="Appreciations-icon-Z4i ProjectCoverNeue-icon-zWO"
      {...props}
    >
      <path fill="none" d="M.5.5h16v16H.5z" />
      <path d="M.5 7.5h3v8h-3zm6.707 7.707c.193.19.425.29.677.293H12a.997.997 0 0 0 .707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1a1 1 0 0 0-1-1l-1 2-4 4v6l1.707 1.707z" />
    </svg>
  );
}

export default LikeComponent;
