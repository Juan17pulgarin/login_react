import React, { useState, useEffect } from 'react';
import './Formulario.css'

function Formulario() {
    const [showFormularioLogin, setShowFormularioLogin] = useState(true);
    const [showFormularioRegistro, setShowFormularioRegistro] = useState(false);
    const [formularioContenedorStyle, setFormularioContenedorStyle] = useState({
        left: '0px'
    });
    const [loginStyle, setLoginStyle] = useState({
        display: 'block',
        opacity: '1'
    });
    const [registroStyle, setRegistroStyle] = useState({
        display: 'none',
        opacity: '0'
    });

    useEffect(() => {
        function tamannoPagina() {
            if (window.innerWidth > 850) {
                setLoginStyle({
                    display: 'block',
                    opacity: '1'
                });
                setRegistroStyle({
                    display: 'block',
                    opacity: '1'
                });
                setShowFormularioLogin(true);
                setShowFormularioRegistro(true);
            } else {
                setLoginStyle({
                    display: 'none',
                    opacity: '0'
                });
                setRegistroStyle({
                    display: 'block',
                    opacity: '1'
                });
                setShowFormularioLogin(true);
                setShowFormularioRegistro(false);
                setFormularioContenedorStyle({
                    left: '0px'
                });
            }
        }

        tamannoPagina();
        window.addEventListener('resize', tamannoPagina);
        return () => {
            window.removeEventListener('resize', tamannoPagina);
        };
    }, []);

    function iniciarSesion() {
        if (window.innerWidth > 850) {
            setShowFormularioRegistro(false);
            setShowFormularioLogin(true);
            setRegistroStyle({
                opacity: '1'
            });
            setLoginStyle({
                opacity: '0'
            });
            setFormularioContenedorStyle({
                left: '10px'
            });
        } else {
            setShowFormularioRegistro(false);
            setShowFormularioLogin(true);
            setRegistroStyle({
                display: 'block',
                opacity: '1'
            });
            setLoginStyle({
                display: 'none'
            });
            setFormularioContenedorStyle({
                left: '0px'
            });
        }
    }

    function registro() {
        if (window.innerWidth > 850) {
            setShowFormularioRegistro(true);
            setShowFormularioLogin(false);
            setRegistroStyle({
                display: 'none',
                opacity: '0'
            });
            setLoginStyle({
                display: 'block',
                opacity: '1'
            });
            setFormularioContenedorStyle({
                left: '410px'
            });
        } else {
            setShowFormularioRegistro(true);
            setShowFormularioLogin(false);
            setRegistroStyle({
                display: 'none'
            });
            setLoginStyle({
                display: 'block',
                opacity: '1'
            });
            setFormularioContenedorStyle({
                left: '0px'
            });
        }
    }

    return (
        <main>
            <div className="contenedor">
                <div className="caja_trasera">
                    <div className="login" style={loginStyle}>
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar a la página</p>
                        <button id="btn_iniciar_sesion" onClick={iniciarSesion}>Iniciar sesión</button>
                    </div>
                    <div className="registro" style={registroStyle}>
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para entrar a la página</p>
                        <button id="btn_registro" onClick={registro}>Registrarse</button>
                    </div>
                </div>
                <div className="formularios" style={formularioContenedorStyle}>
                    <form action="" className="formulario_login" style={{ display: showFormularioLogin ? 'block' : 'none' }}>
                        <h2>Iniciar sesión</h2>
                        <input type="text" placeholder="Correo electrónico" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Entrar</button>
                    </form>
                    <form action="" className="formulario_registro" style={{ display: showFormularioRegistro ? 'block' : 'none' }}>
                        <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre completo" />
                        <input type="text" placeholder="Correo electrónico" />
                        <input type="text" placeholder="Usuario" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Registrarse</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Formulario;
