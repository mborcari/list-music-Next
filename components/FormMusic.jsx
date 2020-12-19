import { useState } from 'react'
import GetLyric from './GetLyric.jsx'
import ShowLyric from './ShowLyric.jsx'

export default function FormMusic() {

    const [artista, setArtista] = useState('');
    const [musica, setMusica] = useState('');
    const [oldArtista, setOldArtista] = useState('');
    const [oldMusica, setOldMusica] = useState('');
    const [resposta, setResposta] = useState('');

    async function SubmitMusic() {

        if ( !artista || !musica ) {
            setResposta(<div className="bg-warning">"É obrigatório informar o nome do artista e da música" </div>);
            return;
        }
        
        if (!oldArtista && !oldMusica) {
            setOldArtista(artista);
            setOldMusica(musica);
        }

        if (musica == oldMusica && artista == oldArtista ) {
            setResposta("Opps! Nome da música já deste artista já foi consultado, por favor, procure por outra música");
            clearInputs()
            return;
        }


        const spinner = <div className="spinner-grow" role="status"></div>
        setResposta(spinner);

        let resposta = await GetLyric(artista, musica);
        setResposta(resposta);
        clearInputs();
    }

    function clearInputs() {
        document.getElementById("artista").value = "";
        document.getElementById("musica").value = "";
    }
    

    return (
        <div>
            <div className="container">
                    <div className="form-group">
                        <form id="letra-form">
                                <div className="form-row justify-content-center">
                                    <div className="form_group col-md-4 my-2">
                                        <input type="text" className="form-control" id="artista" name="artista" 
                                            placeholder="Digite o nome do artista ou banda" required onChange={(e) => setArtista(e.target.value)}></input>
                                    </div>
                                    <div className="form_group col-md-4 my-2">
                                        <input type="text" className="form-control" id="musica" name="musica" 
                                            placeholder="Digite o nome da música" required onChange={(e) => setMusica(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="col-md-4"> <button type="button" className="btn btn-info btn-block mt-2" onClick={() => SubmitMusic(artista, musica)}>Buscar</button></div>
                                </div>
                        </form>
                      
                    </div>
                  
            </div>
            <div className="container">
                <ShowLyric>{resposta}</ShowLyric>
            </div>
            <div className="justifica-texto-centro">
                <h4> <a href="/musicas">Clique aqui para acessar uma lista de músicas</a></h4>
            </div>
        </div>
        )
}