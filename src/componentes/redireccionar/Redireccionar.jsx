function RedireccionarLibro(contenido) {

    let contentDiv = document.getElementById('content');
    
        if(contenido === 'Wolfsong') {
                contentDiv.innerHTML = '<h2>Titulo: La cancion del lobo</h2><p>Esta es una descripcion</p>'
            } else if (contenido === 'Reino'){
                contentDiv.innerHTML = '<h2>Titulo: Reino maldito</h2><p>Esta es una descripcion</p>'
            } else if (contenido === 'Graceling'){
                contentDiv.innerHTML = '<h2>Titulo:Graceling</h2><p>Esta es una descripcion</p>'
            } 
            
        return (
            <div>
                
            </div>
        )
}

export default RedireccionarLibro;