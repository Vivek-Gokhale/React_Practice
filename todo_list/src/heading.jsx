import style from './Heading.module.css';
function heading()
{
    return <h1 className={style.heading + ' container'} >
        Todo App <br />
        </h1>
    
}
export default heading;