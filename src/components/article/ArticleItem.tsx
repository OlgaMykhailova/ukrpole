import React from "react";

interface ArticleListItemProps {
  listItem: { title: string; description: string };
}

export default function ArticleListItem({ listItem }: ArticleListItemProps) {
  const { title, description } = listItem;

  return (
    <li className="sm:w-[48.1%]">
      <h2 className="text-16med laptop:text-18med">{title}</h2>
      <p className="text-16reg laptop:text-18reg">{description}</p>
    </li>
  );
}
