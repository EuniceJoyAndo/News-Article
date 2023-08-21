import ReactDom from 'react-dom'
import { Button, Stack } from '@mui/material'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    transform: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    zIndex: 1000

}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        
        <div style={MODAL_STYLES}>
            {children}
            <Button spacing={1} variant="outlined" >Published</Button>
            <Button spacing={1} variant="outlined" color='error'>Delete</Button>
        </div>
        </>,
        document.getElementById('portal')
    )
}