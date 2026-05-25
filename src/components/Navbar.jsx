export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-4 flex-wrap sticky top-0">
      <a href="#resumen">Resumen</a>
      <a href="#marco">Marco</a>
      <a href="#delitos">Delitos</a>
      <a href="#comparacion">Comparación</a>
      <a href="#responsabilidades">Responsabilidades</a>
      <a href="#datos">Datos</a>
      <a href="#conclusiones">Conclusiones</a>
      <a href="#prompts">Prompts</a>
    </nav>
  );
}