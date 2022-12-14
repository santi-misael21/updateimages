import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Container } from "reactstrap";
import axios from "axios";

const MultiplesImages = (props) => {

    let [image, setImage] = useState({array: []})
    let [loading, setLoading] = useState('')

    function handleDrop(files){
        const uploaders = files.map((file,i)=>{
            const formData = new FormData();
            formData.append('file',file);
            formData.append('tags',`codeinfuse, medium, gist`);
            formData.append('upload_preset','ml_default');
            formData.append('api_key','728342892444894');
            formData.append('timestamps',(Date.now() / 1000 | 0));
            setLoading('true')
            return axios.post(`https://api.cloudinary.com/v1_1/daplsqpkv/image/upload`, formData, { headers : {
                "X-Requested-With": "XMLHttpRequest"
            }}).then(response => {
                const data = response.data
                console.log(data)
                const fileURL = data.secure_url;
                console.log(fileURL)
            })
            axios.all(uploaders).then(()=> {
                setLoading('false')
            })
        })
    }

    return (
        <div>
            <Container>
                <h1 className='text-center'>Subí tus imgs</h1>
                <Dropzone className= 'dropzone' 
                onDrop={handleDrop}
                onChange={(e)=>setImage(e.target.value)} value={image}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps({className:'dropzone'})}> <input {...getInputProps()} /> <span>archivito icon</span>
                            <p>Colocá las fotos por acá</p>

                            </div>
                        </section>
                    )}
                </Dropzone>
            </Container>
        </div>
    )
}

export default MultiplesImages;