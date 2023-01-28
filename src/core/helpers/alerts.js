import swal from 'sweetalert';

const showAlert = (titulo, icono, boton) => {
  swal({
    title: titulo,
    icon: icono,
    button: boton,
  });
};

export default showAlert;
