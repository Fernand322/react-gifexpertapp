import { findAllByTitle } from "@testing-library/react";
import { GifGridItem } from "../Components/GifGridItem"

describe('Pruebas GifGridItem', () => {

    const title='Titulo';
    const url= 'https://localhost/algo.jpg';
    const wrapper= shallow(<GifGridItem title = {title} url={url}  />);
    test('debe de mostrar el componente correctamente', () => {
       
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de haber un texto en el title', () => {
        const p= wrapper.find('p');
        expect(p.text().trim().toBe(title))
    })
    
    test('debe tener la imagen con sus props, url y alt', () => {
        const img = wrapper.find('img');
        //console.log(img.html()); //permite mostrar la estructura html de la imagen.
        //console.log(img.props('src'));//permite ver las props de la imagen.
        //IMPORTANTE!! Se pueden hacer varios expect por cada test.
        expect(img.props('src').toBe(url));
        expect(img.props('alt').toBe(title));

    })
    test('debe de tener animate_fadeIn', () => {
        const div = wrapper.find('div');
       // Seria una forma de hacer expect(div.props('className').toBe('animate__bounce'));
       const className = div.props('className');
       expect(className.include('animate__bounce').toBe(true))
    })
    
    
    
})
