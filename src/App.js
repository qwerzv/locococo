import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Input from "./common/Input";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="container">
        <div className="spacer"></div>
        <div id="searchMain">
          <Input />
        </div>
        <section id="noticeMain">
          <div className="notice loaNotice">로스트아크 공지사항</div>
          <div className="notice newPost">최신 공략글</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
