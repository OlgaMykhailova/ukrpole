import React from "react";

import { ArticleItem } from "@/types/article";

import Section from "../shared/section/Section";
import PageTitle from "../shared/titles/PageTitle";
import ArticleBottom from "./ArticleBottom";
import ArticleDescription from "./ArticleDescription";
import ArticleList from "./ArticleList";

interface ArticleProps {
  currentArticle: ArticleItem;
}

export default function Article({ currentArticle }: ArticleProps) {
  const { title } = currentArticle;

  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <ArticleDescription currentArticle={currentArticle} />
      <ArticleList currentArticle={currentArticle} />
      <ArticleBottom currentArticle={currentArticle} />
    </Section>
  );
}
