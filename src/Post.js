import { useState } from "react"

export default function Post(props) {
    let [likes,setLikes] = useState(props.likes);
    let [heart,setHeart] = useState('heart-outline');
    let [classHeart,setClassHeart] = useState('');
    let [save,setSave] = useState("bookmark-outline");

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
                    <ion-icon class={classHeart} onClick={()=>{curtir(likes,setLikes,heart,setHeart,setClassHeart)}} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon onClick={()=>{salvar(save,setSave)}} name={save}></ion-icon>
                </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgLike} alt={props.like}/>
                    <div class="texto">
                        Curtido por <strong>{props.like}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function curtir(likes,setLikes,heart,setHeart,setClassHeart){
    let num = parseInt(likes);
    let str = likes.toString();
    let num2 = str.split('.');
    let mil;

    num*=1000;
    num+=parseInt(num2[1]);

    if(heart === 'heart-outline'){
        setHeart('heart');
        setClassHeart('red');
        num+=1;
        mil = parseInt(num/1000);
        str = mil + '.' + num%1000;
        setLikes(str);
    }
    else{
        setHeart('heart-outline');
        setClassHeart('')
        num-=1;
        mil = parseInt(num/1000);
        str = mil + '.' + num%1000;
        setLikes(str);
    }
}

function salvar(save,setSave){
    if(save==='bookmark-outline'){
        setSave('bookmark');
    }
    else{
        setSave('bookmark-outline');
    }
}