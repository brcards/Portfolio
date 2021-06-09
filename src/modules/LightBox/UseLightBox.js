import React from 'react';

function UseLightBox(initialOpen, initialIndex){
    const [open, setOpen] = React.useState(initialOpen);
    const [index, setIndex] = React.useState(initialIndex);

    const handleOpen = (index) => {
        setOpen(true);
        setIndex(index);
    };

    return [open, setOpen, index, setIndex, handleOpen];
}

export default UseLightBox;
