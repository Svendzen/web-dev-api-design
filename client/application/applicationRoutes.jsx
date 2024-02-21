import { Route, Routes } from "react-router-dom";
import { Article } from "../news/article";
import { LoginPage } from "../login/loginPage";
import { JokePage } from "../joke/jokePage";
import { AboutPage } from "../about/aboutPage";
import { ContactPage } from "../contact/contactPage";
import { ProfilePage } from "../profile/profilePage";
import { GoogleCallback } from "../login/googleCallback";
import { NewsPage } from "../news/newsPage";
import { AddArticle } from "../news/addArticle";

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path={"*"} element={<h2>Not Found :-(</h2>} />
      <Route path={"/"} element={<NewsPage />} />
      <Route path={"/article/:id"} element={<Article />} />
      <Route path={"/article/new"} element={<AddArticle />} />
      <Route path={"/joke"} element={<JokePage />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/contact"} element={<ContactPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/login/callback/google"} element={<GoogleCallback />} />
      <Route path={"/profile"} element={<ProfilePage />} />
    </Routes>
  );
}
