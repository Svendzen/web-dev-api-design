import { Route, Routes } from "react-router-dom";
import { Article } from "../news/article";
import { LoginPage } from "../login/loginPage";
import { JokePage } from "./jokePage";
import { AboutPage } from "./aboutPage";
import { ContactPage } from "./contactPage";
import { ProfilePage } from "../profile/profilePage";
import { GoogleCallback } from "../login/googleCallback";
import { NewsPage } from "../news/newsPage";

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path={"*"} element={<h2>Not Found :-(</h2>} />
      <Route path={"/"} element={<NewsPage />} />
      <Route path={"/article/:id"} element={<Article />} />
      <Route path={"/joke"} element={<JokePage />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/contact"} element={<ContactPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/login/callback/google"} element={<GoogleCallback />} />
      <Route path={"/profile"} element={<ProfilePage />} />
    </Routes>
  );
}
