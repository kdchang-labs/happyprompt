import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "一鍵儲存 AI Prompt 指令",
    Png: require("@site/static/img/ai-tools-icon.png").default,
    description: (
      <>
        看到好用的 Prompt 提示詞？
        一鍵儲存和插入，隨時搜尋、複製，不再重打或翻聊天紀錄
      </>
    ),
  },
  {
    title: "內建跨職能 Prompt 知識庫",
    Png: require("@site/static/img/vibe-coding-icon.png").default,
    description: (
      <>
        內建行銷、業務、客服、人資、財務、行政、PM、程式等專業提示詞。直接套用，讓
        AI 產出專業級結果
      </>
    ),
  },
  {
    title: "免登入開箱即用/支援匯出匯入",
    Png: require("@site/static/img/ai-prompt-icon.png").default,
    description: (
      <>
        不用額外註冊帳號，開箱即用，支援本地資料儲存。同時支援匯出匯入，隨時分享或備份，安心又快速
      </>
    ),
  },
];

function Feature({ title, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrap}>
          <img src={Png} className={styles.featurePng} role="img" alt={title} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

function ProductShowcase(): ReactNode {
  const features = [
    {
      image: "/img/cover-1.jpg",
      title: "⚡ 超省時｜一鍵儲存 AI Prompt 提示詞",
      description: "看到優質的提示詞不再錯過！一鍵擷取並歸檔，隨時為你所用",
    },
    {
      image: "/img/cover-2.jpg",
      title: "💪 超省力｜一鍵插入 AI Prompt 指令",
      description:
        "完美整合 ChatGPT、Claude、Gemini 等主流平台，點擊即填入，深度整合主流 AI 平台，告別手動複製貼上",
    },
    {
      image: "/img/cover-3.jpg",
      title: "🔍 超方便｜強大的搜尋管理系統",
      description: "支援標題、內容、Tags 關鍵字搜尋，Prompt 再多也不混亂",
    },
    {
      image: "/img/cover-4.jpg",
      title: "📚 超好用｜跨職能專業 Prompt 知識庫",
      description:
        "內建 AI 工具官方推薦與專家策展提示詞：涵蓋行銷、工程、PM、營運、人資等職能，直接套用，立即產出專業級成果",
    },
    {
      image: "/img/cover-5.jpg",
      title: "🔒 超安心｜隱私優先，資料完全掌握",
      description:
        "免註冊、免登入，資料完全儲存在本地瀏覽器。支援匯出與匯入，安全可控",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">功能特色</span>
          <Heading as="h2">一個工具，搞定職涯成長</Heading>
        </div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.showcaseRow,
              idx % 2 === 1 && styles.showcaseRowReverse,
            )}
          >
            <div className={styles.showcaseImageWrap}>
              <img
                src={feature.image}
                alt={feature.title}
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseTextWrap}>
              <h3 className={styles.showcaseTitle}>{feature.title}</h3>
              <p className={styles.showcaseDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">核心優勢</span>
            <Heading as="h2">什麼是 HappyPrompt？</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
