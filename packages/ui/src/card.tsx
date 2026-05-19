import { type JSX } from "react";

export function Card({
  title,
  description,
  cdn
}: {
  title: string;
  description:string;
  cdn:string;
}): JSX.Element {
  return (
    <a
      // href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
      <img src={cdn} alt="" />
    </a>
  );
}
