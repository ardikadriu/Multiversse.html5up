import Image from "next/image";
import ImgBgc from "./ImgBgc";
import thumbs01 from "@/public/images/thumbs/01.jpg";
import thumbs02 from "@/public/images/thumbs/02.jpg";
import thumbs03 from "@/public/images/thumbs/03.jpg";
import thumbs04 from "@/public/images/thumbs/04.jpg";
import thumbs05 from "@/public/images/thumbs/05.jpg";
import thumbs06 from "@/public/images/thumbs/06.jpg";
import thumbs07 from "@/public/images/thumbs/07.jpg";
import thumbs08 from "@/public/images/thumbs/08.jpg";
import thumbs09 from "@/public/images/thumbs/09.jpg";
import thumbs10 from "@/public/images/thumbs/10.jpg";
import thumbs11 from "@/public/images/thumbs/11.jpg";
import thumbs12 from "@/public/images/thumbs/12.jpg";

const Main = () => {
  return (
    <div id="main">
      <article className="thumb">
        <a href="images/fulls/01.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs01} />
        </a>
        <h2>Magna feugiat lorem</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/02.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs02} />
        </a>
        <h2>Nisl adipiscing</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/03.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs03} />
        </a>
        <h2>Tempus aliquam veroeros</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/04.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs04} />
        </a>
        <h2>Aliquam ipsum sed dolore</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/05.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs05} />
        </a>
        <h2>Cursis aliquam nisl</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/06.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs06} />
        </a>
        <h2>Sed consequat phasellus</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/07.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs07} />
        </a>
        <h2>Mauris id tellus arcu</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/08.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs08} />
        </a>
        <h2>Nunc vehicula id nulla</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/09.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs09} />
        </a>
        <h2>Neque et faucibus viverra</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/10.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs10} />
        </a>
        <h2>Mattis ante fermentum</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/11.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs11} />
        </a>
        <h2>Sed ac elementum arcu</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
      <article className="thumb">
        <a href="images/fulls/12.jpg" className="image">
          <ImgBgc position={"center"} src={thumbs12} />
        </a>
        <h2>Vehicula id nulla dignissim</h2>
        <p>
          Nunc blandit nisi ligula magna sodales lectus elementum non. Integer
          id venenatis velit.
        </p>
      </article>
    </div>
  );
};

export default Main;
