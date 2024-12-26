import React from "react";

interface ArticleProps {
  article: {
    id: string;
    title: string;
    descriprion: string;
    list: { title: string; description: string }[];
    finalPart: string;
  };
}

export default function Article({ article }: ArticleProps) {
  const { id, title, description, list, finalPart } = article;
  return <div>Article</div>;
}
