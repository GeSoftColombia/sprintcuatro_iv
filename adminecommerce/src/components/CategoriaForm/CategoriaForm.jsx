
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
import CircularProgress from '@mui/material/CircularProgress';

export const CategoriaForm = (props) =>{

    const [file, setFile] = useState();
    const [formdata, setFormData] = useState();
    const [isLoading, setIsLoading]= useState(false);

    const addFile = (event) => {
        setFile(event.target.files[0]);
    }

    //Asignar los datos al estado
    const handleChange = (prop) => (event) =>{
        setFormData({...formdata, [prop]:event.target.value})
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onLoad = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const createCategoria = async () => {
        let api = new ApiConnectionServer();
        setIsLoading(true);
        const userdata = JSON.parse(localStorage.getItem("usuario"));

        const base64= await convertBase64(file)

        const serverObject = {
            nombre: formdata.nombre,
            descripcion: formdata.descripcion,
            imagen:{
                data: base64.split(',')[1],
                url:null,
                name:file.name
            }
        }

        const peticion = api.postDataAuth(serverObject, 'categoria/create', userdata.token);
        peticion.then((data) => {
            setIsLoading(false);
            return data.json();
        }).then((responseJson) =>{
            setIsLoading(false);
            // eslint-disable-next-line default-case
            switch(responseJson.code){
                case 200:
                    alert(responseJson.message);
                    props.reloadtable();
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
                        '& .MuitextField-root': { m:1,},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-multiline-flexible"
                            label="Nombre Categoria"
                            onChange={handleChange('nombre')}
                        >
                        </TextField>
                    </div>
                    <div style={{marginTop:"1rem"}}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-stactic"
                            label="Descripción Categoria"
                            onChange={handleChange('nombre')}
                            multiline
                            rows={4}
                            defaultValue=""
                        >
                        </TextField>
                    </div>
                    <div style={{marginTop:"1rem"}}>
                        <Typography variant='h6' component='h6'>
                            Seleccionar imagen
                        </Typography>
                        <TextField
                            style={{marginTop:"1rem"}}
                            type="file"
                            onChange={addFile}
                            fullWidth
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
                                    createCategoria()
                                }}
                                variant="contained" 
                                style={{ margin:'10px', 
                                        backgroundColor:'#66B539',
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
                            isLoading && <CircularProgress>   
                            </CircularProgress>
                        }
                            <Button 
                                variant="contained"
                                style={{ 
                                    margin:'10px', 
                                    backgroundColor:'#66B539',
                                    fontWeight:'bold',
                                    fontSize:"1rem"}}
                            >
                                limpiar
                            </Button>

                    </Grid>
            </CardActions>
        </Card>
    );


}