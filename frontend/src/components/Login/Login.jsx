import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

export function Login() {
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Coloque la informaciòn para ingresar</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' placeholder='Ingrese su correo'   size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' placeholder='Ingrese su contraseña' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Ingresar</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">¿Se te olvidó tu contraseña?</a></p>
            <p className='ms-5'>¿No tienes una cuenta? <a href="/registro" class="link-info">Registrarse aquí</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://media.istockphoto.com/photos/tents-on-the-beach-in-hotel-zone-in-cartagena-colombia-picture-id1297675638?k=20&m=1297675638&s=612x612&w=0&h=IPeLyEScfbx_ZkTZ_GS3OhX8tuY_qcYdHFGiN6u_bCM="
            alt="Login image" className="w-90" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

