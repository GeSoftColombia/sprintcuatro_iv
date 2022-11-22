
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Component } from 'react';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
//import CircularProgress from '@mui/material/CircularProgress';
//import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { DataGrid } from '@mui/x-data-grid';
//import TablePagination from '@mui/material/TablePagination';

export class ProductoTable extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    eliminarProducto(id){
        const callApi = new ApiConnectionServer();
        const userdata = JSON.parse(localStorage.getItem("usuario"));
        const serverResponse = callApi.getDataToken('producto/delete' + id,userdata.token);
        serverResponse.then((data) => {
            return data.json();
        }).then((jsonresponse) => {
            if(jsonresponse.code === 200){
                this.props.relaodtable();
            }else{
                alert(jsonresponse.message);
            }
        }).catch((error) => {
            alert("Child Error: " + error);
        })
    }

    render(){
        return(
            <>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth:650}}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Categoria</TableCell>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Nombre</TableCell>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Descripción</TableCell>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Imagen</TableCell>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Acciones</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.props.productos.map((row,index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border:0 }}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.categoriaid.nombre}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.nombre}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {row.descripcion}
                                    </TableCell>
                                    <TableCell align='center'>
                                        <img src={row.imagen.url} width="50px" />
                                    </TableCell>
                                    <TableCell>
                                        <Stack spacing={2} direction="row">
                                            <Button 
                                                size="small"
                                                variant='contained'
                                                color='error'
                                                onClick={() => {
                                                    this.eliminarProducto(row._id);
                                                }}       
                                            >
                                                Eliminar
                                            </Button>
                                            <Button
                                                 size="small"
                                                 variant='contained'
                                                 color='success'
                                            >
                                                Editar
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }

}