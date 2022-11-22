
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
import CircularProgress from '@mui/material/CircularProgress';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export const ProductoForm = (props) =>{
    const [file, setFile] = useState(null);
    const [formdata, setFormData] = useState();
    const [isLoading, setIsLoading] =useState(false);
    const [select, setSelect] = useState('');

    const addFile = (event) => {
        setFile(event.target.files[0]);
    }

    //Asignar datos al estado
    const handleChange=(prop) => (event) => {
        if (prop === "categoriaid"){
            setSelect(event.target.value);
        }
        setFormData({...formdata, [prop]:event.target.value})
    };

    const convertBase64 = (file) => {
        return new Promise ((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) =>{
                reject(error);
            }
        })
    }

    const createProducto = async () => {
        let api = new ApiConnectionServer();
        setIsLoading(true);
        const userdata = JSON.parse(localStorage.getItem("usuario"));

        let base64 = null;

        if(file !== null){
            base64 =await convertBase64(file)
            formdata.imagen = {
                data:base64.split('.')[1],
                url:null,
                name:file.name
            }
        }

        const serverObject = {
            nombre: formdata.nombre,
            descripcion: formdata.descripcion,
            precio: formdata.precio,
            cantidaddisponible: formdata.catindaddisponible,
            categoriaid:formdata.categoriaid,
            imagen : {
                data:base64.split(',')[1],
                url:null,
                name:file.name
            }
        }

        const peticion = api.postDataAuth(serverObject,'producto/create',userdata.token)
        peticion.then((data) => {
            setIsLoading(false);
            return data.json();
        }).then((responseJson) => {
            setIsLoading(false);
            console.log(responseJson);
            // eslint-disable-next-line default-case
            switch(responseJson.code){
                case 200:
                    alert(responseJson.message);
                    props.reloadTable();
                    break;
                case 500:
                    alert(responseJson.message);
                    break;
                case 401:
                    alert(responseJson.message);
                    break;
            }
        }).catch((error) => {
            alert(error);
            console.log(error);
            setIsLoading(false);
        })
    }

    return(
        <Card>
            <CardContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1,},
                    }}
                    noValidate
                    autocomplete="off"
                >
                <div style={{marginTop:"1rem"}}>
                    <InputLabel id="demo-simple-select-label">
                        Seleccionar Categoría
                    </InputLabel>
                    <Select
                        fullWidth
                        value={select}
                        labelId="demo-simple-select-label"
                        label="Seleccione una Categoría"
                        onChange={handleChange('categoriaid')}
                    >   
                        {
                            props.categorias.map((data,index) =>{
                                return<MenuItem key={index} value={data._id}>
                                            {data.nombre}
                                    </MenuItem>
                            })
                        }
                    </Select>
                </div>
                <div style={{marginTop:"0.5rem"}}>
                    <TextField
                        fullWidth
                        label="Producto"
                        onChange={handleChange('nombre')}
                    >
                    </TextField>
                </div>
                <div style={{marginTop:"0.5rem"}}>
                    <TextField
                        fullWidth
                        label="Descripción"
                        onChange={handleChange('descripcion')}
                        multilinerows={4}
                        defaultValue=""
                    >
                    </TextField>
                </div>
                <div style={{marginTop:"0.5rem"}}>
                    <TextField
                        fullWidth
                        label="Precio"
                        onChange={handleChange('precio')}
                    >
                    </TextField>
                </div>
                <div style={{marginTop:"0.5rem"}}>
                    <TextField
                        fullWidth
                        label="Cantidad disponible"
                        onChange={handleChange('cantidaddisponible')}
                    >
                    </TextField>
                </div>
                <div style={{marginTop:"0.5rem"}}>
                    <Typography variant='h6' component='h6'>
                        Seleccionar imagen
                    </Typography>
                    <TextField
                        fullWidth
                        type="file"
                        onChange={addFile}
                    >
                    </TextField>
                </div>
                </Box>
            </CardContent>
            <CardActions>
            <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
            >
                    {
                        !isLoading && 
                        <Button
                            onClick={() =>{
                                createProducto()
                            }}
                            variant="contained" 
                            style={{ margin:'10px', 
                                    backgroundColor:'#da0000',
                                    fontWeight:'bold',
                                    fontSize:"1rem"}}
                        >
                            crear
                        </Button>
                    }
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {
                    isLoading &&
                    <CircularProgress>
                    </CircularProgress>
                }
                <Button
                     variant="contained"
                     style={{ 
                         margin:'10px', 
                         backgroundColor:'#da0000',
                         fontWeight:'bold',
                         fontSize:"1rem"}}
                >
                    limpiar
                </Button>
            </Grid>
            </CardActions>
        </Card>
    )








}