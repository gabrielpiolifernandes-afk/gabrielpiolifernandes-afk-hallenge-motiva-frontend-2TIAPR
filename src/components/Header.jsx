export default function Header() {
  return (
    <div className="marca-linha">
      <div className="marca">
        <span className="marca-icone" aria-hidden="true">
          MO
        </span>
        <div>
          <strong>MOTIVA</strong>
          <p className="marca-complemento">
            Seu assistente inteligente
          </p>
        </div>
      </div>
      <p className="topo-curso">Inteligência Artificial</p>
    </div>
  )
}

//mudei como pedido marca, complemento, curso para nosso padrão de marca, marca-complemento e topo-curso.