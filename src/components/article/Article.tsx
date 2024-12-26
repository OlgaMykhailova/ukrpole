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
  return <div>Article</div>;
}
