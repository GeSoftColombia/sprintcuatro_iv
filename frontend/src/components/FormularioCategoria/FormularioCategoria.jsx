import { Component } from "react";
import { ApiConnectionServer } from "../../data/ApiConnectionServer";


export class FormularioCategoria extends Component{

    state = {
        nombreCategoria:"",
        descripcionCategoria:"",
        imagenCategoria:"",
        loading: false,
        categorias:[]
    }

    constructor(props){
        super(props);
        this.obtenerCategorias();
    }

    apiServer = new ApiConnectionServer();

    crearCategoria()
    {
        var serverObject = {
            nombre : this.state.nombreCategoria,
            descripcion : this.state.descripcionCategoria,
            imagen : this.state.imagenCategoria
        }

        this.setState({loading:true});
        const peticion = this.apiServer.postData(serverObject,'categoria/create');

        peticion.then((data) => {
            this.setState({loading:false});
            return data.json();
        }).then((responseJson) =>{
            this.setState({loading:false});
            switch(responseJson.code){
                case 200:
                    alert(responseJson.message);
                    this.obtenerCategorias();
                    break;
                case 500:
                    alert(responseJson.message);
                    break;
            }
        })
        .catch((error) => {
            console.log(error);
            this.setState({loading:false});
        })
    }

    componentDidAmount(){
      
    }

    obtenerCategorias(){
       const peticion = this.apiServer.getData('/categoria/getall');

       peticion.then((data) => {
            return data.json();
       }).then((response) => {  
            if(response.code == 200){
                this.setState({categorias : response.data})
            }
       }).catch((error) => {

       })
    }

    render(){
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Crear nueva categoria</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3">
                        <label className="form-label">Nombre categoria</label>
                        <input 
                                type="text" 
                                className="form-control"
                                onChange={e => this.setState({ nombreCategoria: e.target.value})}
                                placeholder="Ingrese aca el nombre de la categoria" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripción de la categoria</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                onChange={e => this.setState({ descripcionCategoria: e.target.value})}
                                placeholder="Ingrese aca la descripcion de la categoria" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Imagen para la categoria</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            onChange={e => this.setState({ imagenCategoria: e.target.value})}
                            placeholder="Ingrese aca la imagen de la categoria" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {
                            !this.state.loading &&  <button onClick={() => {
                                this.crearCategoria()
                            }} className="btn btn-primary" type="submit">Crear categoria</button>
                        }
                        {
                            this.state.loading &&  <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                        </div>
                        }
                        <button onClick={() => {
                                this.obtenerCategorias()
                            }} className="btn btn-primary" type="submit">Cargar Categorias
                        </button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Nombre categoria</td>
                                    <td>Descripcion categoria</td>
                                    <td>Imagen categoria</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.categorias.map((object,key) => {
                                        return <tr key={key}>
                                                    <td>{object.nombre}</td>
                                                    <td>{object.descripcion}</td>
                                                    <td>{object.imagen}</td>
                                               </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        )
       
    }
}
