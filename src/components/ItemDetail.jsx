import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({producto}) => {
    const [cart, setCart] = useState(false)

    const {agregarCarrito} = useContext(CartContext)

    const onAdd = (contador) => {
        setCart(true) 
        agregarCarrito(producto, contador)
    }
    return (
    <div>
    <div className='flex flex-col gap-y-1 justify-center items-center font-montserrat m-4 bg-neutral-100 p-16 max-w-screen-md rounded-md'>
        <hr className='border-neutral-300 w-full' />
        <h1 className='uppercase text-xl font-normal'>{producto.nombre}</h1>
        <p className='text-neutral-400'>{producto.tipo}</p>
        <div className="flex flex-row gap-x-2 items-center">
            <img className='w-96' src={producto.imagen} alt="" />
            <hr className='border border-neutral-100 h-72' />
            <div className="flex flex-col gap-y-2">
                <h2 className='text-3xl'>${producto.precio}</h2>
                <h3>Stock: {producto.stock}</h3>
                {cart ? <Link to={"/carrito"}>Ir al carrito</Link> : <ItemCount stock={producto.stock} inicial={1} onAdd={onAdd}/>}
            </div>
        </div>
        <hr />
        <h2 className='text-xl'>Descripción:</h2>
        <p className='text-sm text-neutral-500'>{producto.descripcion}</p>
    </div>
    </div>
    )
}


export default ItemDetail