import React from "react";
import Item from '../componentes/Item';
export default class ShopPagina extends React.Component {

    render() {
        return(
           
            <>

            <h4> <strong> PRODUCTS </strong></h4>


            <Item nombre="MacBook Pro Retina - Core i5 - 8GB " 
              img="/img/macbook.jpg"
              descripcion=" Touch ID. Ambient light sensor. Force Touch trackpad for precise cursor control and pressure-sensing capabilities; enables Force clicks, accelerators, pressure-sensitive drawing and Multi-Touch gestures." 
              precio="USD 1200"/>
             
             <Item nombre="HP Envy 17-cr0001na Laptop"
              img="/img/hp.jpg"
              descripcion="Unleash your creativity with the HP ENVY 17-cr0001na 17.3-inch Laptop that gives you the performance, features and freedom to create the way you want. Powered by Intel Core processor."
              precio="USD 900" />

             <Item nombre="Dell Latitude 14 5421"
              img="/img/dell.jpg"
              descripcion="11th Generation Intel Core H-series Processors, up to i7 vPro 8-core, offer businesses the performance, manageability, built-in security features and stability of the Intel vPro Platform, the platform built for business."
              precio="USD 1300"  />
            
            <Item nombre="Samsung Galaxy Book2"
            img="/img/samsung2.jpg"
            descripcion="The aluminium casing feels great, and USB-C charging means there's no bulking charger to carry around either. Inside, 8GB of RAM ensures multitasking between programmes is a cinch, and on the 15.6"
            precio="USD 1200"/>
    </>
        )
    }

}


