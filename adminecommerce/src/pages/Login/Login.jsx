
import { Component } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { ApiConnectionServer } from "../../data/ApiConnectionServer";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//import Stack from '@mui/material/Stack';

export class Login extends Component{

    state = {
        correo: '',
        password: '',
        showPassword: false,
        loading: false,
        validform: true
    }

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    apiServer = new ApiConnectionServer();

    //Realizar la petición al servidor
    doLogin(){

        var serverObject = {
            username:this.state.correo,
            password:this.state.password
        }

        if(serverObject.username === "" || serverObject.password === ""){
            this.setState({validform:false})
            return;
        }

        this.setState({loading:true});
        const peticion = this.apiServer.postData(serverObject, 'login');
        peticion.then((data) => {
            this.setState({loading:false});
            return data.json();
        }).then((responseJson) => {
            this.setState({loading:false});
            // eslint-disable-next-line default-case
            switch(responseJson.code){
                case 200:
                    alert(responseJson.message);
                    localStorage.setItem("usuario", JSON.stringify(responseJson.data));
                    //Redireccionar al usuario
                    window.location = '/dashboard';
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

    handleClickShowPassword(){
        this.setState({ showPassword: !this.state.showPassword })
    }

    handleChange = (prop) => (event) => {
        this.setState({ ...this.state, [prop]: event.target.value });
    };

    render(){
        return(
            <>  
                <Card style={{ marginTop:20, 
                               fontSize:"12.5px", 
                               textAlign:'center', 
                               color:'white',
                               backgroundColor:'#1e81b0',
                               width:'100%'
                            }}
                >
                    <h1>
                         Ecommerce Cartagena - Gestión de Administración
                    </h1>
                </Card>

                <Container style={{ marginTop:100 }} maxWidth = "sm">
                    <Card sx={{ maxWidth: 1000, minHeight:430}}>
                        <div>
                            <Grid
                                container
                                direction="row"
                                justifyContent = "center"
                                alignItems="center"
                            >
                                    <h1 style={{ margin:'10px', color:'#1e81b0'}}>
                                        Login
                                    </h1>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                    <h4 style={{ margin:'10px', color:'#86C7E3'}}>
                                        Para acceder, INGRESE sus credenciales
                                    </h4>
                            </Grid>
                        </div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25rem' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <CardContent>
                                <div>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <TextField
                                            required
                                            fullWidth
                                            error={
                                                this.state.correo.length > 6 ? '' : 'error'
                                            }
                                            label="Correo de registro"
                                            onChange={this.handleChange('correo')}
                                            placeholder="Correo de registro"
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                       
                                        <FormControl sx={{ m: 1, width: '25rem' }} variant="outlined">
                                            <InputLabel 
                                                htmlFor="outlined-adornment-password" 
                                                required
                                            >
                                                Contraseña
                                            </InputLabel>
                                            
                                            <OutlinedInput
                                                id="outlined-adornment-password"   
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                error={
                                                    this.state.password.length > 8 ? '' : 'error'
                                                }
                                                /*value={this.state.password}*/
                                                onChange={this.handleChange('password')}
                                                placeholder="Contraseña" 
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() =>{
                                                            this.handleClickShowPassword();
                                                        }}
                                                        //onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                                label="Contraseña  "
                                            />
                                        </FormControl>
                                    </Grid>
                                </div>
                                <CardActions>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        {
                                            !this.state.loading &&
                                            <Button
                                                onClick = {() => (
                                                    this.doLogin()
                                                )}
                                                variant="contained" 
                                                style={{ margin:'10px', 
                                                        backgroundColor:'#1e81b0', 
                                                        fontWeight:'bold',
                                                        fontSize:"1rem"}} 
                                                
                                            >
                                                Ingresar
                                            </Button>
                                         }
                                         {
                                            this.state.loading &&
                                            <CircularProgress />
                                         }

                                    </Grid>
                                </CardActions>
                            </CardContent>
                        </Box>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >   
                            <span style={{color:'#46abc9'}}>
                                    ¿Tienes una cuenta?
                            </span>
                            <Link to ="registro" style={{marginBottom:'5px'}}>
                                Registrate
                            </Link>
                        </Grid>
                    </Card>
                </Container>
            </>
        )
    }
}