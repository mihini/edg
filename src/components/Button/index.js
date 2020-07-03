import React from 'react';
import './Button.scss';
/**
 * Button component
 *
 * Optional props:
 * inline : boolean - inline style
 * height : string - height (with unit)
 * width : string - width (with unit)
 *
 * Examples for component:
 * <Button inline>Inline button</Button>
 * <Button disabled>Disabled button</Button>
 * <Button ghost success>Text for button</Button>
 *
 */


const Button = (props) => {
  const style = {
    height: props.height ? props.height : '30px',
    width: props.width ? props.width : '100%'
  }
  return (
    <button className={`button ${props.display}`} style={style} type="button" onClick={props.handleEvent}>{props.text}</button>
  )
}

export default Button;