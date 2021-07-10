import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
  root: ({
    row,
    column,
    center,
    centerX,
    centerY,
    startX,
    endX,
    startY,
    endY,
    full,
  }) => {
    return {
      display: 'flex',
      flexDirection: (row && 'row') || (column && 'column') || 'row',
      ...(center
        ? {
            justifyContent: 'center',
            alignItems: 'center',
          }
        : {}),
      ...(centerX ? { justifyContent: 'center' } : {}),
      ...(centerY ? { alignItems: 'center' } : {}),
      ...(startX ? { justifyContent: 'flex-start' } : {}),
      ...(startY ? { alignItems: 'flex-start' } : {}),
      ...(endX ? { justifyContent: 'flex-end' } : {}),
      ...(endY ? { alignItems: 'flex-end' } : {}),
      ...(full ? { width: '100%' } : {}),
    };
  },
}));

const Flex = (props) => {
  const { id, children, className, style, onClick } = props;
  const classes = useStyles(props);
  return (
    <div
      id={id}
      className={`${classes.root} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Flex.defaultProps = {
  row: false,
  column: false,
  center: false,
  centerX: false,
  centerY: false,
  startX: false,
  endX: false,
  startY: false,
  endY: false,
  className: '',
  children: null,
  style: {},
};

export default Flex;
