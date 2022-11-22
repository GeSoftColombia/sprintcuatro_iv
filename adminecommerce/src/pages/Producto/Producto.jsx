import { Container } from "@mui/system"
import Grid from '@mui/material/Grid';
import { ProductoForm } from "../../components/ProductoForm/ProductoForm";
import { Component } from "react";
import { ApiConnectionServer } from "../../data/ApiConnectionServer";
import { ProductoTable } from "../../components/ProductoTable/ProductoTable";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export class Producto extends Component{

    state = {
        categorias:[],
        productos: [],
        isloading:false
    }

    constructor(props){
        super(props);
        this.reloadTable.bind(this);
    }

    //Obtener Categorias
    getCategorias(){
        const api = new ApiConnectionServer();
        const userdata = JSON.parse(localStorage.getItem("usuario"));
        const serverResponse = api.getDataToken('/categoria/getall', userdata.token);
        serverResponse.then((data) => {
            return data.json();
        }).then((jsonresponse) => {
            if(jsonresponse.code === 200){
                this.setState({categorias: jsonresponse.data})
            }
            else{
                alert(jsonresponse.message);
            }
        }).catch((error) =>{
            alert("Error " + error)
        })

    }

    //Llamar al Servidor para obtener categorias
    getProductos(){
        const callApi = new ApiConnectionServer();
        const userdata = JSON.parse(localStorage.getItem("usuario"));
        this.setState({isloading:true}, () => {
            const serverResponse = callApi.getDataToken('/producto/getll',userdata.token);
            serverResponse.then((data) => {
                return data.json();
            }).then((jsonresponse) => {
                this.setState({isloading:false})
                if(jsonresponse.code === 200){
                    this.setState({productos : jsonresponse.data})
                }
                else{
                    alert(jsonresponse.message);
                }
            }).catch((error) =>{
                this.setState({isloading:false})
            })
        })
    }

    componentDidMount(){
        this.getCategorias();
        this.getProductos();
    }

    //Recargar la cantidad de Productos
    reloadTable(){
        this.getProductos();
    }

    render(){
        return(
            <>
                <Container maxWidth='xl'>
                    <h1
                        style={{ color:'#da0000', alignContent:'center', fontSize:"3rem"}}
                    >
                        Productos
                    </h1>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <h3
                                style={{ color:'#da0000', alignContent:'center', fontSize:"2.5rem"}}
                            >
                                Registrar Producto
                            </h3>
                        </Grid>
                        <Grid item xs={6}>
                        <h3 style={{color:'#da0000', alignContent:'center', fontSize:"2.5rem"}}>
                            Listado de Productos
                        </h3>
                    </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ProductoForm 
                                reloadtable={this.reloadTable.bind(this)}
                                categorias={this.state.categorias}
                            >
                            </ProductoForm>
                        </Grid>
                    
                        <Grid item xs={6}>
                            {
                                this.state.isloading &&
                                <Box
                                    sx={{ display:'flex'}}
                                >
                                    <CircularProgress>                   
                                    </CircularProgress>
                                </Box>
                            }
                            {
                                !this.state.isloading &&
                                <ProductoTable
                                    reloadTable={this.reloadTable.bind.this}
                                    productos={this.state.productos}
                                >
                                </ProductoTable>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}