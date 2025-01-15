import Image from "next/image";
import React from "react";

import { ArticleItem } from "@/types/article";

interface ArticleDescriptionProps {
  currentArticle: ArticleItem;
}

export default function ArticleDescription({
  currentArticle,
}: ArticleDescriptionProps) {
  const { id, description } = currentArticle;

  return (
    <>
      <p className="pt-8 mb-8 laptop:mb-[60px] border-t border-greenKhaki">
        {description}
      </p>
      <Image
        src={`/images/contentImages/articles/${id}.webp`}
        alt={id}
        width={2048}
        height={1024}
        priority
        className="w-full h-auto aspect-[328/253] sm:aspect-[704/253] laptop:aspect-[1080/400] object-cover"
      />
    </>
  );
}
