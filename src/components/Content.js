import { useTheme, useLanguage } from "../context";

const Content = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div>
      {language === "tr" ? (
        <div className={`${theme}-theme`}>
          İçerik Alanı
          <p>Burası içerik alanı</p>
          <p>burada birçok yazı/resim/video/reklam bulunacak</p>
          <p>Dil : {language}</p>
        </div>
      ) : (
        <div className={`${theme}-theme`}>
          Content
          <p>There is content area</p>
          <p>There are more content, paragrahps, videos and images</p>
          <p>Language : {language}</p>
        </div>
      )}
    </div>
  );
};

export default Content;
