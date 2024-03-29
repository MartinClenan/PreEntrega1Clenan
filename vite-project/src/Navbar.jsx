import miImagen from "./menu_icon.png"
import { Menu } from "lucide-react"
function Navbar() {
    return(
        <header className="bg-red-700 p-4 flex justify-between shadow-md">
        <h1 id="title" className="title header__title">Salud Integral</h1>
        <nav className="hidden md:flex  md:gap-4">
          <a href="">Todos</a>
          <a href="">Proteinas</a>
          <a href="">Creatinas</a>
          <Menu width={24} height={24}/>
        </nav>
      </header>
    )
}

export default Navbar