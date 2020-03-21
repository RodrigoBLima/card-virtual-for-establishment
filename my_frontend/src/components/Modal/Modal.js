import './styles.css'
import React from 'react'

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.outerStyle = {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            zIndex: 1
        };

        // default style
        this.style = {
            modal: {
                top: '100px',
                position: "relative",
                width: '60%',
                padding: 20,
                boxSizing: "border-box",
                backgroundColor: "#fff",
                margin: "40px auto",
                borderRadius: 3,
                zIndex: 2,
                textAlign: "left",
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                ...this.props.style.modal
            },
            overlay: {
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                ...this.props.style.overlay
            }
        };
    }

    render() {
        const { overlay, modal } = this.style        
        const { children, closeModal, isModalOpen } = this.props

        return (
            <div
                style={{
                    ...this.outerStyle,
                    display: isModalOpen ? "block" : "none"
                }}
            >
                <div style={overlay} onClick={closeModal} />
                <div onClick={closeModal} />
                <div style={modal}>{children}</div>
            </div>
        );
    }
}

export default Modal
