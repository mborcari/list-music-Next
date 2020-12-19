export default function GetLyric(artista, musica) {

    const getMusica = async () => {
            const url = `https://api.lyrics.ovh/v1/${artista}/${musica}`;
            const res = await fetch(url);
            const resletra = await res.json();
            if (resletra.lyrics) {
                if (resletra.lyrics != "") {
                    return resletra.lyrics
                } else {
                    return "Oopps! algo deu errado! não enconrei esse música! tente com uma outra música."
                }
            } else {
                return "Oopps! algo deu errado! tente novamente com uma música diferente"
            }
        }

        return getMusica();
}