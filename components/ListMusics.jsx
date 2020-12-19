import DictMusicasSugestao from '../dados/DictMusicasSugestao.js'
import GetLyric from './GetLyric.jsx'
import ShowLyric from './ShowLyric.jsx'
import { useState } from 'react'



export default function ListMusics() {

    const musicas = DictMusicasSugestao;

    const [resposta, setResposta] = useState('');

    async function callGetLyric (artista, musica) {
    
        setResposta(await GetLyric(artista, musica));
    }
    
    function listaMusicasSugestao() {
        return musicas.map( function (musica, index) {
            return (
                    <tr>
                        <td>{musica.artista}</td>
                        <td> {musica.nome}</td>
                        <td> <button className="btn btn-info btn-sm"  onClick={() => callGetLyric(musica.artista, musica.nome)}> Ver letra </button></td>
                    </tr>
                )
            }
        )
     }

    return (
        <div className = 'container'>
            <ShowLyric>{resposta}</ShowLyric>
            <table className="table table-striped justifica-texto-centro">
                <thead>
                    <tr>
                        <th scope="col">Artista</th>
                        <th scope="col">Música</th>
                        <th scope="col"> <a className="btn btn-dark" href="/" > Voltar para a página inicial </a> </th>
                    </tr>
                </thead>
                <tbody>
                    {listaMusicasSugestao()}
                </tbody>
            </table>
        </div>
    )
}
