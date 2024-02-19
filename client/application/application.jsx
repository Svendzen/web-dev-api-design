import { Header } from "./header";
import { Article } from "../news/article";
import { Footer } from "./footer";
import { ApplicationRoutes } from "./applicationRoutes";

export function Application() {
  return (
    <>
      <div className={"grid-container"}>
        <Header />
        <aside className={"left"}></aside>
        <main>
          <ApplicationRoutes />
        </main>
        <aside className={"right"}></aside>
        <Footer />
      </div>
    </>
  );
}
