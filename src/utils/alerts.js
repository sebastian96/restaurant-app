import swal from 'sweetalert';

export const defaultAlert = ({title, message, type}) => swal(title, message, type);