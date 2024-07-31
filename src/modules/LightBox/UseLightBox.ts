import React from 'react';

function UseLightBox(initialOpen: boolean, initialIndex: number){
    const [open, setOpen] = React.useState(initialOpen);
    const [index, setIndex] = React.useState(initialIndex);

    const handleOpen = (index: number) => {
        setOpen(true);
        setIndex(index);
    };

    return [open, setOpen, index, setIndex, handleOpen];
}

export default UseLightBox;
