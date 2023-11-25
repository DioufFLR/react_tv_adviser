import s from './logo.module.css';

// eslint-disable-next-line react/prop-types
const Logo = ( {image, title, subtitle} ) =>
{
    return (
        <>
            <div className={ s.container }>
                <img src={image} alt="" className={ s.image }/>
                <span className={ s.title }>{ title }</span>
            </div>
            <span className={ s.subtitle }>{ subtitle }</span>
        </>
    );
};

export default Logo;