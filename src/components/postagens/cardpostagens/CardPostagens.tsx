import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='
            flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto || 'https://www.svgrepo.com/show/192244/man-user.svg'}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <div className='flex-col justify-between h-full'>
                        <p>{postagem.texto}</p>
                        <p className='text-sm py-3'>Tema: <span className='w-fit p-1 rounded-sm bg-green-300 inset-shadow-sm'>{postagem.tema?.descricao}</span></p>
                        <p className='text-sm'>Data: {new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'full',
                            timeStyle: 'medium',
                        }).format(new Date(postagem.data))}</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem