import { useState } from "react";
import { data_contact } from "../../utils/mockup"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Swal from 'sweetalert2'

const Footer = () => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        email: ''
    })

    const validate = (input) => {
        let errors = {};

        if (!input.email) {
            errors.email = 'Ingrese un correo electronico';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
            errors.email = 'Correo electronico invalido';
        }

        return errors;
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setErrors({})
        setValues(prevValue => ({ ...prevValue, [name]: value }))
        setErrors(validate({
            ...errors,
            [name]: value
       }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
 
        if(!values.email) 
            return setErrors({ email: "Ingrese un correo electronico" })

        if(Object.values(errors)?.length > 0)
            return errors

        const formData = new FormData()
        formData.append("email", values.email)

        let requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        setLoading(true)
        fetch("https://script.google.com/macros/s/AKfycbyWuCkWpZtmnIgiVzNNpKjjTs_9ikDnqgLXea7bLOfQbA-Z4fCaCe3Ayn-qiGwshB-PSQ/exec", requestOptions)
        .then(response => {
            return response.text()
        })
        .then(result => {
            setLoading(false)
            setValues(prevValue => ({ ...prevValue, email: "" }))
            return Swal.fire({
                title: result,
                icon: 'success'
            })
        })
        .catch(error => console.log('error', error))
    }

    return (
        <footer className="bg-[#784212] w-full">
            <div className="container mx-auto">
                <div className="py-6 sm:py-8 px-6">
                    <h3 className="text-white text-xl md:text-lg py-2 sm:py-0 uppercase font-bold">{data_contact?.title}</h3>
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: data_contact?.map }}></div>
                </div>
                <div className="w-full h-auto flex flex-col sm:flex-row gap-4 py-6 sm:py-8 px-6 text-white">
                    <div className="w-full h-full sm:w-1/2 sm:float-left">
                        <div className="my-4">
                            <h3 className="text-white text-xl md:text-lg py-2 sm:py-0 uppercase font-bold">dirección</h3>
                            <p>- {data_contact?.address}</p>
                        </div>
                        <div className="my-4">
                            <h3 className="text-white text-xl md:text-lg py-2 sm:py-0 uppercase font-bold">siguenos</h3>
                            <div className="flex gap-2 my-2">
                                {Object.entries(data_contact?.social_networks).map(([name, value]) => (
                                    <a
                                        key={name}
                                        href={`https://www.${name}.com/${value.replace('@', '')}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full border p-1 w-[30px] h-[30px] flex items-center justify-center hover:bg-[#2D3142]"
                                    >
                                        {name === 'instagram' && <FaInstagram />}
                                        {name === 'facebook' && <FaFacebook />}
                                        {name === 'twitter' && <FaTwitter />}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="my-4">
                            <h3 className="text-white text-xl md:text-lg py-2 sm:py-0 uppercase font-bold">contacto</h3>
                            <p>- {data_contact?.email}</p>
                            <p>- {data_contact?.phone}</p>
                        </div>
                    </div>
                    <div className="w-full h-full sm:w-1/2 sm:float-right">
                        <div className="bg-[#D9A066] rounded-xl w-[300px] lg:w-[400px] h-auto text-center m-auto p-4 flex flex-col justify-center">
                            <h4 className="text-white text-xl sm:text-lg py-2">¿Quieres recibir nuestras novedades?</h4>
                            <input className="rounded-xl p-2 my-2 text-black " name="email" type="text" placeholder="Correo electronico" value={values?.email} onChange={handleChange}/>
                            {errors?.email && Object.values(errors)?.length > 0 && <p className="text-red-500 font-bold text-xs animate-pulse">{errors?.email}</p>}
                            <button onClick={handleSubmit} className="my-2 py-2 bg-white rounded-xl uppercase font-bold text-sm text-black">{loading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto h-5 w-5"/> : "Si quiero!"}</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center py-4 px-6">
                    <p className="text-center text-white">Copyright &copy; 2024 My Company - Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer