import React from "react";
import Section from "../shared/section/Section";
import PageTitle from "../shared/titles/PageTitle";
import ArticleDescription from "./ArticleDescription";
import { ArticleItem } from "@/types/article";
import ArticleBottom from "./ArticleBottom";
import ArticleList from "./ArticleList";

interface ArticleProps {
  currentArticle: ArticleItem;
}

export default function Article({ currentArticle }: ArticleProps) {
  console.log(currentArticle);
  const { title } = currentArticle;

  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <ArticleDescription currentArticle={currentArticle} />
      <ArticleList />
      <ArticleBottom currentArticle={currentArticle} />
    </Section>
  );
}
