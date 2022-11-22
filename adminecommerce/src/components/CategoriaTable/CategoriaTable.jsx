
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Component } from 'react';
// import { ApiConnectionServer } from '../../data/ApiConnectionServer';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import OpcionTabla from '../OpcionTabla/OpcionTabla';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export class CategoriaTable extends Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    reLoadTable(){
        console.log("Cargando categorías...");
        this.getCategorias();
    }

    render(){
        return(
            <>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Nombre</TableCell>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Descripción</TableCell>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Imagen</TableCell>
                                <TableCell align='center' style={{ background:"black", color:"white", fontSize:"1.2rem"}}>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.categorias.map((row,index) => (
                                <TableRow 
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                >
                                    <TableCell component="th" scope="row" style={{fontSize:'1rem', fontWeight:"700"}}>
                                        {row.nombre}
                                    </TableCell>
                                    <TableCell align="left" style={{fontSize:'1rem'}}>
                                        {row.descripcion}
                                    </TableCell>
                                    <TableCell align="center">
                                        <img src={row.imagen.url} width="50px"/>
                                    </TableCell>
                                    <TableCell>
                                        <Stack spacing={2} direction="row">
                                            <Button
                                                variant="contained"
                                                style={{ 
                                                    margin:'10px', 
                                                    backgroundColor:'#49b86e',
                                                    fontWeight:'bold',
                                                    fontSize:"1rem"
                                                }}
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