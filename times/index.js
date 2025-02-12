import './times.css'
import Colaborador from '../colaborador'
const Time = (props)=>{

 const cssSecundario = { backgroundColor: props.corSecundaria }   
 const cssPrimario ={ borderColor: props.corPrimaria}
 
return (
   props.colaboradores.length >0 &&
<section className='times'style={cssSecundario}>
   <h3 style={cssPrimario}> {props.nome} </h3>
<div className='colaboradores'>
{props.colaboradores.map(colaborador=> <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}

</div>
</section>
)
}
export default Time;