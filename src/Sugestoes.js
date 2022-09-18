import Sugestao from "./Sugestao"

let sugestoes = [
    {
        name:'bad.vibes.memes',
        reason:'Segue você',
        img: 'assets/img/bad.vibes.memes.svg'
    },
    {
        name:'chibirdart',
        reason:'Segue você',
        img: 'assets/img/chibirdart.svg'
    },
    {
        name:'razoesparaacreditar',
        reason:'Novo no Instagram',
        img: 'assets/img/razoesparaacreditar.svg'
    },
    {
        name:'adorable_animals',
        reason:'Segue você',
        img: 'assets/img/adorable_animals.svg'
    },
    {
        name:'smallcutecats',
        reason:'Segue você',
        img: 'assets/img/smallcutecats.svg'
    }
]

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
        {
            sugestoes.map((sugestao)=>{
                return <Sugestao name={sugestao.name} reason={sugestao.reason} img={sugestao.img}/>
            })
        }
        </div>
    )
}

  