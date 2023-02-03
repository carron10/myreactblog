import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
export default function MyNavBar() {
  return (
    <div>
      <Navbar
        style={{ background: `rgba(255,245,255,255)` }}
        classNameName="border-bottom  py-3 small"
        expand="md"
      >
        <Navbar.Brand href="/">CHATSFLY</Navbar.Brand>
        <div className=" d-sm-none">
          <a href="/search.html">
            <FontAwesomeIcon classNameName="text-dark" icon={faSearch} />
          </a>
        </div>
        <Navbar.Collapse classNameName="text-center text-dark d-none d-sm-inline-block d-flex justify-content-end w-100">
          <Nav classNameName="ml-auto ml-auto pr-2">
            <Nav.Item>
              <Nav.Link>
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div
        className="border-bottom py-4"
        style={{ background: `rgba(255,245,255,255)` }}
      >
        <div className=" container py-4  ">
          <div className="row">
            <div className=" my-2 col">
              <div className=" h1" style={{ font: "60px" }}>
                Stay connected.
              </div>
              <p className="h4">
                Discover stories that will make your skills grow.
              </p>
              <Button className="p-1 border-0 bg-dark text-white rounded-pill h5">
                Start reading
              </Button>
            </div>
            <div classNameName="col d-none d-sm-inline-block">
              <Image
                className="p-0 border-0"
                src="/img/Most-Popular-Programming-Languages-2022.png"
                alt=""
                thumbnail
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
