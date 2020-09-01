import React from 'react';
import './index.css';
import Card from './Card';
import Images from './ImgData';

const Service = () => {

    const setImage = image => {
        return (
            <>
                <Card
                    key={image.id}
                    imgSrc={image.src}
                    title={image.title}
                    description={image.description} />
            </>
        );
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Services </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            { Images.map(setImage) }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;