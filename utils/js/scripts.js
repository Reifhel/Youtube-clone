const search = document.querySelector('form');

search.addEventListener('submit', function(e) {

        e.preventDefault();

        let G_TOKEN = "x" // insira seu token aqui
        let nome = document.getElementById("pesquisa").value;

        fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${nome}&part=snippet&key=${G_TOKEN}`)
        .then(response => response.json())
        .then(function(data){
            console.log(data)

            let video = data.items[0].id.videoId
        
            let url = `https://www.youtube.com/embed/${video}`

            document.getElementById('embed_video').src = url;
            
            // mudando o nome do video tbm
            let titulo = data.items[0].snippet.title
            document.getElementById('titulo').innerHTML = titulo;


            // adicionando os videos relacionados
            for(let i = 1; i < 5; i++){
                let thumb = data.items[i].snippet.thumbnails.medium.url
                let titulo = data.items[i].snippet.title
                let canal = data.items[i].snippet.channelTitle

                document.getElementById('rec_'+i).src = thumb;
                document.getElementById('rec_'+i).alt = titulo;

                document.getElementById('tit_'+i).innerHTML = titulo;
                document.getElementById('channel_'+i).innerHTML = canal;

            }
        })

    }
)
