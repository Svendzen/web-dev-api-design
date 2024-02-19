import { Header } from "./header";
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
