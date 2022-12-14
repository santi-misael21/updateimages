import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Container } from "reactstrap";

const MultiplesImages = (props) => {

    let [image, setImage] = useState({array: []})

    return (
        <div>
            <Container>
                <Dropzone className= 'dropzone' onChange={(e)=>setImage(e.target.value)} value={image}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps({className:'dropzone'})}> <input {...getInputProps()} /> <span>archivito icon</span>
                            <p>Colocá las boludeces acá</p>

                            </div>
                        </section>
                    )}
                </Dropzone>
            </Container>
        </div>
    )
}

export default MultiplesImages;