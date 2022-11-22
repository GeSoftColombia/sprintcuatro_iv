
import { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import { ApiConnectionServer } from "../../data/ApiConnectionServer";
import { Link } from "react-router-dom";

export class Registro extends Component{

    state = {
        nombres:'',
        apellidos:'',
        correo: '',
        password: '',
        showPassword: false,
        loading: false,
        usuarios:[]
    }

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.obtenerUsuarios();
    }

    apiServer = new ApiConnectionServer();

    handleClickShowPassword(){
        this.setState({ showPassword: !this.state.showPassword })
    }

    handleChange = (prop) => (event) => {
        this.setState({ ...this.state, [prop]: event.target.value });
    };

    doRegister()
    {
        var serverObject = {
            nombres:this.state.nombres,
            apellidos:this.state.apellidos,
            correo:this.state.correo,
            password:this.state.password,
        }

        this.setState({loading:true});
        const peticion = this.apiServer.postData( serverObject, '/user/create');
        
        peticion.then((data) => {
            this.setState({loading:false});
            return data.json()
        }).then((responseJson) => {
            this.setState({loading:false});
            // eslint-disable-next-line default-case
            switch(responseJson.code){
                case 200:
                    alert(responseJson.message);
                    this.obtenerUsuarios();
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

    obtenerUsuarios(){
        const peticion = this.apiServer.getData('/user/getall');
        peticion.then((data) => {
            return data.json();
        }).then((response) => {
            if(response.code === 200){
                this.setState({usuarios : response.data})
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    render(){
        return(
            <>
                <Container style={{ marginTop:125 }} maxWidth = "sm">
                    <Card sx={{ maxWidth: 1000, minHeight:430 }}>
                        <div>
                            <Grid
                                container
                                direction="row"
                                justifyContent = "center"
                                alignItems="center"
                            >
                                    <h1 style={{ margin:'10px', color:'#4527A0'}}>
                                        Registro de usuario
                                    </h1>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                    <h4 style={{ margin:'10px', color:'#ADA3CE'}}>
                                        Para ingresar, REGISTRE sus credenciales
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
                                                    this.state.nombres.length > 1 ? '' : 'error'
                                                }
                                                label="Nombre(s)"
                                                onChange={ e => this.setState({nombres: e.target.value}) } 
                                                placeholder="Nombre(s)"
                                            />
                                    </Grid>
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
                                                    this.state.apellidos.length > 1 ? '' : 'error'
                                                }
                                                label="Apellido(s)"
                                                onChange={ e => this.setState({apellidos: e.target.value}) } 
                                                placeholder="Apellido(s)"
                                            />
                                    </Grid>
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
                                                label="Correo"
                                                onChange={ e => this.setState({correo: e.target.value}) } 
                                                placeholder="Registra correo"
                                                
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
                                                onChange={ e => this.setState({password: e.target.value}) } 
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
                                                Repetir Contraseña
                                            </InputLabel>
                                            
                                            <OutlinedInput
                                                id="outlined-adornment-password"   
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                error={
                                                    this.state.password.length > 8 ? '' : 'error'
                                                }
                                                /*value={this.state.password}*/
                                                placeholder="Repetir Contraseña" 
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
                                                label="Repetir Contraseña  "
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
                                                onClick={() => {
                                                    this.doRegister()
                                                }}
                                                variant="contained" 
                                                style={{ margin:'10px', 
                                                        backgroundColor:'#4527A0',
                                                        fontWeight:'bold',
                                                        fontSize:"1rem"}}
                                            >
                                                registrar
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
                           <div style={{marginBottom:'30px'}}>              
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >   
                                    <span style={{color:'#ADA3CE'}}>
                                            ¿Estás registrado?
                                    </span>
                                    <Link to ="/">
                                        Accede
                                    </Link>
                                </Grid>
                            </div>
                    </Card>
                </Container>
            </>
        )
    }
}