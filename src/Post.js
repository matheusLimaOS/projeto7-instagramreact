export default function Post(props) {
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src='assets/img/meowed.svg' alt={props.user}/>
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.img} alt={props.user} />
            </div>

            <div class="fundo">
                <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgLike} alt={props.like}/>
                    <div class="texto">
                        Curtido por <strong>{props.like}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}