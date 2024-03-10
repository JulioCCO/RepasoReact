
import PropTypes from 'prop-types';

// const newMessage = {
//     data: "data",
//     time: 'time',
// }

// const myFun = () => {
//     return ("hola");
// }
// const myF = myFun();

export const FirstApp = ({title, subTitle}) => {

  if (!title) {
    throw new Error('El title no existe');
  }
  return (
    <>
    <h1>{title}</h1>
    {/* <code>{JSON.stringify(newMessage)}</code> */}
    <h2>{subTitle}</h2>
    </>
  )
}

FirstApp.propTypes = {
  title:  PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subTitle: 'No hay subtitulo'
};