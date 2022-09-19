import { useState } from "react"

export default function Usuario(props) {
    let [name,setName] = useState(props.name);
    let [img,setImg] = useState(props.img);
    return (
        <div class="usuario">
          <img onClick={()=>{changeImg(setImg)}} src={img} alt={name}/>
          <div class="texto">
            <strong>{props.user}</strong>
            <span>
              {name}
              <ion-icon onClick={()=>{changeName(setName)}} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}

function changeName(setName){
  let name = prompt('Escolha o novo nome:');
  if(name!==undefined){
    setName(name);
  }
}

function changeImg(setImg){
  let img = prompt('Escolha a nova imagem de perfil:');
  if(img!==undefined){
    setImg(img);
  }
}
