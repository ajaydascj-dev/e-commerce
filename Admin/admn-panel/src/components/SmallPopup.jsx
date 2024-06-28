import * as React from 'react';
import PropTypes from 'prop-types';import Popper from '@mui/material/Popper';
import { useSpring, animated } from '@react-spring/web';
import Button from './controls/Button';
import { Box, Card, Divider, Typography } from '@mui/material';
import FormRow from './controls/FormRow';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addCategory } from '../features/category/categorySlice';



const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SmallPopup({children}) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { register, handleSubmit, control } = useForm();
 const dispatch = useDispatch() ;
  const onSubmit = (data) => {
 
  
    dispatch(addCategory({name : data.category}))
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'spring-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick} styles={{minWidth: "none",width:"50px",height : "100%"}}>
         {children}
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition  sx={{ zIndex: 1301 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Card sx={{ p: 1, bgcolor: 'background.paper' , border:"none" , minWidth : "300px"}}>
              <Typography>Add Category</Typography>
              <Divider/>
              <form onSubmit={handleSubmit(onSubmit)}>
              <FormRow name="category" register={register} LabelText="Category" style={{marginTop : "10px"}}/>

              <Box sx={{display:"flex" , gap: "5px"}}>
              <Button  
              color="error"
              text="CLose" onClick={() => setOpen(false)}></Button>
                <Button type="submit" text="Add"></Button>
              
              </Box>
              </form>
            </Card>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

